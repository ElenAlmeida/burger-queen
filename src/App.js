import React from 'react';
import './App.css';
import firebase from "./firebaseConfig";
import Login from './pages/login/Login';
import Register from './pages/register/register';
import Home from './pages/Home/Home';
import Routes from './Route'

class App extends React.Component {
 

  render() {
    return (
      <main>        
        <Routes></Routes>                     
      </main>
    );
  }
}

export default App;
