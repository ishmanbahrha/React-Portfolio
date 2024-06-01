import Resume_Ishman_Bahrha from '../assets/Resume_Ishman_Bahrha.pdf'

function Example () {
    return (
        <div className = "container">

        {/* <span className = "overlayText" style ={{marginLeft:"2em"}}>Res</span> */}
        <a href = {Resume_Ishman_Bahrha} className = "resumeDownload" download>
            Download my Resume
        </a>
        
        </div>
    );
}

export default Example;