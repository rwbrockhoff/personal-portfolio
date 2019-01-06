import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './Main/Main.scss';

import App from './App';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Investment from './components/Investment/Investment'

import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(

    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </Router>

    , document.getElementById('root'));

serviceWorker.unregister();
