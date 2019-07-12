import User from '../model/User';
import UserStatus from '../model/UserStatus';

export default class UserStatusController {
    private avatar = 'https://vignette.wikia.nocookie.net/james-camerons-avatar/images/d/d4/Neytiri_Profil.jpg/revision/latest?cb=20100226001342&path-prefix=pl';

    private availableUsers = [
        new User('EWK', 'Ewa Kotowska', this.avatar),
        new User('PHG', 'Pham Quoc Hing', this.avatar),
        new User('HGO', 'Hugo Assuncao', this.avatar),
        new User('THB', 'Thakujereet Bharwana', this.avatar)
    ];
    private remoteUsers = [
        new User('SAF', 'Salome Fernan', this.avatar),
        new User('TAG', 'Tatiana Gagelman', this.avatar),
        new User('EVA', 'Evelyn Allen', this.avatar)
    ];
    private absentUsers = [
        new User('NOG', 'Nout Golstein', this.avatar),
        new User('FOA', 'Foroogh Abdi', this.avatar),
        new User('SBW', 'Sebastian Westergen', this.avatar),
        new User('CHC', 'Choike Chinasa', this.avatar),
        new User('HEH', 'Herse Hedman', this.avatar)
    ];

    public getUsersWithStatus = (status: UserStatus): Array<User> => {
        if (status === UserStatus.Office) return this.availableUsers;
        if (status === UserStatus.Remote) return this.remoteUsers;
        if (status === UserStatus.Absent) return this.absentUsers;
        return [];
    }

    public setUserStatus = (userInitials: string, status: UserStatus) => {
        var user = this.removeUserFromLists(userInitials);

        if (user == null) return;

        if (status === UserStatus.Office)       this.availableUsers = this.availableUsers.concat(user);
        else if (status === UserStatus.Remote)  this.remoteUsers = this.remoteUsers.concat(user);
        else if (status === UserStatus.Absent)  this.absentUsers = this.absentUsers.concat(user);
    }

    private removeUserFromLists = (userInitials: string): User | null => {
        var user = null;
        for (var i = 0; i < this.availableUsers.length; ++i)
            if (this.availableUsers[i].initials === userInitials) {
                user = this.availableUsers[i];
                this.availableUsers.splice(i, 1);
            }
        if (user !== null) return user;

        for (i = 0; i < this.remoteUsers.length; ++i)
            if (this.remoteUsers[i].initials === userInitials) {
                user = this.remoteUsers[i];
                this.remoteUsers.splice(i, 1);
            }
        if (user !== null) return user;

        for (i = 0; i < this.absentUsers.length; ++i)
            if (this.absentUsers[i].initials === userInitials) {
                user = this.absentUsers[i];
                this.absentUsers.splice(i, 1);
            }

        return user;
    }
}