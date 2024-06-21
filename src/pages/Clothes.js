import React, { useState } from 'react';
import '../App.css'; 
import {Card} from 'react-bootstrap'

const ProductCard = ({ product }) => {
    return (
      <Card className="home-carousel-product-card">
        <div className="home-carousel-image-container">
          <Card.Img src={product.image} alt={product.name} />
          <div className="home-carousel-rating">
            <span >★</span>
            <span >{product.rating}</span>
          </div>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="home-carousel-price">₹{product.price}</div>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
  };
  
  const Clothes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const products = [
      {
        name: 'CAPERLAN Adult Rain Pocket Poncho Dark Blue',
        description: 'Adult Rain Pocket Poncho Dark Blue',
        image: 'https://contents.mediadecathlon.com/p2515581/afbc7afe72fb41c06394bffbe424598f/p2515581.jpg?format=auto&quality=70&f=320x0',
        rating: 3.98,
        price: 399,
      },
      {
        name: 'FORCLAZ Hiking Rain Poncho MT50 Grey',
        description: 'Hiking Rain Poncho MT50 Grey',
        image: 'https://contents.mediadecathlon.com/p2621848/9aa6956200b602c1c9b6e6fead6cc077/p2621848.jpg?format=auto&quality=70&f=320x0',
        rating: 4.42,
        price: 699,
      },
      {
        name: 'CAPERLAN Waterproof Poncho - FP 100 Black',
        description: 'Waterproof Poncho - FP 100 Black',
        image: 'https://contents.mediadecathlon.com/p2407057/583ee67652bbad9a9458b67db0c10ae3/p2407057.jpg?format=auto&quality=70&f=320x0',
        rating: 4.51,
        price: 999,
      },
      {
        name: 'KALENJI Men Running Wind And Rain Jacket - Black',
        description: 'Men Running Wind And Rain Jacket - Black',
        image: 'https://contents.mediadecathlon.com/p2692462/8da0e20089f559808be7952dabc62116/p2692462.jpg?format=auto&quality=70&f=320x0',
        rating: 4.51,
        price: 1599,
      },
      {
        name: 'FORCLAZ Waterproof Poncho -MT100 - BLUE',
        description: 'Waterproof Poncho -MT100 - BLUE',
        image: 'https://contents.mediadecathlon.com/p2583911/678d0da6a5ca729caa7d0024e7946be7/p2583911.jpg?format=auto&quality=70&f=320x0',
        rating: 4.5,
        price: 1299,
      },
      {
        name: 'KALENJI Men Running Wind and Rain Jacket - Black',
        description: 'Men Running Wind and Rain Jacket - Black',
        image: 'https://contents.mediadecathlon.com/p2043964/c0672a0f8a514fe22546e91d7e44010a/p2043964.jpg?format=auto&quality=70&f=320x0',
        rating: 4.51,
        price: 1599,
      },
      {
        name: 'ROCKRIDER Rainproof Jacket EXPL 500 - Red',
        description: 'Rainproof Jacket EXPL 500 - Red',
        image: 'https://contents.mediadecathlon.com/p2490922/9d7406af9a1d3b9b374dfb7e0ffb906d/p2490922.jpg?format=auto&quality=70&f=320x0',
        rating: 4.53,
        price: 2499,
      },
      {
        name: 'QUECHUA Hiking Rain Poncho - MT900 - 75L - Red - L/XL',
        description: 'Hiking Rain Poncho - MT900 - 75L - Red - L/XL',
        image: 'https://contents.mediadecathlon.com/p2583152/10e511fe1db2c914ae9a288fc7c1744f/p2583152.jpg?format=auto&quality=70&f=320x0',
        rating: 4.39,
        price: 3999,
      },
    ];
  
    const itemsPerPage = 5;
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= products.length ? 0 : prevIndex + 1
      );
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? products.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="home-carousel-container">
        <h2>Monsoon Picks For You</h2>
        <div className="home-carousel-nav">
          <button className="home-carousel-arrow home-carousel-left-arrow" onClick={handlePrev}>
            &lt;
          </button>
          <button className="home-carousel-arrow home-carousel-right-arrow" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <div className="home-carousel-carousel">
          <div
            className="home-carousel-carousel-track"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {products.map((product, index) => (
              <div className="home-carousel-carousel-item" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
       
      </div>
    );
  };

  export default Clothes;
