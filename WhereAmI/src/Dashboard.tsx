import React, { Component } from 'react';
import { Theme } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { DragDropContext } from 'react-beautiful-dnd';
import StatusColumn from './StatusColumn';
import MenuBar from './MenuBar';
import UserStatus from './UserStatus';
import User from './User';

const styles = (theme: Theme) =>
    createStyles({
        dashboard: {
        },
        statusField: {
            width: '100%',
            height: '100%',
            flexGrow: 1,
            paddingTop: theme.spacing(3),
            paddingLeft: theme.spacing(7),
            paddingRight: theme.spacing(7)
        }
    });

export interface IDashboardProps extends WithStyles<typeof styles> {
}

class Dashboard extends Component<IDashboardProps> {
    render() {
        const { classes } = this.props;

        var availableUsers = this.getAvailableUsers();
        var remoteUsers = this.getRemoteUsers();
        var absentUsers = this.getAbsentUsers();

        return (
            <div className={classes.dashboard}>
                <MenuBar
                    availablePeopleCount={availableUsers.length}
                    remotePeopleCount={remoteUsers.length}
                    absentPeopleCount={absentUsers.length} />

                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Grid container className={classes.statusField} spacing={4} justify="center">
                        <Grid item xs>
                            <StatusColumn status={UserStatus.Office} users={availableUsers} />
                        </Grid>
                        <Grid item xs>
                            <StatusColumn status={UserStatus.Remote} users={remoteUsers} />
                        </Grid>
                        <Grid item xs>
                            <StatusColumn status={UserStatus.Absent} users={absentUsers} />
                        </Grid>
                    </Grid>
                </DragDropContext>
            </div>
        );
    }

    private onDragEnd() {

    }

    private getAvailableUsers(): Array<User> {
        const avatar = 'https://vignette.wikia.nocookie.net/james-camerons-avatar/images/d/d4/Neytiri_Profil.jpg/revision/latest?cb=20100226001342&path-prefix=pl';
        return [
            new User('EWK', 'Ewa Kotowska', avatar),
            new User('PHG', 'Pham Quoc Hing', avatar),
            new User('HGO', 'Hugo Assuncao', avatar),
            new User('THB', 'Thakujereet Bharwana', avatar)
        ];
    }

    private getRemoteUsers(): Array<User> {
        const avatar = 'https://vignette.wikia.nocookie.net/james-camerons-avatar/images/d/d4/Neytiri_Profil.jpg/revision/latest?cb=20100226001342&path-prefix=pl';
        return [
            new User('SAF', 'Salome Fernan', avatar),
            new User('TAG', 'Tatiana Gagelman', avatar),
            new User('EVA', 'Evelyn Allen', avatar)
        ];
    }

    private getAbsentUsers(): Array<User> {
        const avatar = 'https://vignette.wikia.nocookie.net/james-camerons-avatar/images/d/d4/Neytiri_Profil.jpg/revision/latest?cb=20100226001342&path-prefix=pl';
        return [
            new User('NOG', 'Nout Golstein', avatar),
            new User('FOA', 'Foroogh Abdi', avatar),
            new User('SBW', 'Sebastian Westergen', avatar),
            new User('CHC', 'Choike Chinasa', avatar),
            new User('HEH', 'Herse Hedman', avatar)
        ];
    }
}

export default withStyles(styles)(Dashboard);