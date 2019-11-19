import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import HomeCreate from './HomeCreate';
import HomeTable from './HomeTable';
import HomeEdit from './HomeEdit';
import APIURL from '../helpers/environment'

const HomeIndex = (props) => {
    const [homes, setHomes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [homeToUpdate, setHomeToUpdate] = useState(useState({}));

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
            console.log(results)
            console.log(props.token)
            // return results

        })
    }

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

    useEffect(() => {
        fetchHomes();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <HomeCreate fetchHomes={fetchHomes} token={props.token}/>
                </Col>
                <Col md="9">
                    <HomeTable HomeIndex={HomeIndex} homes={homes} editUpdateHome={editUpdateHome} updateOn={updateOn} fetchHomes={fetchHomes} token={props.token}/>
                </Col>
                {updateActive ? <HomeEdit homeToUpdate={homeToUpdate} updateOff={updateOff} token={props.token} fetchHomes={fetchHomes}/> : <></>}
            </Row>
        </Container>
    )
}

export default HomeIndex;;