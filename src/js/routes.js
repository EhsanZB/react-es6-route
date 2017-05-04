import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Users from './components/pages/Users';
import User from './components/pages/User';
import Unknown from './components/pages/Unknown';

const Routes = (props) => {
    return(
        <Router {...props}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="contact" component={Contact}></Route>
                <Route path="about" component={About}></Route>
                <Route path="users(/:userName)" component={Users}></Route>
                <Route path="**" component={Unknown}></Route>
            </Route>      
        </Router>
    )
}

export default Routes;

    