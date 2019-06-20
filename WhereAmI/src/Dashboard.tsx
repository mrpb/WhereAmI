import React, { Component } from 'react';
import StatusColumn from './StatusColumn';
import './styles/Dashboard.css';
import MenuBar from './MenuBar';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <MenuBar/>
                <StatusColumn />
                <StatusColumn />
                <StatusColumn />
                <StatusColumn />
            </div>
        );
    }
}

export default Dashboard;