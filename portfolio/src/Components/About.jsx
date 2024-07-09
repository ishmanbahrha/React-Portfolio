import '../App.css';
import Me from '../assets/Me.png';

function Example() {   
    return (
        <div>
            <h1 className = 'Header'>Ishman Bahrha</h1>
            <h2 className = 'Title'>Developer | Designer</h2>
            <p className = 'About'>Software Engineer with 3 years of industry experience. </p>

            <div className = "AvatarBg">
                <img src = {Me} className = "Avatar"></img>
            </div>
        </div>
    );
}

export default Example;