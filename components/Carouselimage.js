import Carousel  from 'react-bootstrap/Carousel';
function Carouselimage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img

          className="d-block w-500"
          src="https://img.freepik.com/premium-photo/coffee-cup-sits-table-coffee-shop_865967-26031.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>EXPRESSO</h3>
          <p>Rise and grind, it's coffee time!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_488/stock%2FGettyImages-922177678" // Replace with your image URL
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Another day, another cup of coffee.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://b.zmtcdn.com/data/collections/54a38c33ce8c62c7754e3f0b2fa6eb60_1696100571.png" // Replace with your image URL
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Just brewed happiness in a cup.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carouselimage;