// Externals
import React from 'react';

//Routes
import Home from '../../pages/Home';
import About from '../../pages/About';
import Blog from '../../pages/Blog';
import Poem from '../../pages/Poem';
import Connect from '../../pages/Connect';

// Routes
const Routes = {
	'/': () => <Home />,
	'/home': () => <Home />,
	'/about': () => <About />,
	'/blog': () => <Blog />,
	'/poem': () => <Poem />,
	'/connect': () => <Connect />,
};

// Export
export default Routes;