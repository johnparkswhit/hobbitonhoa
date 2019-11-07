import React from "react";
import {Link} from "react-router-dom";
import HobbitonPic2 from '../../assets/hobbiton-img-2.jpg'

const Home = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h1>About Hobbiton</h1>
                <br/>
                <p>
                Hobbiton is a village in the Wesfarthing of the Shire.  It lies on a stream locally known as The Water, a short distance west of Bywater. While we are famous for some of our more mischievious Hobbits, such as Bilbo and Frodo Baggins, Samwise Gamgee, Meriadoc Brandybuck, and Peregrin Took, we would prefer to be left alone to our peace and quiet, thank you very much.  Here, you will find gardening, music, ale, and pipe weed.
                </p>

                <img id="hobbitonPicTwo" src={HobbitonPic2} alt="hobbiton"/>
            </div>
        </div>
    )
}

export default Home;