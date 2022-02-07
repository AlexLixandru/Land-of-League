import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "./../assets/carousel1.jpg";
import Image2 from "./../assets/carousel2.jpg";
import Image3 from "./../assets/carousel3.jpg";

function CarouselElement() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First slide" />
        <Carousel.Caption>
          <h3>Draven</h3>
          <p>Best overall ADC</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Shaco</h3>
          <p>Best high-skilled jungler</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Diana</h3>
          <p>Best farming jungler</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselElement;
