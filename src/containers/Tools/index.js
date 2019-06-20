import React, { useState } from 'react';
import { connect } from "react-redux";
import Compression from './components/compression'
import './css/style.css';

const Tools = props => {
	const { isMobile } = props;

	const [isShow, setIsShow] = useState(false)

	const [currentId, setCurrentId] = useState(0);

	const [list] = useState([
		{
			id: 0,
			iconClass: 'icontupian',
			title: '压缩图片'
		},
		{
			id: 1,
			iconClass: 'iconjianchibuxie',
			title: '坚持就是胜利'
		}
	]);

	const [components] = useState([
		{
			id: 0,
			jsx: <Compression key='0'/>
		},
		{
			id: 1,
			jsx: <div key='1'>疯狂改bug，加油！</div>
		},
	])

	const handleClick = e => {
		if (e.target.nodeName === 'LI') {
			setCurrentId(parseInt(e.target.getAttribute('data-id')));
		}
	};

	return (
		<section className="tools">
			<nav className={isShow ? 'tools__nav' : 'tools__nav hidden'} onClick={handleClick}>
				{list.map((item, index) => (
					<li
						key={item.id}
						className={currentId === index ? 'liActive' : ''}
						data-id={item.id}
					>
						<i className={'iconfont ' + item.iconClass} />
						{item.title}
					</li>
				))}
				{ isMobile ? <div className="toggle" onClick={() => setIsShow(!isShow)}>三</div> : ''}
			</nav>
			<article className='tools__content'>
				{
					components.map((item, index) => {
						if (currentId === index) {
							return item.jsx
						} else {
							return ''
						}
					})
				}
			</article>
		</section>
	);
};

const mapState = state => ({
	isMobile: state.header.isMobile
})

export default connect(mapState, null)(Tools);
