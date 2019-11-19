import React from 'react'
import Auth from './Auth/Auth'
import MischiefTable from '../../mischief/MischiefTable'



const RapscallionReport = (props) => {

    const protectedReport = () => {
        return (props.sessionToken === localStorage.getItem('token') ? <MischiefTable token = {props.sessionToken} sessionID = {props.sessionID} username={props.username} updateUsername={props.updateUsername}/> : <Auth updateID={props.updateID} updateToken={props.updateToken} username={props.username} updateUsername={props.updateUsername}/>)
    }

    return (
        <div>
            {protectedReport()}
        </div>
    )
}

export default RapscallionReport