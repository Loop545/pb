import React, { Component, Fragment} from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
//components
//import Blogs from './components/Blog'
//import BlogPage from './components/Blogpage'
// import Poems from './components/Poem'
// import PoemPage from './components/Poempage'

import { Navbar } from './components/navbar/index'


class App extends Component {
  render() {
    return (
      // <Router >
      //   <Fragment>
      //     <Route exact path='/' component={Blogs}/>
      //     <Route exact path='/book/:id' component={BlogPage}/>
      //   </Fragment>
      // </Router>
      
      <Navbar></Navbar>
    );
  }
}

export default App;
