import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import ConcerningHobbits from './ConcerningHobbits'
import About from './About'
import HobbitonDirectory from './HobbitonDirectory'
import RapscallionReport from './RapscallionReport'


const Sidebar = (props) => {
    return (
        <div className = "sidebar">
            <div className = "sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link className="sidebarLink" to = "/home">Home</Link></li>
                    <br/>
                    <li><Link className="sidebarLink" to = "/about">About Hobbiton</Link></li>
                    <br/>
                    <li><Link className="sidebarLink" to = "/concerninghobbits">Concerning Hobbits</Link></li>
                    <br/>
                    <li><Link className="sidebarLink" to ="/HobbitonDirectory">Hobbiton Directory</Link></li>
                    <br/>
                    <li><Link className="sidebarLink" to = "/RapscallionReport">Rapscallion Report</Link></li>
                    <br/>
                    <li><Link className="sidebarLink" to ="/HobbitonDirectory">Log In/Sign Up</Link></li>
                </ul>
            </div>    
            <div className = "sidebar-route">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path = "/ConcerningHobbits"><ConcerningHobbits /></Route>
                    <Route exact path = "/about"><About /></Route>
                    <Route exact path = "/HobbitonDirectory"><HobbitonDirectory updateToken={props.updateToken} sessionToken = {props.sessionToken} sessionID = {props.sessionID} updateID={props.updateID} username={props.username} updateUsername={props.updateUsername}/></Route>

                    <Route exact path = "/RapscallionReport"><RapscallionReport updateToken={props.updateToken} sessionToken = {props.sessionToken} sessionID = {props.sessionID} updateID={props.updateID} username={props.username} updateUsername={props.updateUsername}/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;