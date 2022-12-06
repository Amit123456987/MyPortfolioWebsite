import React from 'react';
import AmitMaurya from '../image/AmitMaurya.jpg';

export const Card = () => {
  return (
    <div className="card" style={{"width": "18rem",margin: "10px"}}>
    <img src={AmitMaurya} className="card-img-top" alt="..."></img>
    <div className="card-body">,
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  );
}
