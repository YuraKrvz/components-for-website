import React from 'react';
import './Modal.css';

const Modal = ({active, setActive, children}) => {
   // const [showModal, setShowModal] = useState(true);

   return (
      <div className={active ? 'modal active' : 'modal'} onClick={()=> setActive(false)}>
         <div className={active ? 'modal__body active' : 'modal__body'} onClick={(e)=> e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default Modal;
