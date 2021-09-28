import React, {useState} from 'react'
import Navbar from '../Navbar';
import TestSectionFormUseInput from '../TestSectionFormUseInput';
import Slider from '../Slider';
import {DataSlider} from '../Slider/DataSlider';

import Modal from '../Modal';

const Home = () => {
   const [showModal, setShowModal] = useState(false);
   return (
      <>
         <Navbar />
         <Slider data={DataSlider} />
         <button onClick={()=> setShowModal(!showModal)}>Modal</button>
         <Modal active={showModal} setActive={setShowModal}>
            <TestSectionFormUseInput />
         </Modal>
      </>
   )
}

export default Home
