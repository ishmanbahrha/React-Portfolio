import '../App.css';
import Phone from '../assets/Phone.png';
import React, { useState } from 'react';

function Example() {
    const [isOpen, setIsOpen] = useState(false);
   
    return (
      <span>
      <button className = 'contactButtons' onClick={() => setIsOpen(true)}> <img src={Phone} className='Icons'/> </button>

      {isOpen && (
        <>
          {/* Overlay element for dim backgroun on opening pop up */}
          <div className="overlay" onClick={() => setIsOpen(false)}></div>

          <div className="callPopup">
            <span>
              +91-8305852911
              <button className="close" onClick={() => setIsOpen(false)}>
                x
              </button>
            </span>
          </div>
        </>
      )}
    </span>

    );
  }
   
  export default Example;
