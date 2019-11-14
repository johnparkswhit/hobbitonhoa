import React from 'react';
import './Navbar.css';
import hobbitonPic from '../../assets/hobbiton-img-1.jpg'
import Logout from './Logout/Logout'

const Navbar = (props) => {

    return (
        <div>
            <nav id="nav">
                <img id="hobbitonPic" src={hobbitonPic} alt="hobbiton"/>
                <h1 id="welcome">Welcome to Hobbiton</h1>
                <Logout clickLogout={props.clickLogout} />
            </nav>
        </div>
    )
}

export default Navbar;