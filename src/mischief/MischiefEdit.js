import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import APIURL from '../helpers/environment'

const MischiefEdit = (props) => {
    const [editComplaint, setEditComplaint] = useState(props.mischiefToUpdate.complaint);
    const [editSuspect, setEditSuspect] = useState(props.mischiefToUpdate.lastName);

    const mischiefUpdate = (event, mischief) => {
        event.preventDefault();
        fetch(`${APIURL}/mischiefs/update/${props.mischiefToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                complaint:editComplaint, 
                suspect:editSuspect
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchMischief();
            props.updateOff();
        })
    }

    const toggle = () => props.setUpdateActive(!props.updateActive);

    return(
        <Modal isOpen={props.updateActive} toggle={toggle}>
            <ModalHeader id="modalHeader" toggle={toggle}>Update Your Rapscallion Report Here</ModalHeader>
            <ModalBody id="modalBody">
                <Form id="modalForm" onSubmit={mischiefUpdate}>
                    <FormGroup>
                        <Label htmlFor="complaint">Edit Complaint:</Label>
                        <Input id="modalInput" name="complaint" value={editComplaint} onChange={(event) => setEditComplaint(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastName">Edit Suspect(s):</Label>
                        <Input id="modalInput" name="suspect" value={editSuspect} onChange={(event) => setEditSuspect(event.target.value)}/>
                    </FormGroup>
                    <ModalFooter>
                    <Button id="modalButton" type="submit">Update Your Report</Button>
                    <Button id="modalButton" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default MischiefEdit