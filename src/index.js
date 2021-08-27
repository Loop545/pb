import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Provider
import { Provider as ReduxProvider } from 'react-redux';

// Store
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
	<ReduxProvider store={store}>
		<Router>
			<App />
		</Router>
	</ReduxProvider>,
	document.getElementById('root'),
);
