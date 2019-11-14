import React from "react";
import HobbitonPic2 from '../../assets/hobbiton-img-2.jpg'

const Home = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h1>About Hobbiton</h1>
                <br/>
                <p>
                Hobbiton is a village in the Westfarthing of the Shire.  It lies on a stream locally known as The Water, a short distance west of Bywater. While it has become quite famous for some of our more mischievious Hobbits, such as Bilbo and Frodo Baggins, Samwise Gamgee, Meriadoc Brandybuck, and Peregrin Took, we would prefer to be left alone to our peace and quiet, thank you very much.  We don't need any more troublemakers, but if you are here to be a part of our little community, you will find gardening, music, pipe weed, ale, and lots of it.
                </p>

                <img id="hobbitonPicTwo" src={HobbitonPic2} alt="hobbiton"/>
            </div>
        </div>
    )
}

export default Home;