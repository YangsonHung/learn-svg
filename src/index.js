import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import './styles/global/global.css';
// import './styles/highlight/github-dark.css';

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById('root')
);
