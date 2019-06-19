import React from 'react';

function Input({type, className, onChange, value, placeholder,text}) {
  return (
    <input type={type} placeholder={placeholder} className={className} onChange={onChange} value={value} text={text} />
  );
}

export default Input;