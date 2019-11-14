import React from "react";

import HobbitonPic2 from '../../assets/hobbiton-img-2.jpg'

const Home = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h1>Welcome to Hobbiton!</h1>
                <hr/>
                <p>This website is dedicated to maintaining a Hobbit Hole directory of all our residents.  Please take the time to sign up and keep your information up to date.  You will also find some helpful links to the left to help you get acclimated to your new home. Welcome!</p>
                <hr/>
                <img id="hobbitonPicTwo" src={HobbitonPic2} alt="hobbiton"/>
            </div>
        </div>
    )
}

export default Home;