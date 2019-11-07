import React from 'react';
import './Logout.css';
import logOutPic from '../../../assets/logout.png';

const Logout = () => {
    return(
        <div>
            <img id="logout" className="logout" src={logOutPic} alt= "powerButton"/>
        </div>
    )
}

export default Logout;