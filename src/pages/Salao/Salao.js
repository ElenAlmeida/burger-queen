import React, { useState, useEffect } from 'react';
import firebase from "../../firebaseConfig";
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './Salao.css'

const db = firebase.firestore();

 function Salao () {	
	const [item, setItem] = useState('');
	const [price, setPrice] = useState('')
	const [products, setProducts] = useState([]);
	const [commands, setCommands] = useState([]);
	 
	
	useEffect(() => { 		
		db.collection('breakfeast').get().then((querySnapshot) => {			
		  const data = querySnapshot.docs.map(doc => doc.data());       
		  setProducts([...data,
			{item, price}
		  ])    
		})    
	}, []); 
		
		useEffect(() => { 
			db.collection('newOrder').get().then((querySnapshot) => {
				const data = querySnapshot.docs.map(doc => doc.data());       
				setProducts([...data,
				{item, price}
				])    
			 })    
			},[]); 
	  
	  const addItem = (e) => {
		e.preventDefault();    
		db.collection('breakfeast').add({item, price})
		setProducts([ ...products,
		  {item, price}
		]); 
		setItem('')
		setPrice('')		
		} 
		
	const order	= (event) =>{
		event.preventDefault();
		db.collection('newOrder').add({item, price})
		setCommands([
		  ...commands,
		  {item, price}
		]); 
		setItem('')
		setPrice('')		
		} 	

 console.log (products)

  return(
	  <>
		  <form onSubmit={addItem}>
				<Input placeholder='item' value={item} onChange={(e) => setItem(e.target.value)} ></Input>
				<Input placeholder='Price' value={price} onChange={(e) =>setPrice(e.target.value)}></Input>
				<Button text='Enviar'></Button>
      </form>
		  <section className='divMenu'>
				{
					products.map((e,i)=> 
						<p key={i}>{e.item}</p>						
					)						        
				}
				</section>  	 	
	  </>
  )
};



export default Salao;