import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './styles/StatusColumn.css';
import UserStatusItem from './UserStatusItem';

class StatusColumn extends Component {
    render() {
        return (
            <Paper className='status-column' elevation={4}>
                <div className='column-content'>
                    <Grid container spacing={1} justify="center">
                        <Grid item xs={12} sm={12}><UserStatusItem /></Grid>
                        <Grid item xs={12} sm={12}><UserStatusItem /></Grid>
                        <Grid item xs={12} sm={12}><UserStatusItem /></Grid>
                        <Grid item xs={12} sm={12}><UserStatusItem /></Grid>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default StatusColumn;