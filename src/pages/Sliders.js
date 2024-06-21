import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Sliders({ images }) {
    return (
        <div>
            <Carousel>
                {images.map((imageObj, index) => (
                    <Carousel.Item key={index}>
                        <img src={imageObj.sr} alt={`Slide ${index + 1}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
