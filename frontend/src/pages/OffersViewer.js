import React, { useState, useEffect } from 'react';

function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/offers')
      .then(response => response.json())
      .then(data => setOffers(data))
      .catch(error => console.error('Error fetching offers:', error));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px', color: "white" }}>
          <h1>Get Big Offers with Our Pizza Shop</h1>
        </div>
        <div className="cards-container">
          {offers.map((offer, index) => (
            <div key={index} style={{ backgroundColor: '#fff', borderRadius: '50px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', marginBottom: '20px', position: 'relative',borderColor:"yellow" }}>
              <div style={{ fontSize: '80px', color: 'red', position: 'absolute', top: '20px', right: '20px', marginTop: '10px', marginRight: '50px' }}>{offer.off}</div>
              <div style={{ fontSize: '36px', color: 'red', position: 'absolute', top: '0px', right: '20px', marginRight: '75%' }}>
                <img src='/images/offer-gif-4.gif' width={170} height={150} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '20px' ,width:""}}>
                <div style={{ fontSize: '30px', color: 'black', marginBottom: '10px', fontWeight: "bold" }}>{offer.item}</div>
                <div style={{ color: 'red', marginBottom: '10px' }}>Rs.{offer.describe}.00</div>
                <div style={{ color: '#888' }}>Expires on: {offer.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
