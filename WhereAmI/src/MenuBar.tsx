import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './styles/MenuBar.css';

class MenuBar extends Component {
    render() {
        return (
            <Paper className='menu-bar' square={true} elevation={1} />
        );
    }
}

export default MenuBar;
