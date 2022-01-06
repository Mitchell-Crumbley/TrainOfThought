import React, { useState, useEffect } from 'react';
import '../src/App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './Helpers/Data/Routes';
import MyNavBar from './Components/NavBar';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        setUser(authed);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
     <Router>
       <MyNavBar user={user}/>
       <MyRoutes user={user}/>
     </Router>
    </div>
  );

}

export default App;
