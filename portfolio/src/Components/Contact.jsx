import '../App.css';

import Call from './Call';
import Email from './Email';

import GitHub from '../assets/GitHub.png';
import LinkedIn from '../assets/LinkedIn.png';

function Example() {   
    return (
        <div className = "Contact">

        <Email/>

        <a href = "https://www.linkedin.com/in/ishmanbahrha" target = "_blank">
          <button className = 'contactButtons'> <img src = {LinkedIn} className = 'Icons'/> </button>
        </a>

        <Call/>

        <a href = "https://github.com/ishmanbahrha" target = "_blank">
          <button className = 'contactButtons'> <img src = {GitHub} className = 'Icons'/></button>
        </a>
      </div>
    );
}

export default Example;