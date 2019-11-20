import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
import MischiefEdit from './MischiefEdit'
import MischiefCreate from './MischiefCreate'
import MischiefDelete from './MischiefDelete'
import APIURL from '../helpers/environment'

const MischiefTable = (props) => {

    const [mischief, setMischief] = useState([]);

    const [updateActive, setUpdateActive] = useState(false);
    const [mischiefToUpdate, setMischiefToUpdate] = useState(useState({}));

    const [addMischief, setAddMischief] = useState(useState({}));
    const [addActive, setAddActive] = useState(false);

    const [deleteActive, setDeleteActive] = useState(false);
    const [mischiefToDelete, setMischiefToDelete] = useState(useState({}));

    
    const fetchMischief = () => {
        fetch(`${APIURL}/mischiefs/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) 
        .then ( (res) => res.json())
        .then((results) => {
            setMischief(results)
        })
    }
    console.log(mischief)
    console.log(props.username)


    const editUpdateMischief = (mischief) => {
        setMischiefToUpdate(mischief);
        console.log(mischief);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }
    
    const editAddMischief = (mischief) => {
        setAddMischief(mischief);
    }
    const addOn = () => {
        setAddActive(true);
    }
    const addOff = () => {
        setAddActive(false);
    }

    const editDeleteMischief = (mischief) => {
        setMischiefToDelete(mischief);
    }
    const deleteOn = () => {
        setDeleteActive(true);
    }
    const deleteOff = () => {
        setDeleteActive(false);
    }

    

    const mischiefMapper = () => {
        if (mischief.length > 0) {
        return mischief.map((mischief, index, user) => {
            // console.log(homes)
            return(
                <tr key={index}>
                    {/* <th scope="row">{home.id}</th> */}
                    <td>{mischief.complaint}</td>
                    <td>{mischief.suspect}</td>
                    <td>{mischief.owner}</td>
                    <td>
                        {mischief.owner===props.username ? 
                        <Button id="editButton" color="warning" onClick={() => {editUpdateMischief(mischief); updateOn()}}>Update</Button>
                        : ""}
                    
                        {mischief.owner===props.username ? 
                        <Button id="editButton" color="danger" onClick={() => {editDeleteMischief(mischief); deleteOn()}}>Delete</Button>
                        : ""}
                    </td>
                    {updateActive ? <MischiefEdit mischiefToUpdate={mischiefToUpdate} updateOff={updateOff} token={props.token} fetchMischief={fetchMischief}/> : <></>}
                    {deleteActive ? <MischiefDelete mischiefToDelete={mischiefToDelete} deleteOff={deleteOff} token={props.token} fetchMischief={fetchMischief}/> : <></>}
                </tr>
            )
        })}else{
            return('')}
    }

    useEffect(() => {
        fetchMischief();
    }, [])
    
    return(
        <>
        <h2 className="mainDiv">Rapscallion Report</h2>
        <hr/>
        <button className="createMischiefButton" onClick={() => {editAddMischief(); addOn()}}>See Something? Say Something.</button>
        <hr/>

        {addActive ? <MischiefCreate setAddActive={setAddActive} addActive={addActive} addMischief={addMischief} addOff={addOff} token={props.token} fetchMischief={fetchMischief}/> : <></>}

        <Table className="directory" striped  mischief={mischief} editUpdateMischief={editUpdateMischief} updateOn={updateOn} editDeleteMischief={editDeleteMischief} deleteOn={deleteOn} fetchMischief={fetchMischief} token={props.token}>

        {updateActive ? <MischiefEdit setUpdateActive={setUpdateActive} updateActive={updateActive} mischiefToUpdate={mischiefToUpdate} updateOff={updateOff} token={props.token} fetchMischief={fetchMischief}/> : <></>}

        {deleteActive ? <MischiefDelete setDeleteActive={setDeleteActive} deleteActive={deleteActive} mischiefToDelete={mischiefToDelete} deleteOff={deleteOff} token={props.token} fetchMischief={fetchMischief}/> : <></>}

            <thead>
                <tr>
                    {/* <th>#</th> */}
                    <th>Complaint</th>
                    <th>Suspect(s)</th>
                    <th>Reporter</th>
                </tr>
            </thead>
            <tbody>
                {mischiefMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default MischiefTable;