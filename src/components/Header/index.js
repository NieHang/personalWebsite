import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<Link to='/' className="header__title">
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
				<nav className="header__list">
					<Link>Home</Link>
					<Link>PlayGround</Link>
					<Link>Project</Link>
					<Link>Link</Link>
        </nav>
			</header>
		);
	}
}
