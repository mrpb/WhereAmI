import React, { Component } from 'react';
import { Theme } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
    createStyles({
        marker: {
            width: 20,
            height: 20,
            borderRadius: 5,
        }
    }
);

export interface IStatusMarkerProps extends WithStyles<typeof styles> {
    className: string
    color: string
}

class StatusMarker extends Component<IStatusMarkerProps> {
    render = () => {
        const { classes } = this.props;

        const style = {
            backgroundColor: this.props.color
        };

        return (
            <div className={this.props.className} >
                <div className={classes.marker} style={style}>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(StatusMarker);