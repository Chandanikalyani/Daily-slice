import React, { useState } from 'react';

const items = {
  pizza: [
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    { name: 'Cheese Pizza Medium', description: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.', oldPrice: '$2.00', newPrice: 'Rs.1.00', imageUrl: 'http://localhost:4000/public/placeImages/defaultPlace.jpg' },
    // Add more pizza items here
  ],
  pasta: [
    { name: 'Lamb Ragù', description: 'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.', oldPrice: '$12.00', newPrice: 'Rs.11.00', imageUrl: 'path/to/pasta-image.jpg' },
    { name: 'Lamb Ragù', description: 'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.', oldPrice: '$12.00', newPrice: 'Rs.11.00', imageUrl: 'path/to/pasta-image.jpg' },
    { name: 'Lamb Ragù', description: 'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.', oldPrice: '$12.00', newPrice: 'Rs.11.00', imageUrl: 'path/to/pasta-image.jpg' },
    { name: 'Lamb Ragù', description: 'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.', oldPrice: '$12.00', newPrice: 'Rs.11.00', imageUrl: 'path/to/pasta-image.jpg' },
    { name: 'Lamb Ragù', description: 'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.', oldPrice: '$12.00', newPrice: 'Rs.11.00', imageUrl: 'path/to/pasta-image.jpg' },
    { name: 'Lamb Ragù', description: 'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.', oldPrice: '$12.00', newPrice: 'Rs.11.00', imageUrl: 'path/to/pasta-image.jpg' },
    // Add more pasta items here
  ],
  drinks: [
    { name: 'Margarita', description: 'Tequila, lime juice, triple sec, salt.', oldPrice: '$8.00', newPrice: 'Rs.7.00', imageUrl: 'path/to/drink-image.jpg' },
    { name: 'Margarita', description: 'Tequila, lime juice, triple sec, salt.', oldPrice: '$8.00', newPrice: 'Rs.7.00', imageUrl: 'path/to/drink-image.jpg' },
    { name: 'Margarita', description: 'Tequila, lime juice, triple sec, salt.', oldPrice: '$8.00', newPrice: 'Rs.7.00', imageUrl: 'path/to/drink-image.jpg' },
    { name: 'Margarita', description: 'Tequila, lime juice, triple sec, salt.', oldPrice: '$8.00', newPrice: 'Rs.7.00', imageUrl: 'path/to/drink-image.jpg' },
    { name: 'Margarita', description: 'Tequila, lime juice, triple sec, salt.', oldPrice: '$8.00', newPrice: 'Rs.7.00', imageUrl: 'path/to/drink-image.jpg' },
    { name: 'Margarita', description: 'Tequila, lime juice, triple sec, salt.', oldPrice: '$8.00', newPrice: 'Rs.7.00', imageUrl: 'path/to/drink-image.jpg' },
    // Add more drinks items here
  ]
};

const MenuCard = ({ item }) => (
  <div style={styles.card}>
    <img src={item.imageUrl} alt={item.name} style={styles.image} />
    <h2 style={styles.title}>{item.name}</h2>
    <p style={styles.description}>{item.description}</p>
    <div style={styles.price}>
      
      <span style={styles.newPrice}>{item.newPrice}</span>
    </div>
    <button style={styles.button}>See more</button>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('pizza');

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  const renderItems = () => {
    return items[activeSection].map((item, index) => (
      <div style={styles.cardWrapper} key={index}>
        <MenuCard item={item} />
      </div>
    ));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.sectionHeader}>{activeSection}</h1>
      <div style={styles.menu}>
        <ul style={styles.menuList}>
          {Object.keys(items).map((section, index) => (
            <li key={index}>
              <button
                style={styles.menuLink}
                onClick={() => handleMenuClick(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.content}>
        {renderItems()}
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menu: {
    marginBottom: '20px',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
  },
  menuLink: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '25px',
    marginRight: '20px',
    textTransform: 'capitalize',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardWrapper: {
    flex: '0 0 30%',
    margin: '10px',
  },
  card: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '200px', // Set a fixed height for the images
    objectFit: 'cover', // Ensure images maintain aspect ratio and cover the container
  },
  title: {
    margin: '10px 0',
  },
  description: {
    margin: '10px 0',
  },
  price: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',
  },
  oldPrice: {
    textDecoration: 'line-through',
    color: 'red',
    marginRight: '10px',
  },
  newPrice: {
    color: 'green',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  sectionHeader: {
    fontSize: '30px',
    marginBottom: '20px',
    color: 'white',
    textTransform: 'capitalize',

  },
};
