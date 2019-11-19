import React, {useState} from 'react';
import {Button, Form, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import APIURL from '../helpers/environment'

const MischiefDelete = (props) => {

    const deleteMischief = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/mischiefs/delete/${props.mischiefToDelete.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
        props.fetchMischief(); 
        props.deleteOff();
        })
    }

    const toggle = () => props.setDeleteActive(!props.deleteActive);

    return(
        <Modal isOpen={props.deleteActive} toggle={toggle}>
            <ModalHeader id="modalHeader" toggle={toggle}>Are You Sure?</ModalHeader>
            <ModalBody id="modalBody">
                <Form id="modalForm" onSubmit={deleteMischief}>
                    <ModalFooter>
                    <Button id="modalButton" type="submit">Yes, Delete Report</Button>
                    <Button id="modalButton" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default MischiefDelete