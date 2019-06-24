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
      <main className='mainLogin'>
        <form className='formLogin' onSubmit={acess}>
          <Input className='input-Login' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
          <Input className='input-Login' placeholder='Digite sua senha' value={password} onChange={(e) =>setPassword(e.target.value)}></Input>
          <select className='section-btn-Login' onChange={(e) => setSector(e.target.value)}>
            <option value='hall' className='input-section-Login'>Salão</option>
            <option value='kitchen' className='input-section-Login'>Cozinha</option>             
          </select>               
          <section className='section-btn-Login'>
            <Button className='buttonLogin' text='Login'></Button>
          </section>                       
        </form>        
      </main>
    )
  }
