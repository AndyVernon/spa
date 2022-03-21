import {
    Route,
    NavLink,
    Routes
} from 'react-router-dom';
import BemIt from "@gtechdoodler/bem-it";
import Home from "../../Pages/Home";
import Stuff from "../../Pages/Stuff";
import Contact from "../../Pages/Contact";

import './Menu.scss';

function Menu () {

    const bem = new BemIt('Menu');

    return (
        <div className={bem.out}>
        <h1>Simple SPA</h1>
        <ul className={bem.el('list').out}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/stuff'>Stuff</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <div className='content'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/stuff' element={<Stuff />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    </div>
);
}

export default Menu;