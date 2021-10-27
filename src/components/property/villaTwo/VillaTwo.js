import React from 'react';
import img1 from '../../../images/s1.jpg';
import img2 from '../../../images/s2.jpg';
import img3 from '../../../images/s3.jpg';

const VillaTwo = () => {
    return (
        <div className='villaOne'>
            <div className='villaOne-img-box'>
                <img className='villaOne-img' src={img1} alt="" />
            </div>
            <div className='villaOne-box-two d-flex mt-3'>
                <div className='villaOne-box-detail'>
                    <h3 className='green fst-italic'>Modern Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, sit? Atque, reprehenderit!</p>
                    <button className='button'>Select</button>
                </div>

                <div className='custom-width ms-auto'>
                    <img className='villaOne-img-one' src={img2} alt="" />
                </div>
            </div>
            <div className='villaOne-box-three mt-3'>
                <img className='villaOne-img' src={img3} alt="" />
            </div>
        </div>
    )
}

export default VillaTwo
