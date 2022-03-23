import BemIt from '@gtechdoodler/bem-it';

import './Contact.scss';

function Contact () {
    const bem = new BemIt('Contact');

    return (
        <div className={bem.out}>
            <h2>Contact Us</h2>
            <p>Have a look at <a href="https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm">The page this was based on</a></p>
        </div>
    );
}

export default Contact;