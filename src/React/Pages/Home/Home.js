import BemIt from "@gtechdoodler/bem-it";

import './Home.scss';

function Home () {
    const bem = new BemIt('Home');

    return (
        <div className={bem.out}>
            <h2>Hello</h2>
            <p>This is landing page paragraph 1</p>
            <p>This is landing page paragraph 2</p>
        </div>
    );
}

export default Home;