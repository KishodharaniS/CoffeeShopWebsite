import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Carouselimage from './Carouselimage';
import CardsImage from './CardsImage';
function Home() {
  return (
    <div className="Home">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">COFFEE POINT
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to ='/homepage'>
            <Nav.Link href="#home">HomePage</Nav.Link></Link>
            <Link to='/menu'>
            <Nav.Link href="#menu">Menu</Nav.Link></Link>
            <Link to='products'>
            <Nav.Link href="#Products">Products</Nav.Link></Link>
            <Link to='/about'>
            <Nav.Link href="#about">About</Nav.Link></Link>
            <Link to='/contact'>
            <Nav.Link href="#Contact">Contact</Nav.Link></Link>
            <Link to='/loggin'>
            <Nav.Link href="#loggin">Login</Nav.Link></Link>
            
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carouselimage/>
   <CardsImage/>
    </div>
  );
}

export default Home;