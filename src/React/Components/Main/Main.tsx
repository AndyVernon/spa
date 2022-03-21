import { BrowserRouter } from 'react-router-dom';
import BemIt from '@gtechdoodler/bem-it';

import Menu from '../Menu';

import './Main.scss';

function Main() {
    const bem = new BemIt('Main');

    return (
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
    );
}

export default Main;