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
		const [xuxu, setXuxu] = useState([]);
	 
	
		useEffect(() => { 		
			db.collection('breakfeast').get().then((querySnapshot) => {			
				const data = querySnapshot.docs.map(doc => doc.data()); 		     
				setProducts([...data,
				{item, price}
				])    
			})    
		}, []); 

	  
		const addItem = (e) => {
			e.preventDefault();    
			db.collection('breakfeast').add({item, price})
			setProducts([ ...products,
				{item, price}
			]); 
			setItem('')
			setPrice('')		
		};

		const newItem = (e) => {
			e.preventDefault();
			db.collection('newCommands').add({commands})
			setXuxu([ ...xuxu,
				{commands}
			]); 
			setCommands([]);
		};	

		const algumaCoisa = (element) => {
			const banana={element};
			setCommands(commands.concat(banana));		
		}			

		const removeItem = (index) =>{			
			const arr = commands;
			arr.splice(index,1);
			setCommands([...arr]);		
		}

  return(
	  <>
		  <form onSubmit={addItem}>
				<Input placeholder='item' value={item} onChange={(e) => setItem(e.target.value)} ></Input>
				<Input placeholder='Price' value={price} onChange={(e) =>setPrice(e.target.value)}></Input>
				<Button text='Enviar'></Button>
      </form>
		  <section className='divMenu'>
			  <ul>
				{
					products.map((element) =>
					
					<Button  key={element.item} text={element.item}  onClick={() => algumaCoisa(element)}></Button>		
									
					)						        
				}
				</ul>
			</section>
			<section>
				<ul>
					{					
						commands.map((ele,i) =>
							<li>
								{ele.element.item}
								<Button key={ele.element.item} text='remover' onClick={() => removeItem(i)}></Button> 
							</li>																			
						)						
					}
				</ul>	
			</section>	
			<section>
				<Button text='Clicar' onClick={newItem}></Button>
			</section>			 	
	  </>
  )
};

export default Salao;