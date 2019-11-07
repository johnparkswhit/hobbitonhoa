import React, {useState, useEffect} from 'react'
import './Auth.css'
import Signup from './Signup'
import Login from './Login'

const Auth = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);
    const [sessionToken, setSessionToken] = useState('');

    const title = () => {
        return login ? 'Welcome Back! Please Log In' : 'Welcome to Hobbiton! Sign up for our directory now!'
    }

    const loginToggle = (event) => {
        event.preventDefault();
        setLogin(!login);
        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');

    }


  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  

    // const updateToken = (newToken) => {
    //     localStorage.setItem('token', newToken);
    //     setSessionToken(newToken);
    //     console.log(sessionToken);
    //   }

    const buttonTitle = () => {
        return login ? 'New to Hobbiton? Click here to Sign Up' : 'Already a Member? Click to Log In';
    }
    
    const signupFields = () => !login ? 
    (
        <div id="authDiv">
            <label id="centerLabel" htmlFor='firstName'>First Name:</label>
            <br/>
            <input className="input" type='text' id='firstName' value={firstName} onChange={(event) => setFirstName (event.target.value)} />
            <br/>
            <label id="centerLabel" htmlFor='lastName'>Last Name:</label>
            <br/>
            <input className="input" type='text' id='lastName' value={lastName} onChange={(event) => setLastName (event.target.value)} />
        </div>
    ) : null;

    const signupFieldsTwo = () => !login ?
        (
            <div id="authDiv">
                <label id="centerLabel" htmlFor='password'>Confirm Password:</label>
                <br/>
                <input className="input" type='password' id='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
        ):null;

        let handleSubmit = (event) => {
            event.preventDefault();
            fetch("http://localhost:3000/user/login", {
                method: 'POST',
                body: JSON.stringify({username:username, password:password}),
                headers: new Headers({
                    'Content-Type': 'application/json' 
                })
            })
                .then(
                    (response) => response.json() 
                ).then((data) => {
                    props.updateToken(data.sessionToken) 
                    console.log(data.sessionToken)
                })
        }

        
    return(
        <div id="authDiv">
            <form className="userForm" onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                <br/>
                {signupFields()}
                <label id="centerLabel" htmlFor='username'>Username:</label>
                <br/>
                <input className="input" type='text' id='username' value= {username} onChange={(event) => setUsername(event.target.value)}/>
                <br/>
                <label id="centerLabel" htmlFor='password'>Password:</label>
                <br/>
                <input className="input" type='password' id='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                <br/>
                {signupFieldsTwo()}
                <button id="button" onClick={loginToggle}>{buttonTitle()}</button>
                <br/>
                <button id="button" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Auth;