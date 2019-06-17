import React from 'react';
import { Link } from 'react-router-dom';

import './css/style.css';

export default function ListMobile(props) {
	const { showList, bgColor, changeListStatus } = props;

	function handleClick(showList) {
		if (changeListStatus) {
			changeListStatus(showList);
		}
	}

	return (
		<div
			className={
				showList
					? bgColor
						? 'list__show bgColor'
						: 'list__show'
					: 'list__hide'
			}
		>
			<ul className="list__links">
				<Link to="/" onClick={() => handleClick(showList)}>
					Home
				</Link>
				<Link to="/project" onClick={() => handleClick(showList)}>
					Project
				</Link>
				<Link to="/study" onClick={() => handleClick(showList)}>
					Study
				</Link>
				<Link to="/barrage" onClick={() => handleClick(showList)}>
					Barrage
				</Link>
				<div className="list__contacts">
					<img
						src="https://i.loli.net/2019/04/05/5ca72974ccc87.png"
						alt="微信"
					/>
					<img
						src="https://i.loli.net/2019/06/06/5cf8846e5051b66958.png"
						alt="wechatQRcode"
					/>
					<img src="https://i.loli.net/2019/04/05/5ca72974ce809.png" alt="qq" />
					<img
						src="https://i.loli.net/2019/06/06/5cf8845a79edf58433.jpg"
						alt="qqQRcode"
					/>
				</div>
			</ul>
		</div>
	);
}
