/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import ImgItem from '../../components/ImgItem';
import './css/style.css';

export default function Home() {
	const [info] = useState([
		{
			url: 'https://peel_n.coding.me/',
			imgUrl: 'https://i.loli.net/2019/04/05/5ca6cde7071e5.png'
		},
		{
			url: 'https://github.com/NieHang',
			imgUrl: 'https://i.loli.net/2019/04/05/5ca6cde721ed5.png'
		},
		{
			url: 'https://www.cnblogs.com/niehang/',
			imgUrl: 'https://i.loli.net/2019/04/05/5ca6cde738ff5.png'
		}
	]);
	return (
		<div className="wrap">
			<div className="content">
				<div className="content__title">Also Check 😀</div>
				<div className="content__media">
					{info.map((value, index) => (
						<ImgItem
							key={value.url}
							url={value.url}
							imgUrl={value.imgUrl}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}