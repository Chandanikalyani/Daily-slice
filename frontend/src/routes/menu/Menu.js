import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MenuCard = ({ item }) => (
  <div style={styles.card}>
    <img src={`http://localhost:4000${item.image}`} alt={item.name} style={styles.image} />
    <h2 style={styles.title}>{item.name}</h2>
    <p style={styles.description}>
      {item.description.length > 5 ? `${item.description.substring(0, 20)}...` : item.description}
    </p>
    <div style={styles.price}>
      <span style={styles.newPrice}>Rs.{item.price}.00</span>
    </div>
    <button style={styles.button}>See more</button>
  </div>
);


const App = () => {
  const [items, setItems] = useState({ pizza: [], pasta: [], drinks: [] });
  const [activeSection, setActiveSection] = useState('pizza');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/items');
        const fetchedItems = response.data;

        const categorizedItems = {
          pizza: fetchedItems.filter(item => item.type === 'Pizza'),
          pasta: fetchedItems.filter(item => item.type === 'Pasta'),
          drinks: fetchedItems.filter(item => item.type === 'Drinks'),
        };

        setItems(categorizedItems);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

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
        {loading ? <p>Loading...</p> : renderItems()}
      </div>
    </div>
  );
};

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
