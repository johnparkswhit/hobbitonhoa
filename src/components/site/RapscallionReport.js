import React from 'react'
import Auth from './Auth/Auth'
import HomeTable from '../../homes/HomeTable'



const RapscallionReport = (props) => {

    const protectedIndex = () => {
        return (props.sessionToken === localStorage.getItem('token') ? <MischiefTable sessionID = {props.sessionID} token = {props.sessionToken}/> : <Auth updateToken={props.updateToken} updateID={props.updateID}/>)
    }

    return (
        <div>
            {protectedIndex()}
        </div>
    )
}

export default RapscallionReport