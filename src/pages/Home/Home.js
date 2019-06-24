import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import Login from '../login/Login';
import Register from '../register/register';

const Home =() => {
		return(	
			<main>	
				<h1>Burguer Queen</h1>
				<section className='mainHome'>					
					<section className='sectionHomeLogin'>					
						<Login></Login>										
					</section>
					<section className='sectionHomeRegister'>					
							<Register></Register>						
					</section>
				</section>
			</main>	
		);
	 
};

export default Home;


