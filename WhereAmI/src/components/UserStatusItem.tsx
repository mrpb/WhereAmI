import React, { Component } from 'react';
import { Avatar, Theme } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import Tag from './Tag';
import StatusMarker from './StatusMarker';
import UserStatus from '../model/UserStatus';
import User from '../model/User';

const styles = (theme: Theme) =>
    createStyles({
        card: {
            padding: theme.spacing(1)
        },
        avatarRing: {
            width: 60,
            height: 60,
            margin: -2 * theme.spacing(1),
            marginLeft: theme.spacing(1),
            backgroundColor: '#fff'
        },
        avatar: {
            width: 55,
            height: 55,
            margin: theme.spacing(1),
            backgroundColor: '#fff',
        },
        cardContent: {
            padding: 10,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 3
        },
        statusDot: {
            marginLeft: 20 + theme.spacing(2)
        },
        initials: {
            marginLeft: theme.spacing(1),
            fontWeight: 'bold',
            color: theme.palette.text.disabled
        },
        userName: {
            flexGrow: 1,
            textAlign: 'right',
            fontWeight: theme.typography.fontWeightBold,
			marginLeft: theme.spacing(1),
        },
        status: {
            marginLeft: theme.spacing(1)
        }
    });

export interface IUserStatusItemProps extends WithStyles<typeof styles> {
    user: User,
    status: UserStatus
}

class UserStatusItem extends Component<IUserStatusItemProps> {
    render = () => {
        const { classes } = this.props;

        var statusText = this.getStatusText(this.props.status);
        var statusColor = this.getStatusColor(this.props.status);

        return (
            <Draggable draggableId={this.props.user.initials} index={0}>
                {(provided, snapshot) => (
                    <div className={classes.card} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className={classes.cardContent}>
                            <Avatar className={classes.avatarRing}>
                                <Avatar className={classes.avatar} src={this.props.user.avatarUrl} />
                            </Avatar>
                            <StatusMarker className={classes.statusDot} color={`${statusColor}`} />
                            <div className={classes.initials}>{this.props.user.initials}</div>
                            <div className={classes.userName}>{this.props.user.name}</div>
                            <Tag className={classes.status} text={statusText} color={`${statusColor}`} />
                        </div>
                    </div>
                )}
            </Draggable>
        );
    }

    private getStatusText = (status: UserStatus): string => {
        if (status === UserStatus.Office) return 'available';
        if (status === UserStatus.Remote) return 'remotely';
        if (status === UserStatus.Absent) return 'absent';
        return 'unknown';
    }

    private getStatusColor = (status: UserStatus): string => {
        if (status === UserStatus.Office) return 'green';
        if (status === UserStatus.Remote) return 'blue';
        if (status === UserStatus.Absent) return 'red';
        return 'gray';
    }
}

export default withStyles(styles)(UserStatusItem);