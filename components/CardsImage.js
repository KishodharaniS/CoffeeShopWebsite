import "./Card.css";
import CardsData from "./CardsData";

function CardsImage() {
  return (
    <div className="Card fs-3">
      <h1>Our Servies</h1>
      <div className="CardsImage">
        <CardsData
          image="https://coffee-point-react.asdesignsgalaxy.com/static/media/Service-1.f4fa8e675ad8f39378fa.png"
          heading="Selected Coffee Beans"
          
        />
        <CardsData
          image="https://coffee-point-react.asdesignsgalaxy.com/static/media/Service-2.1b8e32e5fec9c11bb85a.png"
          heading="Own Roasting"
          
        />
        <CardsData
          image="https://coffee-point-react.asdesignsgalaxy.com/static/media/Service-3.ebab83f67f1f06b06757.png"
          heading="High Quality"

        />
        <CardsData
          image="https://coffee-point-react.asdesignsgalaxy.com/static/media/Service-4.b98d537fdd4b9f0e2f43.png"
          heading="Freshly Brewed"
          
        />
        <CardsData
          image="https://coffee-point-react.asdesignsgalaxy.com/static/media/Service-5.911f32c8325f2a5e2c6e.png" 
          heading="Coffee Variety"
           
        />
      </div>
    </div>
  );
}

export default CardsImage;
