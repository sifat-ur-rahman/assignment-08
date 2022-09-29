import React from 'react';
import './Sport.css'

const Sport = (props) => {
    // console.log(props);
    const { age, img, name, time } = props.sport
    console.log(name);
    return (
        <div>
            <div className='sport-cart'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>For Age : {age}</p>
                <p>Time required : {time} min</p>
                <button className='btn-sport'>Add to list</button>
            </div>


        </div>
    );
};

export default Sport;