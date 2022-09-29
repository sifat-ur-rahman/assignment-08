import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className=''>
            <div className='owner-info'>
                <h4>Sifat Ur Rahman</h4>
                <p>khulna, Bangladesh</p>
            </div>
            <div className='details'>
                <div>
                    <h5>57 kg</h5>
                    <p>Weight</p>
                </div>
                <div>
                    <h5>5.5</h5>
                    <p>Height</p>
                </div>
                <div>
                    <h5>23 yrs</h5>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h3>Add A Break</h3>
                <div className='break'>
                    <button className='break-btn'>10m</button>
                    <button className='break-btn'>15m</button>
                    <button className='break-btn'>20m</button>
                    <button className='break-btn'>25m</button>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <p>Exercise time: 0 min</p>
                <p>Break time: 0 min</p>
            </div>
            <div>
                <button className='completed-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;