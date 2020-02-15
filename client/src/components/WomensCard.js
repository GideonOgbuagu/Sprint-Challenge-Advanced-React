import React from "react";
import "./WomensCard.css";


const WomensCard = props => {
  console.log(props);
  return (
    <div className='women-card'>
      <p>Name: <b>{props.women.name}</b> </p>
      <p>Country: <b>{props.women.country}</b></p>
      <p>Number of Searches: <b>{props.women.searches}</b></p>
    </div>
  );
};

export default WomensCard;
