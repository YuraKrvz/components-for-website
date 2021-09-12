import React,{useState} from 'react';
import './Navbar.css';
import { navbarData } from './NavbarData';
import Button from '../Button';


const Navbar = ()=> {
  const [on, setOn] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Navbar <i className="fab fa-slack"></i> </h1>
      <div onClick={()=> setOn(!on)} className="navbar-icon">
         <i className={on ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={on ? 'nav-menu active' : 'nav-menu'}>
         {navbarData.map((data, index) => (
            <li className={data.cName} key={index}><a href={data.url}>{data.title}</a></li>
         ))}
      </ul>
      <Button>Sign up</Button>
    </nav>
  );
}

export default Navbar;