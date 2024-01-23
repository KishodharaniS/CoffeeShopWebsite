// HotDrinksMenu.js
import React from 'react';
import Card from 'react-bootstrap';

const HotDrinksMenu = () => {
  const hotDrinksItems = [
    { title: 'Hot Chocolate', price: '$4.50', description: 'Rich and indulgent hot chocolate.' },
    { title: 'Cappuccino', price: '$3.80', description: 'Espresso with equal parts steamed milk and foam.' },
    { title: 'Chai Latte', price: '$4.00', description: 'Spiced tea with steamed milk.' },
    // Add more hot drinks items as needed
  ];

  return (
    <div>
      <h2>Hot Drinks Menu</h2>
      {hotDrinksItems.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default HotDrinksMenu;
