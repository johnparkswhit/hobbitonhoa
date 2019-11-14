import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
import HomeEdit from './HomeEdit'
import HomeCreate from './HomeCreate'
import HomeDelete from './HomeDelete'
import APIURL from '../helpers/environment'

const HomeTable = (props) => {

    const [homes, setHomes] = useState([]);

    const [updateActive, setUpdateActive] = useState(false);
    const [homeToUpdate, setHomeToUpdate] = useState(useState({}));

    const [addHome, setAddHome] = useState(useState({}));
    const [addActive, setAddActive] = useState(false);

    const [deleteActive, setDeleteActive] = useState(false);
    const [homeToDelete, setHomeToDelete] = useState(useState({}));

    
    const fetchHomes = () => {
        fetch(`${APIURL}/home/dir`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) 
        .then ( (res) => res.json())
        .then((results) => {
            setHomes(results)
        })
    }
    console.log(homes)
    console.log(props.sessionID)


    const editUpdateHome = (home) => {
        setHomeToUpdate(home);
        console.log(home);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }
    
    const editAddHome = (home) => {
        setAddHome(home);
    }
    const addOn = () => {
        setAddActive(true);
    }
    const addOff = () => {
        setAddActive(false);
    }

    const editDeleteHome = (home) => {
        setHomeToDelete(home);
    }
    const deleteOn = () => {
        setDeleteActive(true);
    }
    const deleteOff = () => {
        setDeleteActive(false);
    }

    

    const homeMapper = () => {
        if (homes.length > 0) {
        return homes.map((home, index, user) => {
            // console.log(homes)
            return(
                <tr key={index}>
                    {/* <th scope="row">{home.id}</th> */}
                    <td className="tdfn">{home.firstName}</td>
                    <td className="tdln">{home.lastName}</td>
                    <td className="tda">{home.address}</td>
                    <td className="tdo">{home.occupation}</td>
                    <td className="tdpm">{home.publicMessage}</td>
                    <td className="tdec">{home.emergencyContact}</td>
                    <td>
                        {home.owner===props.sessionID ? 
                        <Button id="editButton" color="warning" onClick={() => {editUpdateHome(home); updateOn()}}>Update</Button>
                        : ""}
                    
                        {home.owner===props.sessionID ? 
                        <Button id="editButton" color="danger" onClick={() => {editDeleteHome(home); deleteOn()}}>Delete</Button>
                        : ""}
                    </td>
                    {updateActive ? <HomeEdit homeToUpdate={homeToUpdate} updateOff={updateOff} token={props.token} fetchHomes={fetchHomes}/> : <></>}
                    {deleteActive ? <HomeDelete homeToDelete={homeToDelete} deleteOff={deleteOff} token={props.token} fetchHomes={fetchHomes}/> : <></>}
                </tr>
            )
        })}else{
            return(
            <p className="accessDir">Please <a id="dirErr" href="/Auth">Log In</a> or <a id="dirErr" href="/Signup">Sign Up</a> to Access Directory</p>
            )}
    }

    useEffect(() => {
        fetchHomes();
    }, [])
    
    return(
        <>
        <h2 className="mainDiv">Hobbit Hole Directory</h2>
        <hr/>
        <button className="createButton" onClick={() => {editAddHome(); addOn()}}>Add Yours Now</button>
        <hr/>

        {addActive ? <HomeCreate setAddActive={setAddActive} addActive={addActive} addHome={addHome} addOff={addOff} token={props.token} fetchHomes={fetchHomes}/> : <></>}

        <Table className="directory" striped  homes={homes} editUpdateHome={editUpdateHome} updateOn={updateOn} editDeleteHome={editDeleteHome} deleteOn={deleteOn} fetchHomes={fetchHomes} token={props.token}>

        {updateActive ? <HomeEdit setUpdateActive={setUpdateActive} updateActive={updateActive} homeToUpdate={homeToUpdate} updateOff={updateOff} token={props.token} fetchHomes={fetchHomes}/> : <></>}

        {deleteActive ? <HomeDelete setDeleteActive={setDeleteActive} deleteActive={deleteActive} homeToDelete={homeToDelete} deleteOff={deleteOff} token={props.token} fetchHomes={fetchHomes}/> : <></>}

            <thead>
                <tr>
                    {/* <th>#</th> */}
                    <th>First</th>
                    <th>Last</th>
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