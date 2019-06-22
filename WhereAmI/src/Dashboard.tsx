import React, { Component } from 'react';
import StatusColumn from './StatusColumn';
import Grid from '@material-ui/core/Grid';
import './styles/Dashboard.css';
import MenuBar from './MenuBar';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <MenuBar availablePeopleCount={1} remotePeopleCount={2} absentPeopleCount={3} />
                
                <Grid container className='status-field' spacing={2} justify="center">
                    <Grid item xs={12} sm={3}>
                        <StatusColumn />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <StatusColumn />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <StatusColumn />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <StatusColumn />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;