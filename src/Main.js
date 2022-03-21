import {
    BrowserRouter,
    Route,
    NavLink,
    Routes
} from 'react-router-dom';
import BemIt from '@gtechdoodler/bem-it';

import Home from './React/Pages/Home/Home';
import Stuff from './React/Pages/Stuff/Stuff';
import Contact from './React/Pages/Contact';

import './Main.scss';

function Main() {
    const bem = new BemIt('Main');

    return (
        <BrowserRouter>
            <div className={bem.out}>
                <h1>Simple SPA</h1>
                <ul className={bem.el('list').out}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/stuff'>Stuff</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
                <div className='content'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/stuff' element={<Stuff />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Main;