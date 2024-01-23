import Hero from "../components/Hero";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const productsData = [
  
    {
      id: 1,
      name: ' Americano',
      category: 'Coffee',
      
    },
    {
      id: 2,
      name:  'Cappuccino',
      category: 'Coffee',
      
    },
    {
      id: 3,
      name: 'Macchiato',
      category: 'Coffee',
      
    },
    {
      id: 4,
      name: ' Espresso',
      category: 'Coffee',
      
    },
    {
      id: 5,
      name:  'Instant Coffee',
      category: 'Coffee',

    },
    {
      id: 6,
      name: 'Latte',
      category: 'Coffee',
     
    },
    {
      id: 7,
      name: ' Glacier',
      category: 'Coffee',
      
    },
    {
      id: 8,
      name:  'Black Coffee',
      category: 'Coffee',

    },
    {
      id: 9,
      name: 'Mocha',
      category: 'Coffee',
      
    },
    
    {
      id: 10,
      name: ' Hot Chocolate',
      category: 'Hot Drinks',
      
    },
    {
      id: 11,
      name:  'White Chocolate',
      category: 'Hot Drinks',
     
    },
    {
      id: 12,
      name: 'Earl Grey',
      category: 'Hot Drinks',
      
    },
    {
      id: 13,
      name: 'Motcha',
      category: 'Hot Drinks',
      
    },
    {
      id: 14,
      name: 'Lemon',
      category: 'Hot Drinks',
      
    },
    {
      id: 15,
      name: 'Apple Cinnamon',
      category: 'Hot Drinks',
      
    },
    {
      id: 16,
      name: 'Flat white',
      category: 'Hot Drinks',
      
    },
    {
      id: 17,
      name: 'Irish',
      category: 'Hot Drinks',
      
    },
    {
      id: 18,
      name: 'Dippo',
      category: 'Hot Drinks',
      
    },
    {
      id: 19,
      name: 'Doughnut',
      category: 'Desserts',
      
    },
    {
      id: 20,
      name: 'Cheesecake',
      category: 'Desserts',
      
    },
    {
      id: 21,
      name: 'Brownie',
      category: 'Desserts',
      
    },
    {
      id: 22,
      name: 'Applepie',
      category: 'Desserts',
      
    },
    {
      id: 23,
      name: 'Chocolatecake',
      category: 'Desserts',
      
    },
    {
      id: 24,
      name: 'Cupcake',
      category: 'Desserts',
    },
    {
      id: 25,
      name: 'Red Velvet',
      category: 'Desserts',
     
    },
    {
      id: 26,
      name: 'Sweets',
      category: 'Desserts',
      
    },
    {
      id: 27,
      name: 'Croissant',
      category: 'Desserts',
    },
  
  ];
  export default function Product() {
    const [showCategories, setShowCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryToggle = () => {
      setShowCategories(!showCategories);
    };
  
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
      setShowCategories(false); 
    };
  
    return (
        <>
    
    <Hero
      cName="hero"
      heroImg="https://images.pexels.com/photos/143642/pexels-photo-143642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      text="Choose Your Favorite Items."
      url="/"
    
/>
        <div className='categories'>
          <Button variant="Black" onClick={handleCategoryToggle}>
          Our Menu
          </Button>
          {showCategories && (
            <div>
              <Button
                variant="outline-success"
                onClick={() => handleCategorySelect('Coffee')}
                style={{ marginRight: '10px' }}
              >
              Coffee
              </Button>
             
              <Button
              variant="outline-success"
              onClick={() => handleCategorySelect('Hot Drinks')}
              style={{ marginRight: '10px' }}
            >
          Hot Drinks
            </Button>
            <Button
              variant="outline-success"
              onClick={() => handleCategorySelect('Desserts')}
              style={{ marginRight: '10px' }}
            >
        Desserts
            </Button>
            </div>
          )}
        </div>
  
        <div className='pro'>
          <div className='heading'>
            <Row style={{
              width: '80%',
              marginLeft: '10%',
              marginTop: '45px'
            }}>
              {productsData
                .filter((product) => !selectedCategory || product.category === selectedCategory)
                .map((product) => (
                  <Col key={product.id} xs={12} sm={6} md={4}>
                    <Card style={{ width: '18rem', marginBottom: '20px' }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <div className='price'>{product.price}</div>
                         </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </>
    )
  }
  