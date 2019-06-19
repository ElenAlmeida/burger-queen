import React, { useState } from 'react';
import firebase from '../../firebaseConfig';
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
      <main className='main'>
        <form className='form' onSubmit={acess}>
          <Input className='input' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
          <Input className='input' placeholder='Digite sua senha' value={password} onChange={(e) =>setPassword(e.target.value)}></Input>
          <select className='section-btn' onChange={(e) => setSector(e.target.value)}>
            <option className='input-section'>Salão</option>
            <option className='input-section'>Cozinha</option>             
          </select>               
          <section className='section-btn'>
            <Button className='btn' text='Login'></Button>
          </section>                       
        </form>        
      </main>
    )
  }
