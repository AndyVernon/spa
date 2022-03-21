import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Home from './React/Pages/Home/Home';
import Stuff from './React/Pages/Stuff/Stuff';
import Contact from './React/Pages/Contact/Contact';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className='header'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/stuff'>Stuff</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                    <div className='content'>
                        <Route path='/' component={Home} />
                        <Route path='/stuff' component={Stuff} />
                        <Route path='/contact' component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;