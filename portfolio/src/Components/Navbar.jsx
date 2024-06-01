import React, { useState } from 'react';
import '../App.css';
import About from './About';
import Contact from './Contact';
import WorkEx from './WorkEx';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Education from './Education';

function BasicExample() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2">
            <nav id="navbar-example2" className="navbar fixed-top bg-light px-3" style={{backgroundColor: "rgba(214, 214, 214, 0.85)"}}>
                <a className="navbar-brand" href="#">Home</a>
                <ul className="nav nav-pills">

                    <li className="nav-item">
                    <a className="nav-link navText" href="#scrollspyHeading1">About</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link navText" href="#scrollspyHeading2">Contact</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link navText" href="#scrollspyHeading3">Work Experience</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link navText" href="#scrollspyHeading5">Skills</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link navText" href="#scrollspyHeading7">Projects</a>
                    </li>

                    <li className="nav-item dropdown" style = {{marginRight : '50px'}}>
                        <a className="nav-link dropdown-toggle navText" style ={{cursor:'pointer'}} onClick={toggleDropdown} aria-expanded={dropdownOpen ? "true" : "false"}>Dropdown</a>
                        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} >
                            {/* <li><a className="dropdown-item" href="#scrollspyHeading1">About</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading2">Contact</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading3">Work Experience</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading5">Skills</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading6">Projects</a></li> */}
                            <li><a className="dropdown-item dropdownLi" href="#scrollspyHeading4">Resume</a></li>
                            <li><a className="dropdown-item dropdownLi" href="#scrollspyHeading6">Education</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="90" className="scrollspy-example" tabIndex="0">
                <h4 id="scrollspyHeading1"> <About /> </h4>
                <h4 id="scrollspyHeading2"> <Contact /> </h4>
                <h4 id="scrollspyHeading3"> <WorkEx /> </h4>
                <h4 id="scrollspyHeading4"> <Resume /> </h4>
                <h4 id="scrollspyHeading5"> <Skills /> </h4>
                <h4 id="scrollspyHeading6"> <Education /> </h4>
                <h4 id="scrollspyHeading7"> <Projects /> </h4>
                
                

            </div>
        </div>
    );
}

export default BasicExample;
