import React from "react";

export default class Header extends React.Component{
	constructor() {
		super();
		this.name = 'will'
	}
	handleChange(e){
		const title = e.target.value;
		this.props.changeName(title);
	}
	render() {
		return (
			<header> It is {this.props.title} header
				<input onChange = {this.handleChange.bind(this)} />
			</header>
			
		);
	}
}


