import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

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
        
      ><Link to="/Form">{children}</Link></button> 
    </>
  );
}

export default Button;