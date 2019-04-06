import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: false
		};
		this.resize.bind(this);
	}

	render() {
		const {status} = this.props;
		let Component;
		if (!this.state.isMobile) {
			Component = function() {
				return (
					<nav className="header__list">
						<Link to="/">Home</Link>
						<Link to='/project'>Project</Link>
						<Link to='/barrage'>Barrage</Link>
					</nav>
				);
			};
		} else {
			Component = () => {
				return <span className="header__list" onClick={this.showList.bind(this, status)}>· · ·</span>;
			};
		}

		return (
			<header className="header">
				<Link to="/" className="header__title">
					<img
						src="https://i.loli.net/2019/04/03/5ca4a63c11e58.png"
						alt="CAT.png"
						title="CAT.png"
					/>
					<div className="cat">
						<span>小</span>
						<span>肥</span>
						<span>橘</span>
						<span>猫</span>
					</div>
				</Link>
				<Component />
			</header>
		);
	}

	componentDidMount() {
		this.screenChange();
	}

	screenChange() {
		window.addEventListener('resize', this.resize);
	}

	resize = () => {
		if (document.body.clientWidth > 960) {
			this.setState({
				isMobile: false
			});
		} else {
			this.setState({
				isMobile: true
			});
		}
	};

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}
	
	showList(showList) {
		if (this.props.changeListStatus) {
			this.props.changeListStatus(showList);
		}
	}
}
