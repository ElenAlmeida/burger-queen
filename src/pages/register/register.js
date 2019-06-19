import React, { useState} from 'react';
import firebase from '../../firebaseConfig';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import './register.css';

const auth = firebase.auth();
const db = firebase.firestore();
 
export default function Register () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sector, setSector] =useState('Salao');    
    const [confirmPassword, setConfirmPassword] = useState('');
  
   const singIn = (e) => {
     e.preventDefault();
  
     if(password === confirmPassword){
      auth.createUserWithEmailAndPassword(email, password).then(cred => {
        alert('Usuário cadastrado com sucesso!')
        return db.collection('user').doc(cred.user.uid).set({
          email,
          sector          
        })    
      }).catch((error) => {
        alert('Colaborador já cadastrado.')
        console.log(error)
      })			
    }else{
      alert('As senhas precisam ser iguais.')
    }
   }  
    return (
      <main className='main'>
        <form className='form' onSubmit={singIn}>
          <Input className='input' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
          <Input className='input' placeholder='Digite sua senha' value={password} onChange={(e) =>setPassword(e.target.value)}></Input>
          <Input className='input' placeholder='Digite sua senha' value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}></Input>
          <select className='section-btn' onChange={(e) => setSector(e.target.value)}>
            <option className='section-btn'>Salão</option>
            <option className='section-btn'>Cozinha</option>             
          </select>       
          <section className='section-btn'>
            <Button className='btn' text='Concluir Cadastro'></Button>
          </section>                       
        </form>        
      </main>
    )
  }