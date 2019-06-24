import React from 'react';

function Button({className, text, onClick, valor, removeItem}){
  return(
   <button className={className} onClick={onClick} valor={valor} >{text}</button>
  )
}
export default Button;