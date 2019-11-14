import React from 'react'
import Auth from './Auth/Auth'
import HomeTable from '../../homes/HomeTable'



const HobbitonDirectory = (props) => {

    const protectedIndex = () => {
        return (props.sessionToken === localStorage.getItem('token') ? <HomeTable sessionID = {props.sessionID} token = {props.sessionToken}/> : <Auth updateToken={props.updateToken} updateID={props.updateID}/>)
    }

    return (
        <div>
            {protectedIndex()}
        </div>
    )
}

export default HobbitonDirectory