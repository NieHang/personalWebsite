import React, { Component } from 'react';
import './style.css';

export default class Control extends Component {
	render() {
		const { status } = this.props;
		return (
			<div
				className={status ? 'control__true' : 'control'}
				onClick={this.handleClick.bind(this, status)}
			/>
		);
	}

	handleClick(status) {
		if (this.props.changeBgColor) {
			this.props.changeBgColor(status);
		}
	}
}
