import React from 'react';
import {Table, Button} from 'reactstrap';

const HomeTable = (props) => {
    
    const deleteHome = (home) => {
        fetch(`http://localhost:3000/home/delete/${home.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchHomes())
    }

    const homeMapper = () => {
        return props.homes.map((home, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{home.id}</th>
                    <td>{home.firstName}</td>
                    <td>{home.lastName}</td>
                    <td>{home.address}</td>
                    <td>{home.occupation}</td>
                    <td>{home.publicMessage}</td>
                    <td>{home.emergencyContact}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateHome(home); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteHome(home)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3 className="mainDiv">Homes Directory</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Occupation</th>
                    <th>Public Message</th>
                    <th>Emergency Contact</th>
                </tr>
            </thead>
            <tbody>
                {homeMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default HomeTable;