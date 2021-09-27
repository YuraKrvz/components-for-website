import React, {useState} from 'react'
import Navbar from '../Navbar';
import TestSectionFormUseInput from '../TestSectionFormUseInput';

import Modal from '../Modal';

const Home = () => {
   const [showModal, setShowModal] = useState(true);
   return (
      <>
         <Navbar />
         <button onClick={()=> setShowModal(!showModal)}>Modal</button>
         <Modal active={showModal} setActive={setShowModal}>
            <TestSectionFormUseInput />
         </Modal>
      </>
   )
}

export default Home
