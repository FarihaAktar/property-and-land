import React from 'react';
import img1 from '../../../images/t07.jpg';
import img2 from '../../../images/t08.jpg';
import img3 from '../../../images/t09.jpg';

const VillaThree = () => {
    return (
        <div className='villaOne'>
            <div className='villaOne-img-box'>
                <img className='villaOne-img' src={img1} alt="" />
            </div>
            <div className='villaOne-box-two mt-3'>
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

export default VillaThree
