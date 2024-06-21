// Recommendation.js

import React from 'react';
import { Card } from 'react-bootstrap';
import Star from '../assets/star.png'




export default function Recommendation({ sr, tit, rat, txt, pri }) {
  return (
    <div className='recommendation-card'>
      <Card style={{ width: '18rem' }}>
        <div className='image-container'>
          <Card.Img variant="top" src={sr} />
          <div className='rating'>
            <img src={Star} width={15} height={15}  alt='Star'/>
            <span>{rat}</span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{tit}</Card.Title>
          <Card.Text>
            {txt}
            <br />
            {pri}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
