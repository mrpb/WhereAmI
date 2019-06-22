import React, { Component } from 'react';
import { Avatar, CardHeader, CardContent, Theme } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
            backgroundColor: red[500],
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
            width: 20,
            height: 20,
            borderRadius: 5,
            marginLeft: 20 + theme.spacing(2)
        },
        statusDotOffice: {
            backgroundColor: 'green',
            color: 'green'
        },
        statusDotRemote: {
            backgroundColor: 'blue',
            color: 'blue'
        },
        statusDotAbsent: {
            backgroundColor: 'red',
            color: 'red'
        },
        statusDotUnknown: {
            backgroundColor: 'gray',
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
            marginLeft: theme.spacing(1),
            border: '1px solid',
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 100,
            fontSize: theme.typography.subtitle2.fontSize
        },
        statusOffice: {
            borderColor: 'green',
            color: 'green'
        },
        statusRemote: {
            borderColor: 'blue',
            color: 'blue'
        },
        statusAbsent: {
            borderColor: 'red',
            color: 'red'
        },
        statusUnknown: {
            borderColor: 'gray',
			color: 'gray'
        }
    });

export enum UserStatus {
    Office,
    Remote,
    Absent,
	Unknown
}

export interface IUserStatusItemProps extends WithStyles<typeof styles> {
    status: UserStatus
}

class UserStatusItem extends Component<IUserStatusItemProps> {
    render() {
        const { classes } = this.props;

        var statusText = 'unknown';
        var statusDotClass = classes.statusDotUnknown;
        var statusClass = classes.statusUnknown;
        if (this.props.status === UserStatus.Office) {
            statusText = 'available';
            statusDotClass = classes.statusDotOffice;
            statusClass = classes.statusOffice;
        }
        if (this.props.status === UserStatus.Remote) {
            statusText = 'remotely';
            statusDotClass = classes.statusDotRemote;
            statusClass = classes.statusRemote;
        }
        if (this.props.status === UserStatus.Absent) {
            statusText = 'absent';
            statusDotClass = classes.statusDotAbsent;
            statusClass = classes.statusAbsent;
        }

        return (
            <div className={classes.card}>
                <div className={classes.cardContent}>
					<Avatar className={classes.avatarRing}>
                        <Avatar className={classes.avatar}
								src='https://vignette.wikia.nocookie.net/james-camerons-avatar/images/d/d4/Neytiri_Profil.jpg/revision/latest?cb=20100226001342&path-prefix=pl'/>
                    </Avatar>
                    <div className={`${classes.statusDot} ${statusDotClass}`}></div>
                    <div className={classes.initials}>PLO</div>
					<div className={classes.userName}>
						Piotr Krol
					</div>
                    <div className={`${classes.status} ${statusClass}`}>
                        {statusText}
					</div>
				</div>
            </div>
        );
    }
}

export default withStyles(styles)(UserStatusItem);