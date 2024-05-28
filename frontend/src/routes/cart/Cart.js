import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Cart = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Reservation";

    const fetchPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/places'); // Adjust the endpoint accordingly
        setPlaces(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-10">
      <div className="row">
        <div className="d-flex flex-wrap justify-content-center">
          {places.map((place) => (
            <div className="m-3" key={place._id}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={place.images.length > 0 ? `http://localhost:4000${place.images[0]}` : "http://localhost:4000/public/placeImages/defaultPlace.jpg"}
                  width={500}
                  height={300}
                />
                <Card.Body>
                  <Card.Title>{`Place ${place.place_no}`}</Card.Title>
                  <Card.Text>
                    {place.description}
                  </Card.Text>
                  <Button variant="primary">See More..</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
