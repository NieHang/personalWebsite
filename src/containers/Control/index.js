import React from 'react';
import './css/style.css';

export default function Control(props) {
	const { status, changeBgColor } = props;

	function handleClick(status) {
		if (changeBgColor) {
			changeBgColor(status);
		}
	}

	return (
		<div className={status ? 'control__true' : 'control'}>
			<div className="control__change" onClick={() => handleClick(status)}>
				<span className="control__rhombus" />
				{status ? (
					<img
						src="https://i.loli.net/2019/06/03/5cf4cc2b8bea661407.png"
						className="control__rightRow"
						alt="右箭头"
					/>
				) : (
					<img
						src="https://i.loli.net/2019/06/03/5cf4cc2b8bea661407.png"
						className="control__leftRow"
						alt="左箭头"
					/>
				)}
			</div>
			<img
				className={status ? 'control__cat' : 'control__cat__Y'}
				src="https://i.loli.net/2019/06/06/5cf879562670f81334.jpg"
				alt="caihongCat"
			/>
		</div>
	);
}
