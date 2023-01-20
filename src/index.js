import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Layout from './Layout.jsx';

// ReactDom.render(<App />, document.getElementById('app'))

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<Router>
		{/* <App /> */}
		<Layout />
	</Router>
);
