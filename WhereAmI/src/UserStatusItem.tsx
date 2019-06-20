import React, { Component } from 'react';
import { Avatar, Card, CardHeader } from '@material-ui/core';
import './styles/UserStatusItem.css';

class UserStatusItem extends Component {
    render() {
        return (
            <Card>
                <CardHeader avatar={
                    <Avatar className='avatar'>
						PL
					</Avatar>
                } title="Piotr Krol (PLO)">
                </CardHeader>
			</Card>
		);
    }
}

export default UserStatusItem;