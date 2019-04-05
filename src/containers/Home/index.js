import React, { Component } from 'react';
import Content from './components/Content';
import './style.css';

export default class Home extends Component {
	render() {
		return (
			<div className="wrap">
				<Content />
			</div>
		);
	}
}
