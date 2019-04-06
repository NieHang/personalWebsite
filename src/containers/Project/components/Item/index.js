import React, { Component } from 'react';
import './style.css';

export default class Item extends Component {
	render() {
		const { item } = this.props;
		return (
			<div className="item">
				<a href={item.link} target="_block">
					<img src={item.imgUrl} alt={item.name} className="item__img" />
				</a>
        <p className='item__name'>
          <span></span>
          <span>{item.name}</span>
        </p>
			</div>
		);
	}
}
