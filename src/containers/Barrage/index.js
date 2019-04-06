import React, { Component } from 'react';
import Draggable from 'react-draggable';
import axios from 'axios';
import './style.css';

export default class Barrage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			barrages: [],
			value: ''
		};
	}
	render() {
		return (
			<div className="barrage">
				<div className="barrage__list">
					{this.state.barrages.map((item, index) => (
						<div
							key={index}
							className="barrage__item"
							style={{
								top: `${-index * 20}px`,
								color: `rgba(${parseInt(
									Math.random(0, 1000) * 1000
								)}, ${parseInt(Math.random(0, 1000) * 1000)}, ${parseInt(
									Math.random(0, 1000) * 1000
								)})`,
								animationDelay: `${index * 100}ms`
							}}
						>
							{item}
						</div>
					))}
				</div>
				<div className="barrage__form">
					<Draggable
						handle=".handle"
						defaultPosition={{ x: 0, y: 0 }}
						position={null}
						grid={[25, 25]}
						scale={1}
					>
						<img
							src="https://i.loli.net/2019/04/03/5ca4a63c11e58.png"
							alt="头像"
							className="handle"
						/>
					</Draggable>
					<p>欢迎来到小肥橘猫妙妙屋</p>
					<p>发个弹幕表达一下你的想法吧</p>
					<p>
						<input
							type="text"
							placeholder="biubiubiu~"
							onChange={this.handleChange.bind(this)}
						/>
						<img
							src="https://i.loli.net/2019/04/06/5ca8607559fa4.png"
							alt="biu"
							onClick={this.handleClick.bind(this)}
						/>
					</p>
				</div>
			</div>
		);
	}

	componentDidMount() {
		// axios.get('').then(res => {
		// 	console.log(res)
		// })
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	handleClick() {
		this.setState(
			{
				barrages: [...this.state.barrages, this.state.value]
			},
			function() {
				console.log(this.state.barrages);
			}
		);
	}
}
