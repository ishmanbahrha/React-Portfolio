import Carousel from 'react-bootstrap/Carousel';
import Paint from '../assets/Paint.png';
import Paint2 from '../assets/Paint2.png';

function CarouselFadeExample() {
  return (
    <div className = "container" style = {{marginTop:"45px",display:"flex"}}>

    <span className = "title">Education<span className = "dot"></span></span>
    <div className = "overlayText animationLR">Edu</div>

    <Carousel fade className = "eduCards" style = {{margin:"auto"}}>
      <Carousel.Item  className = "eduCards">
        <img className = "imageFade" src = {Paint} alt="First slide"/>
        <Carousel.Caption style = {{color:"black"}}>
          <h3>Bachelor of Technology | B.Tech</h3>
          <p>2017-2021</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  className = "eduCards">
        <img className = "imageFade" src = {Paint} alt="Second slide"/>
        <Carousel.Caption style = {{color:"black"}}>
          <h3>Electronics and Communication Engineering</h3>
          <p>CGPA - 9.02</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;