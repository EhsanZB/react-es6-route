import React from 'react';
import { Link } from 'react-router';


export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			name : 'John',
			title: 'something'
		};
	}


	render() {

		let that = this;
		const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                data: that.state,
            })
        });

		return (
			<div>
				<ul>
					<li><Link to="/" >Home</Link></li>
					<li><Link to="contact" >Contact</Link></li>
					<li><Link to="about" >About</Link></li>
					<li><Link to="users" >Users</Link></li>
				</ul>
				<hr/>
				{children}
			</div>
		);
	}
}
