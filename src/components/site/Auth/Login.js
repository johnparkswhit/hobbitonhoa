import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../../helpers/environment'

const Login = (props)=> {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({username:username, password:password}), //Important: This works if you used. req.body.username.  If you used req.body.user.username, you need ({user:{username:username,password:password}})
            headers: new Headers({
                'Content-Type': 'application/json' //tells the server the type of info we are sending so it knows how to read it
            })
        })
            .then(
                (response) => response.json() //resoliving the promise from the fetch and jsonifying the data
            ).then((data) => {
                props.updateToken(data.sessionToken) 
                console.log(data.sessionToken)
            })
            
    }

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(event) => setUsername(event.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(event) => setPassword(event.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button id="authButton" type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;