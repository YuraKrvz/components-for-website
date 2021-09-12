import React from 'react';
import './Button.css';

const STYLES = [
  'btn--primary',
  'btn--outline',
];
const SIZE = [
  'btn--medium',
  'btn--large',

];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,

})=> {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <>
      <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        
      >{children}</button> 
    </>
  );
}

export default Button;