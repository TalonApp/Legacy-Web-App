import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Use from './components/Use';

import './App.css';
import './DarkMode.css';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<div className="body-section">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/add/:type(discord|slack)" component={Add} />
						<Route path="/edit/:id" component={Edit} />
						<Route path="/use/:id" component={Use} />
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
