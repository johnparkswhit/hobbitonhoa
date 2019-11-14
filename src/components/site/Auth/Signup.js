import React, {useState} from 'react';

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSignup = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/create", {
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
                console.log(data.token) 
            })
    }

    return (
        <div id="authDiv">
            <form name="signUp" className="userForm" onSubmit={handleSignup}>
                <h1>Welcome! Sign Up Now!</h1>
                <br/>

                <label id="centerLabel" htmlFor='firstName'>First Name:</label>
                <br/>
                <input className="input" type='text' id='firstName' value={firstName} onChange={(event) => setFirstName (event.target.value)} required/>
                <br/>

                <label id="centerLabel" htmlFor='lastName'>Last Name:</label>
                <br/>
                <input className="input" type='text' id='lastName' value={lastName} onChange={(event) => setLastName (event.target.value)} required/>
                <br/>

                <label id="centerLabel" htmlFor='username'>Email Address:</label>
                <br/>
                <input className="input" type='email' id='email' value= {username} onChange={(event) => setUsername(event.target.value)} required/>
                <br/>

                <label id="centerLabel" htmlFor='password'>Password (min 5 characters):</label>
                <br/>
                <input className="input" type='password' pattern=".{5,}" id='password' value={password} onChange={(event) => setPassword(event.target.value)} required/>

                <br/>
                <button id="button" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup