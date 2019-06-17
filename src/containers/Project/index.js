import React, { Component } from 'react';
import Item from './components/Item';
import './css/style.css';

export default class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					name: 'React全家桶+and实现通用管理系统',
					link: 'https://www.goahead.xin/react_system',
					imgUrl: 'https://i.loli.net/2019/04/06/5ca81e502cace.png'
				},
				{
					name: 'React全家桶实现大众点评APP(部分功能)',
					link: 'https://www.goahead.xin/react_dzdp',
					imgUrl: 'https://i.loli.net/2019/04/06/5ca81e15e051e.png'
				}
			]
		};
	}

	render() {
		return (
			<div className="project">
				{this.state.projects.map((item, index) => (
					<Item key={index} item={item}/>
				))}
			</div>
		);
	}
}
