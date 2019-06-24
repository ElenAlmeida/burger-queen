import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({isShowing, hide, children}) => 
isShowing ? ReactDOM.createPortal(
  <>
		<div className='modalOverlay'></div>
		<div className='modalWrapper' aria-modal aria-hidden  tabIndex={-1} role='dialog'>
			<div className='modalHeader'> 
				<button type='button' className='modalCloseBtn' 
							data-dimiss='modal' aria-label='Close' 
							onClick={hide}>	<span aria-hidden='true'>&times;</span>							
						</button>						
			</div>			
			<div className='modalMain'>	
				{children}								 
			</div>	
		</div>
  </>, document.body
) : null;

export default Modal;