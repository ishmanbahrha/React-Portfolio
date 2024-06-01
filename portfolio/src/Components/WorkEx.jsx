import '../App.css';

function Example () {
    return (
        <div className = "container">
        <span className = "title" style ={{marginLeft:"23%"}}>Work Experience<span className = "dot"></span></span>
        
        <div className = "Work">
        <div className = "overlayText animationLR">Work Ex</div>
            <p> Systems Engineer | Tata Consultancy Services </p>
            <p> September 2021 - Present </p>
        </div>
        <p className = "workSummary">
           Worked under multiple teams - Backend Development, Testing, Simulation as a software engineer for General Motors.<br/>
           Currently working with the Development team - Python being the primary technology that I work with.<br/>
        </p>
        </div>
    );
}

export default Example;