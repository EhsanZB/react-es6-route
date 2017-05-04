import React from 'react';
import { Link } from 'react-router';

export default class Users extends React.Component {
	render() {


        const { params } = this.props;
        const { query }  = this.props.location;

        // example: /users/user1?country=Canada

		return (
			<div>
				<h1>All users</h1>
                <ul>
                    <li><Link to="/users/user1?country=Iran">user#1</Link></li>
                    <li><Link to="/users/user2?country=Canada">user#2</Link></li>
                </ul>
                <hr/> 
                <p>Hello, {params.userName}</p>
                <p>Country: {query.country}</p>
			</div>

		);
	}
}