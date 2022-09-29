import React, { useState } from 'react';
import './Cart.css'

const Cart = () => {
    const [time, setTime] = useState(0)
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
                    <button onClick={() => setTime(10)} className='break-btn'>10m</button>
                    <button onClick={() => setTime(15)} className='break-btn'>15m</button>
                    <button onClick={() => setTime(20)} className='break-btn'>20m</button>
                    <button onClick={() => setTime(25)} className='break-btn'>25m</button>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <p>Exercise time: 0 min</p>
                <p>Break time: {time} min</p>
            </div>
            <div>
                <button className='completed-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;