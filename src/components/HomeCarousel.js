import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import istock from '../assets/unsplash.jpg'
import david from '../assets/unsplash-1.jpg'
import femoree from '../assets/uspash 2.jpg'

export default function HomeCarousel({ booking, profile}) {
    return (
        <div>
            <Carousel className={booking || profile ? "filter_back carousel" : 'carousel'}>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={istock}
                    alt="First slide"
                />
                    <Carousel.Caption>
                        <h3>Learning goals!</h3>
                        <p>Skills you love at your fingertips, 
                            stay energized and creative with elpis    
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={david}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                       <h3>Learning goals!</h3>
                        <p>Skills you love at your fingertips, 
                            stay energized and creative with elpis    
                        </p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={femoree}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Learning goals!</h3>
                        <p>Skills you love at your fingertips, 
                            stay energized and creative with elpis    
                        </p>
                     </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
