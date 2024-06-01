import '../App.css';
import Skills from '../assets/Skills.png';
import Backend from '../assets/Backend.png';
import Frontend from '../assets/Frontend.png';

import { FaPython } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

import Splatter from '../assets/Splatter.png';

function Example() {   
    return (
        <div className="container card-deck" style = {{display:'flex',marginTop:"5em"}}>

            {/* *** Column 1 *** */}
            <span className = "title">Skills
            {/* <div><img src = {Splatter} className = 'skillIcon'></img></div> */}
            <span className = "dot"></span>
            </span>
            <div className = "overlayText animationLR">Ski</div>


            {/* *** Column 2 *** */}
            <div className = "card" style = {{margin:'30px'}}>
                <img src={Backend} className="card-img-top" alt="..."/>
                <div className="card-body">
                <article className="card-text skillListing">
                    <p><FaPython /> Python</p>
                    <p><BiLogoPostgresql /> PostgreSQL</p>
                    <p><SiPandas /> Pandas</p>
                </article>
                </div>
            </div>

            {/* *** Column 3 *** */}
            <div className = "card" style = {{margin:'30px'}}>
                <img src = {Frontend} className="card-img-top" alt="..."/>
                <div className="card-body">
                <article className="card-text skillListing">
                    <p><FaHtml5 /> HTML</p>
                    <p><SiCss3 /> CSS</p>
                    <p><IoLogoJavascript /> JavaScript</p>
                    <p><RiReactjsFill /> ReactJs</p>
                    <p><FaBootstrap /> Bootstrap</p>
                </article>
                </div>
            </div>

            </div>

        
    );
}

export default Example;