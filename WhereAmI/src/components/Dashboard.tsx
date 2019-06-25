import React, { Component } from 'react';
import { Theme } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { DragDropContext, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import StatusColumn from './StatusColumn';
import MenuBar from './MenuBar';
import UserStatus from '../model/UserStatus';
import UserStatusController from '../controllers/UserStatusController';

const styles = (theme: Theme) =>
    createStyles({
        dashboard: {
        },
        statusField: {
            width: '100%',
            flexGrow: 1,
            paddingTop: theme.spacing(3),
            paddingLeft: theme.spacing(7),
            paddingRight: theme.spacing(7)
        },
        statusColumn: {
            // TODO make it take up entire vertical space
        }
    });

export interface IDashboardProps extends WithStyles<typeof styles> {
    statusController: UserStatusController
}

class Dashboard extends Component<IDashboardProps> {
    render() {
        const { classes } = this.props;

        var controller = this.props.statusController;

        var availableUsers = controller.getUsersWithStatus(UserStatus.Office);
        var remoteUsers = controller.getUsersWithStatus(UserStatus.Remote);
        var absentUsers = controller.getUsersWithStatus(UserStatus.Absent);

        return (
            <div className={classes.dashboard}>
                <MenuBar
                    availablePeopleCount={availableUsers.length}
                    remotePeopleCount={remoteUsers.length}
                    absentPeopleCount={absentUsers.length} />

                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Grid container className={classes.statusField} spacing={4} justify="center">
                        <Grid item xs className={classes.statusColumn}>
                            <StatusColumn status={UserStatus.Office} users={availableUsers} />
                        </Grid>
                        <Grid item xs className={classes.statusColumn}>
                            <StatusColumn status={UserStatus.Remote} users={remoteUsers} />
                        </Grid>
                        <Grid item xs className={classes.statusColumn}>
                            <StatusColumn status={UserStatus.Absent} users={absentUsers} />
                        </Grid>
                    </Grid>
                </DragDropContext>
            </div>
        );
    }

    private onDragEnd = (result: DropResult, provided: ResponderProvided) => {
        if (result.reason !== 'DROP' || result.destination == null) return;

        var userInitials = result.draggableId;
        var dstColumnDroppableId = result.destination.droppableId;
        var newStatus = this.getColumnStatusByDroppableId(dstColumnDroppableId);

        this.props.statusController.setUserStatus(userInitials, newStatus);
        this.setState({});
    }

    private getColumnStatusByDroppableId = (droppableId: string) => {
        if (droppableId === UserStatus.Office.toString()) return UserStatus.Office;
        if (droppableId === UserStatus.Remote.toString()) return UserStatus.Remote;
        if (droppableId === UserStatus.Absent.toString()) return UserStatus.Absent;
        return UserStatus.Unknown
    }
}

export default withStyles(styles)(Dashboard);