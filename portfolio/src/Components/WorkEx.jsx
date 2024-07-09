import '../App.css';

function Example () {
    return (
        <div className = "container">
        <span className = "title" style ={{marginLeft:"23%"}}>Work Experience<span className = "dot"></span></span>
        
        <div className = "Work">
        <div className = "overlayText animationLR">Work Ex</div>
            <p> Systems Engineer | Tata Consultancy Services </p>
            <p> <em>September 2021 - Present</em> </p>
        </div>
        <p className = "workSummary">
           Software Engineer at General Motors (under TCS).
           In the past 3 years I've worked under different teams - Backend development, Simulation, Validation and Testing on an extensive list of projects.<br/>
           Currently working as a Python developer with the Cyber Security Team.<br/>
        </p>
        </div>
    );
}

export default Example;