import React from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';

export default function ListCard({ sr, p }) {
  return (
    <div className="card-wrapper">
      <Card className="custom-card">
        <Card.Img variant="top" src={sr} />
        <Card.Body>
          <Card.Text className='card-title'>{p}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
