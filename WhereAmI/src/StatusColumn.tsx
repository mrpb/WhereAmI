import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './styles/StatusColumn.css';
import UserStatusItem, { UserStatus } from './UserStatusItem';

class StatusColumn extends Component {
    render() {
        return (
            <div className='status-column'>
                <div className='column-content'>
                    <Grid item xs={12}>
                        <Grid container spacing={1} justify="center">
                            <Grid item xs={12} sm={12}><UserStatusItem status={UserStatus.Office} /></Grid>
                            <Grid item xs={12} sm={12}><UserStatusItem status={UserStatus.Remote} /></Grid>
                            <Grid item xs={12} sm={12}><UserStatusItem status={UserStatus.Absent} /></Grid>
                            <Grid item xs={12} sm={12}><UserStatusItem status={UserStatus.Unknown} /></Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default StatusColumn;