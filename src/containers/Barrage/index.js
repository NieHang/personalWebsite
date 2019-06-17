import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
// eslint-disable-next-line
import axios from 'axios';
import './css/style.css';

import BarrageItem from './components/BarrageItem';

export default function Barrag() {
	const [barrages, setBarrages] = useState([<BarrageItem key='hero' index={'hero'} value={'这个世界需要英雄！'} />])
	const [value, setValue] = useState('')
	let   [key, setKey] = useState(0)
	
	useEffect(() => {
		// axios.get('').then(res => {
		// 	console.log(res)
		// })
	})

	function handleChange(e) {
		setValue(e.target.value)
	}

	function handleClick() {
		setKey(key += 1)
		setBarrages([
			...barrages,
			<BarrageItem key={key} value={value} />
		])
	}
	
	return (
		<div className="barrage">
			<div className="barrage__list">
				{barrages.map(item => item)}
			</div>
			<div className="barrage__form">
				<Draggable
					handle=".handle"
					defaultPosition={{ x: 0, y: 0 }}
					position={null}
					grid={[25, 25]}
					scale={1}
				>
					<img
						src="https://i.loli.net/2019/04/03/5ca4a63c11e58.png"
						alt="头像"
						className="handle"
					/>
				</Draggable>
				<p>欢迎来到小肥橘猫妙妙屋</p>
				<p>发个弹幕吧</p>
				<p>
					<input
						type="text"
						placeholder="biubiubiu~"
						onChange={handleChange}
					/>
					<img
						src="https://i.loli.net/2019/04/06/5ca8607559fa4.png"
						alt="biu"
						onClick={handleClick}
					/>
				</p>
			</div>
		</div>
	);
}
