import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

// ReactDom.render(<App />, document.getElementById('app'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<Router>
		<App />
	</Router>
);
