import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/site/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.css';
import HomeIndex from './homes/HomeIndex';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

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



  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  const protectedIndex = () => {
    return (sessionToken === localStorage.getItem('token') ? <HomeIndex token = {sessionToken} />
    : <Auth updateToken={updateToken}/>)
  }

  const viewConductor = () => {
    return sessionToken === undefined ? <Auth/> : <HomeIndex token = {sessionToken}/>
  }

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Sidebar updateToken={updateToken} sessionToken = {sessionToken}/>
      </Router>
      {protectedIndex()}
    </div>
  );
}

export default App;
