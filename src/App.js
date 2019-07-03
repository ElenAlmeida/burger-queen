import React from 'react';
// import './App.css';
import firebase from "./firebaseConfig";
import Login from './pages/login/Login';
import Register from './pages/register/register';
import Home from './pages/Home/Home';
import Routes from './Route';
import ShowModal from './components/modal/ShowModal';
import Salao from './pages/Salao/Salao';



class App extends React.Component {
 

  render() {
    return (
      <main>        
        <Routes></Routes>                     
        {/* <ShowModal></ShowModal> */}
        {/* <Home></Home> */}
        {/* <Salao></Salao> */}        
        {/* <Register></Register> */}
      </main>
    );
  }
}

export default App;
