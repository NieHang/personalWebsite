import React from 'react';

export default function BarrageItem(props) {
	const { index, value } = props;
	return (
		<div
			className="barrage__item"
			key={index}
			style={{
				top: `${parseInt(Math.random(0, 10) * 10) * 20}px`,
				color: `rgba(${parseInt(Math.random(0, 1000) * 1000)}, ${parseInt(
					Math.random(0, 1000) * 1000
				)}, ${parseInt(Math.random(0, 1000) * 1000)})`,
				animationDelay: `${parseInt(Math.random(0, 10) * 10) * 100}ms`
			}}
		>
			{value}
		</div>
	);
}
