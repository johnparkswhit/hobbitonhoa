import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';


function App(props) {
  const [sessionToken, setSessionToken] = useState('');
  const [sessionID, setSessionID] = useState('')
  const [username, setUsername] = useState('')
  console.log(sessionToken)
  console.log(sessionID)

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(newToken);
      }
    
  useEffect(() => {
    if (localStorage.getItem('sessionID')){
      setSessionID(localStorage.getItem('sessionID'))
    }
  })
  const updateID = (newID) => {
    localStorage.setItem('ID', newID);
    setSessionID(newID);
    console.log(newID);
  }


  useEffect(() => {
    if (localStorage.getItem('username')){
      setUsername(localStorage.getItem('username'))
    }
  })
  const updateUsername = (newUsername) => {
    localStorage.setItem('Username', newUsername);
    setUsername(newUsername);
    console.log(newUsername);
  }



  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }
  const clickLogout = () => {
    {clearToken()}
    alert("You have successfully logged out.")
  }


  // const viewConductor = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <HomeTable token = {sessionToken} /> : <Auth updateToken={updateToken} updateID={updateID}/>)
  // }

  return (
    <div className="App">
      <Navbar clickLogout={clickLogout}/>
      <Router>
        <Sidebar updateToken={updateToken} sessionToken = {sessionToken} sessionID={sessionID} updateID={updateID} username={username} updateUsername={updateUsername}/>
      </Router>
      {/* {protectedIndex()} */}
      {/* {viewConductor()} */}
    </div>
  );
}

export default App;
