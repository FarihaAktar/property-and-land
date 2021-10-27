import React from 'react';
import img from '../../../images/08.jpg';
import img1 from '../../../images/010.jpg';
import img2 from '../../../images/Kavala19.jpg';
import Villa from '../Villa';

const Villas = () => {
    const arr = [
        {
            'image': img,
            'title': 'Oilcos',
            'link': 'villaOne',
            "key": 1
        },
        {
            'image': img1,
            'title': 'Voio',
            'direction': 'row-reverse',
            'link': 'villaTwo',
            'margin': '20px',
            "key": 2
        },
        {
            'image': img2,
            'title': 'Petra',
            'link': 'villaThree',
            "key": 3
        },
    ]
    return (
        <div>
            <div>
                <h1 style={{marginTop:'100px'}} className='text-center green fst-italic'>Choose Your Property</h1>
            </div>
            <div style={{ width: '80%' }} className='mt-2 mb-5 m-auto'>
                {
                    arr.map(element => <Villa key={element.key} element={element} />)
                }
            </div>
        </div>

    )
}

export default Villas
