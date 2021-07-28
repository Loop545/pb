// Externals
import React from 'react';

//Routes
import Home from '../../pages/Home';
import About from '../../pages/About';
import Scribble from '../../pages/Scribble';
import Connect from '../../pages/Connect';

// Routes
const Routes = {
	'/': () => <Home />,
	'/home': () => <Home />,
	'/about': () => <About />,
	'/scribble': () => <Scribble />,
	'/connnect': () => <Connect />,
};

// Export
export default Routes;