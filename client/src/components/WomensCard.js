import React from 'react';
import './WomensCard.css';

const WomensCard = (props) => {
    console.log(props)
        return (
            <div className="women-card">
                <p>Name: {props.women.name} </p>
                <p>Country: {props.women.country}</p>
                <p>Searches on Google: {props.women.searches}</p>
            </div>
        )
    
}

export default WomensCard;