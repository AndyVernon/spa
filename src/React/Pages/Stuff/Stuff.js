import BemIt from "@gtechdoodler/bem-it";

import './Stuff.scss';

function Stuff () {
    const bem = new BemIt('Stuff');

    return (
        <div className={bem.out}>
            <h2>Stuff</h2>
            <p>This is stuff paragraph 1</p>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ol>
        </div>
    );
}

export default Stuff;