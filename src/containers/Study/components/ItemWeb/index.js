import React from 'react';

import LazyLoad from 'react-lazyload';

export default function ItemWeb(props) {
	return (
		<div className="item__web">
			<a href={props.address} target="block">
				{/* 如果在设有overflow属性的容器(Study)中懒加载图片，需要在LazyLoad组件设置overflow属性值为true */}
				<LazyLoad
					overflow={true}
					height={60}
				>
					<img src={props.imgUrl} alt='' />
				</LazyLoad>
				<p>{props.name}</p>
			</a>
		</div>
	);
}
