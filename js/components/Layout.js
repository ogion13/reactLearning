import React from "react";
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			name:'will'
		};
	}

	changeName(name){
		this.setState({name});
	}
	
	render() {
		const title = 'Hi all where';
		return (
			<div>
				<Header title = {this.state.name} changeName = {this.changeName.bind(this)} />
				<Body />
				<Footer />
			</div>
		);
	}
}