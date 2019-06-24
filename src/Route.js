import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from "./firebaseConfig";
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import Register from './pages/register/register';
import Salao from './pages/Salao/Salao';
import Cozinha from './pages/kitchen/kitchen';


// const auth = firebase.auth();
// const user = auth.currentUser;
// const PrivateRoute = ({component: Component, ... rest }) => (
//   <Route 
//     {...rest}
//     render = {props => 
//       user !== null ?(        
//         (<Component{...props} />)
//       ):(
//         <Redirect to={{pathname: '/' , state: {from: props.location} }}></Redirect>
//       )
//     }
//   />
// )

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}></Route>
			<Route exact path='/Login' component={Login}></Route>
      <Route exact path='/Register' component={Register}></Route>
      <Route exact path='/Salao' component={Salao}></Route> 
      <Route exact path='/Cozinha' component={Cozinha}></Route>       
    </Switch>
  </BrowserRouter>  
)

export default Routes;