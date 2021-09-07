import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Pages
import newblog from '../src/components/blog/NewBlogs';
import newPoem from '../src/components/poem/PoemBlogs';
import blogAll from '../src/components/blog/BlogAll';
import poemAll from '../src/components/poem/PoemAll';
import Home from './pages/Home';
import Connect from './pages/Connect';
import About from './pages/About';

// Components
import Footer from '../src/components/footer/footer';
import Header from '../src/components/header/Header';
import Corner from './components/navbar/cornerNav';

const App = () => {
	return (
		<div className="app">
			{/* <Header /> */}
			<Corner/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/connect" component={Connect} />
				<Route path="/blogs" component={newblog} />
				<Route path="/blogpage/:id" component={blogAll} />
				<Route path="/blogpage" component={blogAll} />
				<Route path="/poems" component={newPoem} />
				<Route path="/poempage/:id" component={poemAll} />
				<Route path="/poempage" component={poemAll} />
			</Switch>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
