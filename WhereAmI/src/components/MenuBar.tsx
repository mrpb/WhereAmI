import React, { Component } from 'react';
import { Theme } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tag from './Tag';

const styles = (theme: Theme) =>
    createStyles({
        menuBar: {
            width: '100%',
            height: 40,
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        title: {
            marginLeft: theme.spacing(8),
            fontWeight: theme.typography.fontWeightBold
        },
        date: {
            flexGrow: 1,
            marginLeft: theme.spacing(1),
        },
        availability: {
            marginRight: theme.spacing(12),
        },
        availabilityTag: {
            display: 'inline-block',
            marginRight: 10,
            marginLeft: 10
        }
    });

export interface IMenuBarProps extends WithStyles<typeof styles> {
    availablePeopleCount: number,
    remotePeopleCount: number,
    absentPeopleCount: number
}

class MenuBar extends Component<IMenuBarProps> {
    render = () => {
        const { classes } = this.props;

        return (
            <Paper className={classes.menuBar} square={true} elevation={1}>
                <div className={classes.title}>
                    WorkZone Status Board
                </div>
                <div className={classes.date}>
                    Monday, April 22
                </div>
                <div className={classes.availability} >
                    <Tag className={classes.availabilityTag} text={`${this.props.availablePeopleCount}`} color='green' />
                    <Tag className={classes.availabilityTag} text={`${this.props.remotePeopleCount}`} color='blue'/>
                    <Tag className={classes.availabilityTag} text={`${this.props.absentPeopleCount}`} color='red'/>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(MenuBar);