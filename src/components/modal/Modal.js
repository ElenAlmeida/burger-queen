import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({isShowing, hide}) => 
isShowing ? ReactDOM.createPortal(
  <>
		<div className='modalOverlay'></div>
		<div className='modalWrapper' aria-modal aria-hidden  tabIndex={-1} role='dialog'>
			<div className='modal'> 
				<div className='modalHeader'>
					<button type='button' className='modalCloseBtn' 
						data-dimiss='modal' aria-label='Close' 
						onClick={hide}>							
					</button>
					<span aria-hidden='true'>&times;</span>					 
				</div>
				<p>Oi, eu sou um Modal</p>
			</div>
		</div>
  </>, document.body
) : null;

export default Modal;