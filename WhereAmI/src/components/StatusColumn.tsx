import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import { Droppable } from 'react-beautiful-dnd';
import UserStatusItem from './UserStatusItem';
import UserStatus from '../model/UserStatus';
import User from '../model/User';

const styles = (theme: Theme) =>
    createStyles({
    });

export interface IStatusColumnProps extends WithStyles<typeof styles> {
    status: UserStatus,
    users: Array<User>
}

class StatusColumn extends Component<IStatusColumnProps> {
    render = () => {
        return (
            <Droppable droppableId={this.props.status.toString()} type='USER'>
                {(provided, snapshot) => (
                    <div className='status-column' ref={provided.innerRef} {...provided.droppableProps}>
                        <div className='column-content'>
                            <Grid item xs={12}>
                                <Grid container spacing={1} justify="center">
                                    {
                                        this.props.users.map((user) => {
                                            return (
                                                <Grid key={user.initials} item xs={12} sm={12}>
                                                    <UserStatusItem user={user} status={this.props.status} />
                                                </Grid>
                                            );
                                        })
                                    }
                                    {provided.placeholder}
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                )}
            </Droppable>
        );
    }
}

export default withStyles(styles)(StatusColumn);