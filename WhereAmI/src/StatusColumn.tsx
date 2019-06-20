import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './styles/StatusColumn.css';

class StatusColumn extends Component {
    render() {
        return (
            <Paper className='status-column' elevation={4}>
                <div className='column-content'>
                    Bla bla
                </div>    
            </Paper>
        );
    }
}

export default StatusColumn;