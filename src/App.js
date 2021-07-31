import React, { Component, Fragment} from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { useRoutes } from 'raviger';
import RouteConfig from '../src/components/navbar/routes';
//components
//import Blogs from './components/Blog'
//import BlogPage from './components/Blogpage'
// import Poems from './components/Poem'
// import PoemPage from './components/Poempage'

//import { Navbar } from './components/navbar/index'
import Header from '../src/components/header/Header'



const App  =() => {
    const Routes = useRoutes(RouteConfig);
    return (
      <div className='app'>
         {/* <Router >
         <Fragment>
           <Route exact path='/' component={Blogs}/>
           <Route exact path='/book/:id' component={BlogPage}/>
         </Fragment>
      </Router> */}
      
      {/* <Navbar/> */}
      <Header />
      {Routes}
      </div>
      
    );
  
}

export default App;
