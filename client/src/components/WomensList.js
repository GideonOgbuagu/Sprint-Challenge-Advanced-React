import React from "react";
import WomensCard from './WomensCard';
import './WomensList.css';
import useDarkMode from './hooks/useDarkMode';

const WomensList = (props) => {
    const[darkMode, setDarkMode]= useDarkMode();
  return (
    <div>
      <div className='dark-mode__toggle'>
        <div
          onClick={setDarkMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
      <div className='women-container'>
        {props.women.map(item => (
          <WomensCard key={item.id} women={item} />
        ))}
      </div>
    </div>
  );
};

export default WomensList;
