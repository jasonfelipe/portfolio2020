import React from 'react';
import './footer.css'

const Footer = props => {
    return <footer className='footer'>
        © Jason Felipe 2020
        {props.children}
    </footer>
}

export default Footer;