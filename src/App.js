import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Use from './components/Use';

import './App.css';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/add" component={Add} />
					<Route path="/edit" component={Edit} />
					<Route path="/use" component={Use} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
