import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import layout0201 from '../images/layout02(01)new.jpg';
import layout01 from '../images/layout02(2)new.jpg';

const Header = () => {
    function ControlledCarousel() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel  className="w-75 m-auto" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 h-auto"
                        src={layout0201}
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-1 fst-italic fw-bold'>Your Property Is Our Priority</h3>
                        <p className="fw-bold ">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 h-auto"
                        src={layout01}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fs-1 fst-italic fw-bold'>Modern Houses</h3>
                        <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }


    return (
        <ControlledCarousel />
    )
}

export default Header
