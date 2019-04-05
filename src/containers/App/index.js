import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';
import Control from '../Control';
import SecondHome from '../SecondHome';

class App extends Component {
	constructor() {
		super();
		this.state = {
			status: false
		};
	}

	render() {
		return (
			<div className="App" style={{height: '100%'}}>
				<Router>
					<Route path="/" component={Home} />
				</Router>
				<Control
					changeBgColor={this.changeBgColor.bind(this)}
					status={this.state.status}
				/>
				<SecondHome status={this.state.status}/>
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
}

export default App;
