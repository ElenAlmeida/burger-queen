import React, { useState} from 'react';
import firebase from '../../firebaseConfig';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import './register.css';
import ReactDOM from 'react-dom';

const auth = firebase.auth();
const db = firebase.firestore();
 
export default function Register ({isShowing, hide, children}) {
  
  
    const [name, setName] = useState('');
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
          name,
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
      <main className='mainRegister'>
        <form className='formRegister' onSubmit={singIn}>
          <Input className='inputHome' placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)} ></Input>
          <Input className='inputHome' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
          <Input className='inputHome' placeholder='Digite sua senha' value={password} onChange={(e) =>setPassword(e.target.value)}></Input>
          <Input className='inputHome' placeholder='Digite sua senha' value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}></Input>
          <select className='sectionSelectHome' onChange={(e) => setSector(e.target.value)}>
            <option className='option-Register'>Salão</option>
            <option className='option-Register'>Cozinha</option>             
          </select>       
          <section className='section-btn-Register'>
            <Button className='btnRegisterHome' text='Concluir Cadastro'></Button>
          </section>                       
        </form>        
      </main>
    )
   
  }