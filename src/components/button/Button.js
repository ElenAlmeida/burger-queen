import React from 'react';

function Button({className, text, onClick, valor}){
  return(
   <button className={className} onClick={onClick} valor={valor}>{text}</button>
  )
}
export default Button;