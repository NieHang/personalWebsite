import React, { Component } from 'react';
import './style.css';

export default class Control extends Component {
	render() {
		const { status } = this.props;
		return (
			<div
				className={status ? 'control__true' : 'control'}
			>
				<span className='control__rhombus' onClick={this.handleClick.bind(this, status)}></span>
				<img className={status ? 'control__cat' : 'control__cat__Y'} src="https://i.loli.net/2019/04/05/5ca6f2b2db40d.jpg" alt="caihongCat"/>
			</div>
		);
	}

	handleClick(status) {
		if (this.props.changeBgColor) {
			this.props.changeBgColor(status);
		}
	}
}
