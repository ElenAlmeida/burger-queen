import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default class Home extends React.Component{
	render(){
		return(
			<main className='main'>	
				<section class='container'>	
					<h1 className='title'>Burguer Queen <i class="fas fa-crown"></i></h1>	
					<Link to='/Login' className='direcionar'>Login</Link>
					<Link to='/Register' className='direcionar'>Registrar</Link>
				</section>						
			</main>
		);
	};  
};

