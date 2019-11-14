import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import APIURL from '../helpers/environment'

const HomeEdit = (props) => {
    const [editFirstName, setEditFirstName] = useState(props.homeToUpdate.firstName);
    const [editLastName, setEditLastName] = useState(props.homeToUpdate.lastName);
    const [editAddress, setEditAddress] = useState(props.homeToUpdate.address);
    const [editOccupation, setEditOccupation] = useState(props.homeToUpdate.occupation);
    const [editPublicMessage, setEditPublicMessage] = useState(props.homeToUpdate.publicMessage);
    const [editEmergencyContact, setEditEmergencyContact] = useState(props.homeToUpdate.emergencyContact);

    const homeUpdate = (event, home) => {
        event.preventDefault();
        fetch(`${APIURL}/home/update/${props.homeToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                firstName:editFirstName, 
                lastName:editLastName, 
                address:editAddress,
                occupation:editOccupation,
                publicMessage:editPublicMessage,
                emergencyContact:editEmergencyContact
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchHomes();
            props.updateOff();
        })
    }

    const toggle = () => props.setUpdateActive(!props.updateActive);

    return(
        <Modal isOpen={props.updateActive} toggle={toggle}>
            <ModalHeader id="modalHeader" toggle={toggle}>Update Your New Hobbit Hole Information Here!</ModalHeader>
            <ModalBody id="modalBody">
                <Form id="modalForm" onSubmit={homeUpdate}>
                    <FormGroup>
                        <Label htmlFor="firstName">Edit First Name:</Label>
                        <Input id="modalInput" name="firstName" value={editFirstName} onChange={(event) => setEditFirstName(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastName">Edit Last Name:</Label>
                        <Input id="modalInput" name="lastName" value={editLastName} onChange={(event) => setEditLastName(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">Edit Address:</Label>
                        <Input id="modalInput" name="address" value={editAddress} onChange={(event) => setEditAddress(event.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="occupation">Edit Occupation:</Label>
                        <Input id="modalInput" name="occupation" value={editOccupation} onChange={(event) => setEditOccupation(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="publicMessage">Edit Public Message:</Label>
                        <Input id="modalInput" name="publicMessage" value={editPublicMessage} onChange={(event) => setEditPublicMessage(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="emergencyContact">Edit Emergency Contact:</Label>
                        <Input id="modalInput" name="emergencyContact" value={editEmergencyContact} onChange={(event) => setEditEmergencyContact(event.target.value)}/>
                    </FormGroup>
                    <ModalFooter>
                    <Button id="modalButton" type="submit">Update your info!</Button>
                    <Button id="modalButton" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default HomeEdit