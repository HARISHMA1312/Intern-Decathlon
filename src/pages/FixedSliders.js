// Recommendation.js

import React from 'react';
import { Card } from 'react-bootstrap';




export default function FixedSliders({ sr }) {
  return (
    <div className='recommendation-card'>
      <Card style={{ width: '18rem' }}>
        <div className='fixedsliders-container'>
          <Card.Img variant="body" src={sr} className='img-fixed'/>
          
        </div>
    
      </Card>
    </div>
  );
}
