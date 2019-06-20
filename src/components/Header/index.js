import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { actionCreators } from './store'
import { connect } from "react-redux";
import './css/style.css';

const Header = props => {
	const { status, changeListStatus, getIsMobile, isMobile } = props;

	const screenChange = () => {
		window.addEventListener('resize', resize);
	};

	const resize = () => {
		getIsMobile(document.body.clientWidth > 960 ? false : true)
	};

	useEffect(
		() => {
			if (document.body.clientWidth < 960) {
				// setIsMobile(true);
				getIsMobile(true)
			}
			screenChange();
		},
		() => {
			window.removeEventListener('resize', resize);
		}
	);

	const showList = status => {
		if (changeListStatus) {
			changeListStatus(status);
		}
	};

	let Component;
	if (!isMobile) {
		Component = function() {
			return (
				<nav className="header__list">
					<Link to="/">Home</Link>
					<Link to="/project">Project</Link>
					<Link to="/study">Study</Link>
					<Link to="/tools">Tools</Link>					
					<Link to="/barrage">Barrage</Link>
				</nav>
			);
		};
	} else {
		Component = () => {
			return (
				<span className="header__list" onClick={() => showList(status)}>
					· · ·
				</span>
			);
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
};

const mapState = state => ({
	isMobile: state.header.isMobile
})

const mapDispatch = dispatch => ({
	getIsMobile(status) {
		dispatch(actionCreators.isMobile(status))
	}
})

export default connect(mapState, mapDispatch)(Header);
