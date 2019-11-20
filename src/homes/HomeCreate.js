import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../helpers/environment'

const HomeCreate = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [occupation, setOccupation] = useState('')
    const [publicMessage, setPublicMessage] = useState('')
    const [emergencyContact, setEmergencyContact] = useState('')

    const HomeAdd = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/home/create`, {
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
        .then((res) => {

            props.fetchHomes();
            props.addOff();
        })
    }


    const toggle = () => props.setAddActive(!props.addActive);


    return(
        <Modal isOpen={props.addActive} toggle={toggle}>
            <ModalHeader id="modalHeader" toggle={toggle}>Create Your New Hobbit Hole Information Here!</ModalHeader>
            <ModalBody id="modalBody">
                <Form id="modalForm" onSubmit={HomeAdd}>
                    <FormGroup>
                        <Label htmlFor="firstName">First Name:</Label>
                        <Input id="modalInput" name="firstName" required value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastName">Last Name:</Label>
                        <Input id="modalInput" name="lastName" required value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">Address:</Label>
                        <Input id="modalInput" name="address" required value={address} onChange={(event) => setAddress(event.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="occupation">Occupation:</Label>
                        <Input id="modalInput" name="occupation" value={occupation} onChange={(event) => setOccupation(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="publicMessage">Public Message:</Label>
                        <Input id="modalInput" name="publicMessage" value={publicMessage} onChange={(event) => setPublicMessage(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="emergencyContact">Emergency Contact:</Label>
                        <Input id="modalInput" name="emergencyContact" value={emergencyContact} onChange={(event) => setEmergencyContact(event.target.value)}/>
                    </FormGroup>
                    <ModalFooter>
                        <Button id="modalButton" type="submit">Submit your info!</Button> {''}
                        <Button id="modalButton" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default HomeCreate;