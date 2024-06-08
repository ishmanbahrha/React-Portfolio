import '../App.css';
import RockPaperScissors from '../assets/RockPaperScissors.png';
import Tarot from '../assets/Tarot.png';

function Example () {
    return (
      <div className = "container">

      <div style = {{display: 'flex'}}>
        

        <div className = "Card">
          <p>Rock Paper Scissors</p>
          <img src = {RockPaperScissors} className = "CardImage"></img>
          <a href = "https://github.com/ishmanbahrha/Rock-Paper-Scissors" target = "_blank">
            <button className = "GitButton">GitHub</button>
          </a>
        </div>

        <div className = "Card">
          <p>Meteorite Landings</p>
          <p style={{textAlign:"left"}}>
            <ul>
              <li>Python</li>
              <li>Seaborn</li>
              <li>Data Visualization</li>
            </ul>
          </p>

          <a href = "https://github.com/ishmanbahrha/Meteorite-Landings" target = "_blank">
            <button className = "GitButton">GitHub</button>
          </a>
        </div>

        <div className = "Card">
          <p>Tarot</p>
          <img src = {Tarot} className = "CardImage"></img>
          <a href = "https://github.com/ishmanbahrha/Tarot" target = "_blank">
            <button className = "GitButton">GitHub</button>
          </a>
        </div>

        <span className = "title" style ={{right:"0.8em", marginTop:"2em"}}>Projects<span className = "dot"></span></span>
        <div className = "overlayText animationRL" style = {{marginTop:"0.3em"}}>Pro</div>
      </div>

      </div>
    );
}

export default Example;