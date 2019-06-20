import React, { Component } from 'react';
import StatusColumn from './StatusColumn';
import Grid from '@material-ui/core/Grid';
import './styles/Dashboard.css';
import MenuBar from './MenuBar';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <MenuBar />
                
                <Grid container className='status-field' spacing={2} justify="center">
                    <Grid item xs={12} sm={3}>
                        <StatusColumn title="Available"/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <StatusColumn title="Home office"/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <StatusColumn title="Out of office"/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <StatusColumn title="Unknown"/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;