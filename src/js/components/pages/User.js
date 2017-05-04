import React from 'react';


export default class User extends React.Component {
	render() {
		const { params } = this.props;
        
		return (
			<div>
				<p>Hello, {params.userName}</p>
			</div>

		);
	}
}