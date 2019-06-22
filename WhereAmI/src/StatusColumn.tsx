import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import UserStatusItem from './UserStatusItem';
import UserStatus from './UserStatus';
import User from './User';

const styles = (theme: Theme) =>
    createStyles({
    });

export interface IStatusColumnProps extends WithStyles<typeof styles> {
    status: UserStatus,
    users: Array<User>
}

class StatusColumn extends Component<IStatusColumnProps> {
    render() {
        return (
            <div className='status-column'>
                <div className='column-content'>
                    <Grid item xs={12}>
                        <Grid container spacing={1} justify="center">
                            {
                                this.props.users.map((user) => {
                                    return (
                                        <Grid item xs={12} sm={12}>
                                            <UserStatusItem user={user} status={this.props.status} />
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(StatusColumn);