import React from "react";
import {Card,CardGroup} from "react-bootstrap";

function Blog({src,title,left,right,link}) {
    const handleClick = () => {
        window.location.href = link;
    };
    return (
      <CardGroup className="b_blogparent">
      <Card className="b_blogs" onClick={handleClick}>
        <Card.Img variant="top" src={src} width="100%" height="100%" />
        <Card.Body className="b_cardbody" width="100%" height="100%">
          <Card.Title align="center" className="b_cardtitle"><b>{title}</b></Card.Title>
          <Card.Text>
            <span className='b_left'>{left}</span>
            <span className='b_right'><b>{right}</b></span>
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
    );
  }
  
  export default Blog;
