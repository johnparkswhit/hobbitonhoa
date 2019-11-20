import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../helpers/environment'

const MischiefCreate = (props) => {
    const [complaint, setComplaint] = useState('')
    const [suspect, setSuspect] = useState('')
    

    const MischiefAdd = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/mischiefs/report`, {
            method: 'POST',
            body: JSON.stringify({
                complaint:complaint,
                suspect:suspect
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {

            props.fetchMischief();
            props.addOff();
        })
    }


    const toggle = () => props.setAddActive(!props.addActive);


    return(
        <Modal isOpen={props.addActive} toggle={toggle}>
            <ModalHeader id="modalHeader" toggle={toggle}>Report Ne'er-Do-Well Rapscallion Mischief Here</ModalHeader>
            <ModalBody id="modalBody">
                <Form id="modalForm" onSubmit={MischiefAdd}>
                    <FormGroup>
                        <Label htmlFor="complaint">Complaint Details:</Label>
                        <Input id="complaintInput" name="complaint" required value={complaint} onChange={(event) => setComplaint(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="suspect">Suspected Scallywag:</Label>
                        <Input id="modalInput" name="suspect" value={suspect} onChange={(event) => setSuspect(event.target.value)}/>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlFor="address">Stalwart Source:</Label>
                        <Input id="modalInput" name="address" value={address} onChange={(event) => setAddress(event.target.value)}/> 
                    </FormGroup> */}
                    <ModalFooter>
                        <Button id="modalButton" type="submit">Report!</Button> {''}
                        <Button id="modalButton" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default MischiefCreate;