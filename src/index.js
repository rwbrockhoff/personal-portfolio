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
            <Route exact path="/" component={App}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/investment" component={Investment}/>
            <Route path='/dribbble' component={() => { window.location = 'https://dribbble.com/'; return null;} }/>
        </Switch>
    </Router>

, document.getElementById('root'));

serviceWorker.unregister();
