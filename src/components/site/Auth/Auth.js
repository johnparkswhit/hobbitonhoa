import React, {useState, useEffect} from 'react'
import './Auth.css'
import APIURL from '../../../helpers/environment'

const Auth = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sessionToken, setSessionToken] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Welcome Back! Sign In Here' : 'Welcome! Sign Up Now!'
    }

    const loginToggle = (event) => {
        event.preventDefault();
        setLogin(!login);
        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const buttonTitle = () => {
        return login ? 'New to Hobbiton? Click to Sign Up' : 'Already a User? Click to Log In';
    }

    const signupFields = () => !login ? 
    (
        <div>
            <label id="centerLabel" htmlFor='firstName'>First Name:</label>
            <br/>
            <input className="input" type='text' id='firstName' value={firstName} onChange={(event) => setFirstName (event.target.value)} />
            <br/>
            <label id="centerLabel" htmlFor='lastName'>Last Name:</label>
            <br/>
            <input className="input" type='text' id='lastName' value={lastName} onChange={(event) => setLastName (event.target.value)} />
        </div>
    ) : null;

    useEffect(() => {
        if (localStorage.getItem('token')){
        setSessionToken(localStorage.getItem('token'));
        }
    }, [])
  

    let handleSubmit = (event) => {
        event.preventDefault();
        if (login===true) { 
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({username:username, password:password}),
            headers: new Headers({
                'Content-Type': 'application/json' 
            })
        })
            .then(
                (response) => response.json() 
            ).then((data) => {
                console.log(data)
                props.updateToken(data.sessionToken) 
                props.updateID(data.user.id)
                console.log(data.sessionToken)
                console.log(data.sessionID)
            })

        }else{ 

        fetch(`${APIURL}/user/create`, {
            method: 'POST',
            body: JSON.stringify({username:username, password:password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(
                (response) => response.json() 
            ).then((data) => {
                props.updateToken(data.token)
                props.updateID(data.user.id)
                console.log(data.token) 
            })
        }
    }


    return(
        <div id="authDiv">
            <form className="userForm" onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                <br/>
                {signupFields()}
                <label id="centerLabel" htmlFor='username'>Email Address:</label>
                <br/>
                <input className="input" type='email' id='email' value= {username} onChange={(event) => setUsername(event.target.value)}/>
                <br/>
                <label id="centerLabel" htmlFor='password'>Password (min 5 characters):</label>
                <br/>
                <input className="input" type='password' id='password' pattern=".{5,}" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <br/>
                <button id="button" type='submit'>Submit</button>
                <br/>
                <button id="button" onClick={loginToggle}>{buttonTitle()}</button>
            </form>
        </div>
    )
}

export default Auth;

