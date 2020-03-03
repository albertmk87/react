import React, { Component } from 'react';
import './Card.css';

const Card = (robots) => {
    return (

      <div className="Card tc bg-light-green dib br3 pa3 ma2 grow bw2 ">
      	<img src={`https://robohash.org/${robots.id}?200x200`} />
       	<div>

       	<h2>{robots.name} </h2>
       	<p>{robots.email} </p>
        </div>
       </div>
    );
 
}

export default Card;
