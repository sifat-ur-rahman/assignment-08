import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Sport from '../Sports-card/Sport';
import './Sports.css'

const Sports = () => {
    const [sports, setSports] = useState([]);
    const [cart, setCart] = useState([])

    // console.log(cart.length);
    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    const handleAddToCart = (sport) => {
        // console.log(sport);
        const newCart = [...cart, sport]
        setCart(newCart)

    }
    return (
        <div>
            <div className='container'>
                <div className='sports-container'>
                    {
                        sports.map(sport => <Sport
                            key={sport.id}
                            sport={sport}
                            handleAddToCart={handleAddToCart}
                        ></Sport>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Sports;