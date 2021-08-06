// Externals
import React from 'react';
import { Redirect } from 'raviger'

//Routes
import Home from '../../pages/Home';
import About from '../../pages/About';
import Blog from '../../pages/Blog';
import Poem from '../../pages/Poem';
import Connect from '../../pages/Connect';
import Blogpage from '../Blogpage';

// Routes
const Routes = {
	'/': () => <Home />,
	'/home': () => <Home />,
	'/about': () => <About />,
	'/blog': () => <Blog />,
	'/poem': () => <Poem />,
	'/connect': () => <Connect />,
	'/blog/:id': () => <Blogpage />,
	'/redirect': () => <Redirect to='/connect' />
};

// Export
export default Routes;