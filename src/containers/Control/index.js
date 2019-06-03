import React, { Component } from 'react';
import './style.css';

export default class Control extends Component {
	render() {
		const { status } = this.props;
		return (
			<div className={status ? 'control__true' : 'control'}>
				<div className="control__change" onClick={this.handleClick.bind(this, status)}>
					<span
						className="control__rhombus"
					/>
					{status ? (
						<img
							src="https://i.loli.net/2019/06/03/5cf4cc2b8bea661407.png"
							className="control__rightRow"
							alt='右箭头'
						/>
					) : (
						<img
							src="https://i.loli.net/2019/06/03/5cf4cc2b8bea661407.png"
							className="control__leftRow"
							alt='左箭头'
						/>
					)}
				</div>
				<img
					className={status ? 'control__cat' : 'control__cat__Y'}
					src="https://i.loli.net/2019/04/05/5ca6f2b2db40d.jpg"
					alt="caihongCat"
				/>
			</div>
		);
	}

	handleClick(status) {
		if (this.props.changeBgColor) {
			this.props.changeBgColor(status);
		}
	}
}
