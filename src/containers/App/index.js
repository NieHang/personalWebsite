import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/loadable';
import Control from '../Control';
import ListMobile from '../ListMobile';
import Header from '../../components/Header';
import Project from '../Project/loadable';
import Barrage from '../Barrage/loadable';
import Study from '../Study/loadable';

const App = () => {
	const [status, setStatus] = useState(false)
	const [showList, setShowList] = useState(false)

	const changeBgColor = status => {
		setStatus(status === false ? true : false)
	}

	const changeListStatus = showList => {
		setShowList(showList === false ? true : false)
	}

	return (
		<div className="App" style={{ height: '100%', background: '#333f6a' }}>
			<Router>
				<Header
					changeListStatus={changeListStatus}
					status={showList}
				/>
				<Route path='/study' exact component={Study}/>
				<Route path="/barrage" exact component={Barrage} />
				<Route path="/project" exact component={Project} />
				<Route path="/" exact component={Home} />
				<Control
					changeBgColor={changeBgColor}
					status={status}
				/>
				{
					showList 
						? 
						<ListMobile
							showList={showList}
							bgColor={status}
							changeListStatus={changeListStatus}
						/>
						:
						''
				}
			</Router>
		</div>
	);
}

export default App;
