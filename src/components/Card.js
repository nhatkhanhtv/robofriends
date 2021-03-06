import React from 'react';


const Card = (props) => {
    const {id,name,email} = props;
    return (
        <div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${name}${id}?200x200`} alt=''/>
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;