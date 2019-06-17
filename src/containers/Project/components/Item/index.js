import React from 'react';
import ImgItem from '../../../../components/ImgItem';
import './style.css';

export default function Item(props) {
	const { item, index } = props;
	return (
		<div className="item">
			<ImgItem
				key={item.url}
				url={item.url}
				imgUrl={item.imgUrl}
				index={index}
				className='item__img'
			/>
			<p className="item__name">
				<span />
				<span>{item.name}</span>
			</p>
		</div>
	);
}
