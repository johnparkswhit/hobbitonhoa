import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import ConcerningHobbits from './ConcerningHobbits'
import Neighborhood from './Neighborhood'
import Directory from './Directory'
import Auth from './Auth/Auth'
import HomeIndex from '../../homes/HomeIndex'

const Sidebar = (props) => {
    return (
        <div className = "sidebar">
            <div className = "sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to = "/home">Home</Link></li>
                    <br/>
                    <li><Link to = "/neighborhood">About Hobbiton</Link></li>
                    <br/>
                    <li><Link to = "/concerninghobbits">Concerning Hobbits</Link></li>
                    <br/>
                    <li><Link to = "/HomeIndex">Neighborhood Directory</Link></li>
                    <br/>
                    <li><Link to ="/auth">Log In/Sign Up</Link></li>
                </ul>
            </div>    
            <div className = "sidebar-route">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path = "/ConcerningHobbits"><ConcerningHobbits /></Route>
                    <Route exact path = "/Neighborhood"><Neighborhood /></Route>
                    <Route exact path = "/HomeIndex"><HomeIndex/></Route>
                    <Route exact path = "/Auth"><Auth updateToken={props.updateToken} sessionToken = {props.sessionToken}/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;