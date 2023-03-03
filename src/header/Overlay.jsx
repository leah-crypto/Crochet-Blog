import React from 'react';
import skeins from '../assets/skeins.jpg'


function Overlay() {
  return (
    <div className="image-overlay">
      <div className="overlay">
      <img src={skeins} className="headerImg"/>
      </div>
     
      
    </div>
  );
}

export default Overlay;