import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Pages
import Blog from './pages/Blog';
import Poem from './pages/Poem';
import Home from './pages/Home';
import Connect from './pages/Connect';
import About from './pages/About';

// Components
import Footer from '../src/components/footer/footer';
import Header from '../src/components/header/Header';

const App = () => {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/connect" component={Connect} />
				<Route path="/blog" component={Blog} />
				<Route path="/poem" component={Poem} />
				{/* <Route exact path="/book/:id" component={BlogPage} /> */}
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
