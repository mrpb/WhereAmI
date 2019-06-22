import React, { Component } from 'react';
import { Theme } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
    createStyles({
        tag: {
            border: '1px solid',
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 100,
            paddingBottom: 2,
            fontSize: theme.typography.subtitle2.fontSize
        }
    }
);

export interface ITagProps extends WithStyles<typeof styles> {
    className: string,
    text: string,
    color: string
}

class Tag extends Component<ITagProps> {
    render() {
        const { classes } = this.props;

        const style = {
            color: this.props.color,
            borderColor: this.props.color
        };

        return (
            <div className={this.props.className} >
                <div className={classes.tag} style={style}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Tag);