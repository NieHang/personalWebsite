import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import './style.css';

export default class Home extends Component {
	render() {
		return (
			<div className="wrap">
				<Header />
				<Footer />
			</div>
		);
	}
}
