import React from 'react';
import './Logout.css';
import logOutPic from '../../../assets/logouticon.png'


const Logout = (props) => {
    return(
        <div>
            <button className="logoutButton" onClick={props.clickLogout}>
                <img id="logout" className="logout" src={logOutPic} alt= "powerButton" />
            </button>
        </div>
    )
}

export default Logout;