import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import ConcerningHobbits from './ConcerningHobbits'
import About from './About'
import HomeTable from '../../homes/HomeTable'
import HobbitonDirectory from './HobbitonDirectory'
import MischiefTable from '../../mischief/MischiefTable'


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
                    <li><Link className="sidebarLink" to = "/MischiefTable">Rapscallion Report</Link></li>
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
                    <Route exact path = "/HomeTable"><HomeTable token = {props.sessionToken} sessionID = {props.sessionID}/></Route>
                    {/* <Route exact path = "/Auth"><Auth updateToken={props.updateToken} sessionToken = {props.sessionToken} sessionID = {props.sessionID} updateID={props.updateID}/></Route> */}
                    {/* <Route exact path = "/Signup"><Signup updateToken={props.updateToken} sessionToken = {props.sessionToken} sessionID={props.sessionID} updateID={props.updateID}/></Route> */}
                    <Route exact path = "/HobbitonDirectory"><HobbitonDirectory updateToken={props.updateToken} sessionToken = {props.sessionToken} sessionID = {props.sessionID} updateID={props.updateID}/></Route>
                    <Route exact path = "/MischiefTable"><MischiefTable/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;