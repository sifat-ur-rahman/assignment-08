import React, { useEffect, useState } from 'react';
import Sport from '../Sports-card/Sport';
import './Sports.css'

const Sports = () => {
    const [sports, setSports] = useState([]);
    // console.log(sports);
    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])

    return (
        <div>
            <div className='container'>
                <div className='sports-container'>
                    {
                        sports.map(sport => <Sport
                            key={sport.id}
                            sport={sport}
                        ></Sport>)
                    }
                </div>
                <div className='cart-container'>
                    <p>card</p>
                </div>
            </div>

        </div>
    );
};

export default Sports;