let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of your react app
    case 'localhost' || '127.0.0.1' :
    //local host name of your api
        APIURL = "http://localhost:3000";
        break;
    //this is the deployed react application
    case 'jpw-hobbiton-client.herokuapp.com' :
    //this is the full url of your deployed API
        APIURL = "https://jpw-hobbiton-server.herokuapp.com"
        break;
}

export default APIURL