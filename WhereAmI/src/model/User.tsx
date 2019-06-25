export default class User {
    initials: string;
    name: string;
    avatarUrl: string;

    constructor(initials: string, name: string, avatarUrl: string) {
        this.initials = initials;
        this.name = name;
        this.avatarUrl = avatarUrl;
    }
}