// ControlledSliders.js
import React from 'react';
import { Card } from 'react-bootstrap';

export default function ControlledSliders({ sr, title }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={sr} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
