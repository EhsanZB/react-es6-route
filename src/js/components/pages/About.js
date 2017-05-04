import React from 'react';

export default class About extends React.Component {


	render() {

		const paraph = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>;

		// function Welcome(props) {
		// 	return <h3>Hello, {props.name}</h3>
		// };

		const Welcome = (props) => {
			return (
				<div>
					<h3>Hello, {props.name}</h3>
					<h5>Hello again, {this.props.data.name}</h5>
				</div>
			)
		};

		const element = <Welcome name="Sara" />;
		const { title } = this.props.data;
		
		return (
			<div>
				<h1>About page!</h1>
				{paraph}
				{element}

				<h3>This title is from state: {title}</h3>
				
			</div>

		);
	}
}