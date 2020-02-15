import { useState } from 'react';

const useDarkMode = () => {
      const[darkMode, setDarkMode]= useState(false);
     const onChange = () => {
        if(darkMode) {
            document.body.classList.add('dark-mode');
            
      } else {
            document.body.classList.remove('dark-mode');
            
      }
        setDarkMode(!darkMode)
     }
      

  return[darkMode, onChange]
};
export default useDarkMode