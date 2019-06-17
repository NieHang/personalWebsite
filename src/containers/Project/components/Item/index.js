import React from 'react';
import './style.css';

export default function Item(props) {
	const { item } = props;
	return (
		<div className="item">
			<a href={item.link} target="_block">
				<img src={item.imgUrl} alt={item.name} className="item__img" />
			</a>
			<p className="item__name">
				<span />
				<span>{item.name}</span>
			</p>
		</div>
	);
}
