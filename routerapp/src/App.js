import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
	return (
		<BrowserRouter>
			<div style={{ margin: 10 }}>
				<nav>
					<NavLink to="/" style={{ padding: 10 }}>
						Home
					</NavLink>

					<NavLink to="/about" style={{ padding: 10 }}>
						About
					</NavLink>
				</nav>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
			</div>
		</BrowserRouter>
	);
};

export default App;
