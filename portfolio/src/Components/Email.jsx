import '../App.css';
import Email from '../assets/Email.png';
import React, { useState } from 'react';

function Example() {
    const [isOpen, setIsOpen] = useState(false);
   
    return (
      <span>
      <button className = 'contactButtons' onClick={() => setIsOpen(true)}> <img src={Email} className='Icons'/> </button>

      {isOpen && (
        <>
          {/* Overlay element for dim backgroun on opening pop up */}
          <div className="overlay" onClick={() => setIsOpen(false)}></div>

          <div className="callPopup">
            <span>
              ishman.bahrha@gmail.com
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
