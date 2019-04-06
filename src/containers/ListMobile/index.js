import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class ListMobile extends Component {
	render() {
		const { showList, bgColor } = this.props;
		return (
			<div className={showList ? (bgColor ? "list__show bgColor" : 'list__show') : 'list__hide'}>
				<ul className="list__links">
					<Link to="/" onClick={this.handleClick.bind(this, showList)}>Home</Link>
					<Link to="/project" onClick={this.handleClick.bind(this, showList)}>Project</Link>
					<Link to="/barrage" onClick={this.handleClick.bind(this, showList)}>Barrage</Link>
					<div className="list__contacts">
						<img
							src="https://i.loli.net/2019/04/05/5ca72974ccc87.png"
							alt="微信"
						/>
            <img src="https://i.loli.net/2019/04/05/5ca72b578ddea.png" alt="wechatQRcode"/>
						<img
							src="https://i.loli.net/2019/04/05/5ca72974ce809.png"
							alt="qq"
						/>
            <img src="https://i.loli.net/2019/04/05/5ca72dba94020.jpg" alt="qqQRcode"/>
					</div>
				</ul>
			</div>
		);
	}

	handleClick(showList) {
		if (this.props.changeListStatus) {
			this.props.changeListStatus(showList);
		}
	}
}
