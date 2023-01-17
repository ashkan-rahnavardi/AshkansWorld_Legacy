import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import "./App.css"
import { BrowserRouter as Router } from 'react-router-dom';

// ReactDom.render(<App />, document.getElementById('app'))

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
        <App />
    </Router>
);