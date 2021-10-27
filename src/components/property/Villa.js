import React from 'react';
import { Link } from 'react-router-dom';
import './Villa.css';

const Villa = ({ element }) => {
    const { image, title, direction, margin, link } = element;
    return (
        <div style={{flexDirection: direction}} className='d-flex villa'>
            <div className='villa-img-box'>
                <img className='villa-img' src={image} alt="" />

            </div>
            <div className='villa-detail' style={{marginRight: margin}}>
                <h2 className=' '>Villa</h2>
                <h6 className='green fst-italic'>{title}</h6>
                <p className='mt-3 text-muted lh-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum vitae asperiores quae totam. Iure, rem aut! Rem aliquid aspernatur dignissimos, provident officiis aut omnis possimus? Repellendus, voluptates. Rerum, consequuntur dicta?</p>
                <Link to={`/${link}`} className='villa-btn'>Learn More</Link>

            </div>
        </div>
    )
}

export default Villa
