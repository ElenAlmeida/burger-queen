import React, { useState } from 'react';
import firebase from '../../firebaseConfig';
import {Link} from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import './login.css';

const auth = firebase.auth();
// const db = firebase.firestore();
 
export default function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sector, setSector] =useState('Salao');
          
    const acess=(e)=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password).then(cred=>{         
        props.history.push(`${sector}`)
        setEmail('')
        setPassword('')
      }).catch((error) =>{   
        alert('erro na autenticação')
        setEmail('')
        setPassword('')     
      }) 
    }     
      
    return (
      <main className='mainLogin'>
        <header className="header-Home">
					<h2 className="titleHomeLogin">BURGER QUEEN</h2>
				</header>
        <form className='formLogin' onSubmit={acess}>
          <Input className='input-Login' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
          <Input className='input-Login' placeholder='Digite sua senha' value={password} onChange={(e) =>setPassword(e.target.value)}></Input>
          <select className='section-option-Login' onChange={(e) => setSector(e.target.value)}>
            <option value='hall' className='input-section-Login'>Salão</option>
            <option value='kitchen' className='input-section-Login'>Cozinha</option>             
          </select>               
          <section className='section-btn-Login'>
            <Button className='buttonLogin' text='Login'></Button>
            <section className="sectionLink">
              <Link className="linkLogin" to="/Register">Registrar-se</Link>
              <Link className="linkLogin" to="/">Voltar</Link>
            </section>           
          </section>                       
        </form>        
      </main>
    )
  }
