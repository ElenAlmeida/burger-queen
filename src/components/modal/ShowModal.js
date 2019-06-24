import React from 'react';

import Modal from './Modal';
import useModal from './UseModal';
import Login from '../../pages/login/Login'

const ShowModal = () =>{
  const {isShowing, toggle} = useModal();

  return(
		<>
			<div className='app' > 
				<button className='btn-default' onClick={toggle}> Clique me</button>
				<Modal isShowing={isShowing} hide={toggle}>
					<Login></Login>
					
				</Modal>
			</div>
		</>        
  );
}

export default ShowModal;