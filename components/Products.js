import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const products = [
  { name: 'Americano', regularPrice: 12.00, discountedPrice: 15.00, rating: 4, imageUrl: 'https://bigcupofcoffee.com/wp-content/uploads/2023/05/americano-coffee.jpg' },
  { name: 'Expresso', regularPrice: 12.00, discountedPrice: 15.00, rating: 5, imageUrl: 'https://i.ibb.co/1KNgKZF/1.jpg' },
  { name: 'Filter Coffee', regularPrice: 12.00, discountedPrice: 15.00, rating: 3, imageUrl: 'https://i.ibb.co/nP5mnSC/2.jpg' },
  { name: 'Hot Chocolate Coffee', regularPrice: 12.00, discountedPrice: 15.00, rating: 4, imageUrl: 'https://i.ibb.co/G3LWHRH/3.jpg' },
  { name: 'Cappacuino', regularPrice: 12.00, discountedPrice: 15.00, rating: 5, imageUrl: 'https://i.ibb.co/0jRYzy8/4.jpg' },
  { name: 'Mocha', regularPrice: 12.00, discountedPrice: 15.00, rating: 5, imageUrl: 'https://i.ibb.co/8drMNsB/6.jpg' },
  { name: 'Affagota', regularPrice: 11.00, discountedPrice: 15.00, rating: 3, imageUrl: '  https://i.ibb.co/bz6V0ck/7.jpg'},
  { name: 'Flat White', regularPrice: 11.00, discountedPrice: 15.00, rating: 3, imageUrl: 'https://i.ibb.co/YjSQtQg/8.jpg'},
  { name: 'Cup Cake', regularPrice: 10.00, discountedPrice: 14.00, rating: 4, imageUrl: 'https://i.ibb.co/6mhv9d3/9.jpg'},
  { name: 'Doughnut', regularPrice: 9.00, discountedPrice: 10.00, rating: 4, imageUrl: 'https://i.ibb.co/b3q13yx/10.jpg'},
  { name: 'Doughnut', regularPrice: 9.00, discountedPrice: 10.00, rating: 4, imageUrl: 'https://i.ibb.co/8Nz3H2M/11.jpg'},
  { name: 'Doughnut', regularPrice: 9.00, discountedPrice: 10.00, rating: 4, imageUrl: 'https://i.ibb.co/pn4Z6SF/12.jpg'},
];

const ProductCard = ({ name, regularPrice, discountedPrice, rating, imageUrl }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <Col md={3} className="mb-6">
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <div className="price">
              <span className="regular">${regularPrice.toFixed(2)}</span>
              <span className="discounted">${discountedPrice.toFixed(2)}</span>
            </div>
            <div className="ratings">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={(hoverRating || rating) > index ? 'gold' : 'gray'}
                  onMouseEnter={() => setHoverRating(index + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              ))}
            </div>
            <Button variant="primary" className="mt-2">
              <FaShoppingCart /> Add to Cart
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Products = () => {
  return (
    <div>
      <h1 className="mt-4 mb-4">Our Products</h1>
      <Row>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Row>
    </div>
  );
};

export default Products;
