/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import './style.css';

export default class Home extends Component {
	render() {
		return (
			<div className="wrap">
				<div className="content">
					<div className="content__title">Also Check 😀</div>
					<div className="content__media">
						<a href="https://peel_n.coding.me/" target="_block">
							<img
								src="https://i.loli.net/2019/04/05/5ca6cde7071e5.png"
								alt="blog"
							/>
						</a>
						<a href="https://github.com/NieHang" target="_block">
							<img
								src="https://i.loli.net/2019/04/05/5ca6cde721ed5.png"
								alt="github"
							/>
						</a>
						<a href="https://www.cnblogs.com/niehang/" target="_block">
							<img
								src="https://i.loli.net/2019/04/05/5ca6cde738ff5.png"
								alt="博客园"
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
