import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './styles/StatusColumn.css';
import UserStatusItem from './UserStatusItem';

type StatusColumnProps = {
    title: String
}

class StatusColumn extends Component<StatusColumnProps> {
    render() {
        return (
            <Paper className='status-column' elevation={0}>
                <div className='column-content'>
                    <Grid container spacing={1} justify="center">
                        <Grid item xs={12}>
                            {this.props.title}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1} justify="center">
                                <Grid item xs={12} sm={12}><UserStatusItem /></Grid>
                                <Grid item xs={12} sm={12}><UserStatusItem /></Grid>
                                <Grid item xs={12} sm={12}><UserStatusItem /></Grid>
                                <Grid item xs={12} sm={12}><UserStatusItem /></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default StatusColumn;