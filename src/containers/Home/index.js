/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import ImgItem from './components/ImgItem/ImgItem'
import './style.css';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgState1: false,
			imgState2: false,
			imgState3: false,
			info: [
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
				},
			]
		};
		this.handleLoad = this.handleLoad.bind(this);
	}

	render() {
		const { imgState1, imgState2, imgState3, info } = this.state;
		return (
			<div className="wrap">
				<div className="content">
					<div className="content__title">Also Check 😀</div>
					<div className="content__media">
						{
							info.map((value, index) => (
								<ImgItem key={value.url} url={value.url} imgUrl={value.imgUrl} index={index} />
							))
						}
					</div>
				</div>
			</div>
		);
	}

	handleLoad(e) {
		switch (e.currentTarget.getAttribute('data-index')) {
			case '1':
				console.log(this);
				this.setState({
					imgState1: true
				});
				break;
			case '2':
				this.setState({
					imgState2: true
				});
				break;
			case '3':
				this.setState({
					imgState3: true
				});
				break;
			default:
				break;
		}
	}
}
