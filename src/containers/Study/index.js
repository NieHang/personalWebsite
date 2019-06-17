import React, { Component } from 'react';
import axios from 'axios';
import ItemWeb from './components/ItemWeb';
import { throttle } from 'lodash';

import './css/style.css';

export default class Study extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			showBack: false
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.changeBackStatusThrottled = throttle(this.changeBackStatus.bind(this), 200);
	}

	render() {
		const { data, showBack } = this.state;
		return (
			<section
				className="study"
				id="study"
				onScroll={this.handleScroll}
			>
				<div
					className={showBack ? 'back' : ''}
					onClick={this.handleBack.bind(this)}
				/>
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

	async componentDidMount() {
		const {
			data: { data }
		} = await axios.get('./websites.json');
		this.setState({
			data
		});
	}

	componentWillUnmount() {
		this.changeBackStatusThrottled.cancel();
	}

	handleScroll(e) {
		const currentTarget = e.currentTarget;
		this.changeBackStatusThrottled(currentTarget)
	}

	changeBackStatus(currentTarget) {
		if (typeof currentTarget === 'object') {
			this.setState({
				showBack: currentTarget.scrollTop > 300 ? true : false
			});
		}
	}

	handleBack() {
		if (this.state.showBack) {
			document.getElementById('study').scrollTop = 0;
			this.setState({
				showBack: false
			})
		}
	}
}
