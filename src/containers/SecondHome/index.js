import React, { Component } from 'react';
import './style.css'

export default class SecondHome extends Component {
	render() {
		return <div className={this.props.status ? 'shome__true' : 'shome'} />;
	}
}
