import React from 'react';
import './card.css';
const Card = props => {
    return(
    <div className="card" style={{width: '18rem'}}>
        <img src="something" className="card-img-top" alt="alt"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
        </div>
    </div>
    )
}

export default Card;