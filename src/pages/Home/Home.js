import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import Login from '../login/Login';
import Register from '../register/register';
import Button from '../../components/button/Button';

const Home =() => {
		return(	
			<main className="mainHome">
				<header className="header-Home">
					<h2 className="titleHomeLogin">BURGER QUEEN</h2>
				</header>
				<section className="sectionHome">
					<Link className="btn_Home" to="/Login">Login</Link>
					<Link className="btn_Home" to="/Register">Registrar-se</Link>
				</section>			
			</main>	
		);	 
};

export default Home;


