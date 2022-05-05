import React from 'react';
import '../styles/Testimony.css';

const Testimony = (props) => {
  return (
    <div className='testimony'>
      <div className="testimony__header">
        <img
          className='testimony__image'
          src={props.image}
          alt={props.alt}
        />
        <div className="testimony__container-tittle">
          <p className="testimony__name">{props.name}</p>
          <p className='testimony__tittle'>Verified Buyer</p>
        </div>
      </div>

      <p className="testimony__text">"{props.testimony}"</p>
    </div>
  );
}

export default Testimony;