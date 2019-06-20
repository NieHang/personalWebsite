import React, { useState } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/loadable';
import Control from '../Control';
import ListMobile from '../ListMobile';
import Header from '../../components/Header';
import Project from '../Project/loadable';
import Barrage from '../Barrage/loadable';
import Study from '../Study/loadable';
import Tools from '../Tools/loadable'

import store from '../../store'

const App = () => {
	const [status, setStatus] = useState(false)
	const [showList, setShowList] = useState(false)

	const changeBgColor = status => {
		setStatus(status === false ? true : false)
	}

	// 根据分辨率判断是pc端还是移动端，简单粗暴
	const changeListStatus = showList => {
		setShowList(showList === false ? true : false)
	}

	return (
		<Provider store={store}>		
			<div className="App" style={{ height: '100%', background: '#333f6a' }}>
				<Router>
					<Header
						changeListStatus={changeListStatus}
						status={showList}
					/>
					<Route path='/tools' exact component={Tools}/>
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
		</Provider>
	);
}

export default App;
