import React, { useState} from 'react';
import firebase from '../../firebaseConfig';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import './register.css';
import {Link} from 'react-router-dom';


const auth = firebase.auth();
const db = firebase.firestore();
 
export default function Register (props) { 
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sector, setSector] =useState('Salao');    
    const [confirmPassword, setConfirmPassword] = useState('');
  
   const singIn = (e) => {
     e.preventDefault();
  
     if(password === confirmPassword){
      auth.createUserWithEmailAndPassword(email, password).then(cred => {
        props.history.push(`${sector}`)
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
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
        <header className="header-Home">
					<h2 className="titleHomeLogin">BURGER QUEEN</h2>
				</header>        
        <form className='formRegister' onSubmit={singIn}>
          <Input className='inputHome' placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)} ></Input>
          <Input className='inputHome' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
          <Input className='inputHome' placeholder='Digite sua senha' value={password} onChange={(e) =>setPassword(e.target.value)}></Input>
          <Input className='inputHome' placeholder='Confirme sua senha' value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}></Input>
          <select className='sectionSelectRegister' onChange={(e) => setSector(e.target.value)}>
            <option className='option-Register'>Salão</option>
            <option className='option-Register'>Cozinha</option>             
          </select>       
          <section className='section-btn-Register'>
            <Button className='btnRegisterHome' text='Concluir Cadastro'></Button>
            <Link className="linkRegister" to="/">Voltar</Link>
          </section>                       
        </form>        
      </main>
    )   
  }