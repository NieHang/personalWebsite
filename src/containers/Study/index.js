import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemWeb from './components/ItemWeb';
import { throttle } from 'lodash';

import './css/style.css';

export default function Study() {
	const [data, setData] = useState([]);
	const [showBack, setShowBack] = useState(false);

	/**
	 * 给滚动事件进行节流
	 */
	const changeBackStatusThrottled = throttle(changeBackStatus, 500);

	const fetchData = async () => {
		const {
			data: { data }
		} = await axios.get('./websites.json');

		setData(data);
	};

	useEffect(
		() => {
			fetchData();
		},
		() => {
			changeBackStatusThrottled.cancel();
		}
	);

	function handleScroll(e) {
		const currentTarget = e.currentTarget;
		changeBackStatusThrottled(currentTarget);
	}

	/** 改变回退按钮的状态 */ 
	function changeBackStatus(currentTarget) {
		if (typeof currentTarget === 'object') {
			setShowBack(currentTarget.scrollTop > 300 ? true : false);
		}
	}

	function handleBack() {
		if (showBack) {
			document.getElementById('study').scrollTop = 0;
			setShowBack(false);
		}
	}

	return (
		<section className="study" id="study" onScroll={handleScroll}>
			<div className={showBack ? 'back' : ''} onClick={handleBack} />
			{data.map(value => (
				<article className="study__item" key={value.id}>
					<p className="item__title">{value.title}</p>
					<div className="item__wrap">
						{value.websites.map(item => (
							<ItemWeb
								key={item.id}
								name={item.name}
								imgUrl={item.imgUrl}
								address={item.address}
							/>
						))}
					</div>
				</article>
			))}
		</section>
	);
}