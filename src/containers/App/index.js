import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';
import Control from '../Control';
import ListMobile from '../ListMobile';
import Header from '../../components/Header';
import Project from '../Project';
import Barrage from '../Barrage';
import Study from '../Study';

class App extends Component {
	constructor() {
		super();
		this.state = {
			status: false,
			showList: false
		};
	}

	render() {
		return (
			<div className="App" style={{ height: '100%', background: '#333f6a' }}>
				<Router>
					<Header
						changeListStatus={this.changeListStatus.bind(this)}
						status={this.state.showList}
					/>
					<Route path='/study' component={Study}/>
					<Route path="/barrage" exact component={Barrage} />
					<Route path="/project" exact component={Project} />
					<Route path="/" exact component={Home} />
					<Control
						changeBgColor={this.changeBgColor.bind(this)}
						status={this.state.status}
					/>
					<ListMobile
						showList={this.state.showList}
						bgColor={this.state.status}
						changeListStatus={this.changeListStatus.bind(this)}
					/>
				</Router>
			</div>
		);
	}

	changeBgColor(status) {
		if (status === false) {
			this.setState({
				status: true
			});
		} else {
			this.setState({
				status: false
			});
		}
	}

	changeListStatus(status) {
		if (status === false) {
			this.setState({
				showList: true
			});
		} else {
			this.setState({
				showList: false
			});
		}
	}
}

export default App;
