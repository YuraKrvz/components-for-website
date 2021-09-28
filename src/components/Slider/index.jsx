import React, {useState} from 'react';
import './Slider.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const Slider = ({data}) => {
   const [current, setCurrent] = useState(0);
   const length = data.length;

   const nextSlide = ()=> setCurrent( current === length - 1 ? 0 : current + 1 );
   const prevSlide = ()=> setCurrent( current === 0 ? length - 1 : current - 1 );

   if(!Array.isArray(data) && length <= 0) return null;

   return (
      <section className="slider">
      <FaArrowAltCircleRight className='left--arrow' onClick={nextSlide} />
      <FaArrowAltCircleLeft className='right--arrow' onClick={prevSlide} />
         {data.map((item, index) => (
            <div className={index === current ? 'slider active' : 'slider'} key={item.id}>
               {index === current && (<img className="image" src={item.src} alt="img slider" />)}
               
            </div>
         ))}
      </section>         
   )
}

export default Slider
