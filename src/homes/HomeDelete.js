import React from 'react';
import {Button, Form, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const HomeDelete = (props) => {
    const deleteHome = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/home/delete/${props.homeToDelete.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
        props.fetchHomes(); 
        props.deleteOff();
        })
    }

    const toggle = () => props.setDeleteActive(!props.deleteActive);

    return(
        <Modal isOpen={props.deleteActive} toggle={toggle}>
            <ModalHeader id="modalHeader" toggle={toggle}>Are You Sure?</ModalHeader>
            <ModalBody id="modalBody">
                <Form id="modalForm" onSubmit={deleteHome}>
                    <ModalFooter>
                    <Button id="modalButton" type="submit">Yes, Delete Record</Button>
                    <Button id="modalButton" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default HomeDelete