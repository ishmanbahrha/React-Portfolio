import '../App.css';
import RockPaperScissors from '../assets/RockPaperScissors.png';

function Example () {
    return (
      <div className = "container">

      <div style = {{display: 'flex'}}>
        

        <div className = "Card">
          <p>Rock Paper Scissors</p>
          <img src = {RockPaperScissors} className = "CardImage"></img>
          <a href = "https://github.com/ishmanbahrha/GitHub/tree/main/Rock%20Paper%20Scissors" target = "_blank">
            <button className = "GitButton">GitHub</button>
          </a>
        </div>

        <div className = "Card">
          <p>Card 2</p>
        </div>

        <div className = "Card">
          <p>Card 3</p>
        </div>

        <span className = "title" style ={{right:"0.8em", marginTop:"2em"}}>Projects<span className = "dot"></span></span>
        <div className = "overlayText animationRL" style = {{marginTop:"0.3em"}}>Pro</div>
      </div>

      </div>
    );
}

export default Example;