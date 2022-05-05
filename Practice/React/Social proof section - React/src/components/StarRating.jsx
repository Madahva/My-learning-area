import React from 'react';
import '../styles/StarRating.css';

function StarRating(props) {
  return (
    <div className={props.class}>
      <div className='starRating__stars' />
      <p className='starRating__text'>Rated 5 Stars in {props.props}</p>
    </div>
  );
}

export default StarRating;