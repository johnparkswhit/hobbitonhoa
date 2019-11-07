import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const HomeCreate = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [occupation, setOccupation] = useState('')
    const [publicMessage, setPublicMessage] = useState('')
    const [emergencyContact, setEmergencyContact] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/home/create', {
            method: 'POST',
            body: JSON.stringify({
                firstName:firstName, 
                lastName:lastName, 
                address:address,
                occupation:occupation,
                publicMessage:publicMessage,
                emergencyContact:emergencyContact,
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setFirstName('')
            setLastName('')
            setAddress('')
            setOccupation('')
            setPublicMessage('')
            setEmergencyContact('')
            props.fetchHomes();
        })
    }

    return(
        <>
        <h3 className="mainDiv">Enter Your Info Here</h3>
        <Form onSubmit={(event) => handleSubmit(event)}>
            <FormGroup>
                <Label htmlFor="firstName"/>
                <input className="inputCreate" name="firstName" placeholder="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="lastName"/>
                <input className="inputCreate" name="lastName" placeholder="Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="address"/>
                <input className="inputCreate" name="address" placeholder="Address" value={address} onChange={(event) => setAddress(event.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="occupation"/>
                <input className="inputCreate" name="occupation" placeholder="Occupation" value={occupation} onChange={(event) => setOccupation(event.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="publicMessage"/>
                <input className="inputCreate" name="publicMessage" placeholder="Public Message" value={publicMessage} onChange={(event) => setPublicMessage(event.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="emergencyContact"/>
                <input className="inputCreate" name="emergencyContact" placeholder="Emergency Contact" value={emergencyContact} onChange={(event) => setEmergencyContact(event.target.value)}/>
            </FormGroup>
            <Button id="buttonCreate" type="submit">Submit</Button>
        </Form>
    </>
    )
}

export default HomeCreate;