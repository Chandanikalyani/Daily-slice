import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const PlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState(1);
  const [reservationSuccess, setReservationSuccess] = useState(null);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/places/${id}`);
        setPlace(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  const handleReserve = async (e) => {
    e.preventDefault();

    const date = new Date().toISOString().split('T')[0];

    // Validation
    if (!email || !contactNumber || !time || !duration) {
      setValidationError('All fields are required.');
      return;
    }

    if (contactNumber.length !== 10) {
      setValidationError('Contact number must be exactly 10 digits.');
      return;
    }

    if (duration < 1 || duration > 5) {
      setValidationError('Duration must be between 1 and 5 hours.');
      return;
    }

    setValidationError('');

    try {
      const response = await axios.post('http://localhost:4000/api/reservations', {
        email,
        contactNumber,
        place: place.place_no,
        placeId: place._id,
        date,
        time,
        duration
      });

      if (response.status === 201) {
        setReservationSuccess(true);
        // Clear form fields
        setEmail('');
        setContactNumber('');
        setTime('');
        setDuration(1);
      }
    } catch (error) {
      setError(error.message);
      setReservationSuccess(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const styles = {
    container: {
      marginTop: '50px',
      color: 'white',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    title: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '20px',
    },
    badge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      padding: '10px',
      fontSize: '1rem',
      backgroundColor: place.availability === 'Available' ? 'green' : 'red',
      color: 'white',
    },
    carouselItem: {
      display: 'block',
      margin: '0 auto',
    },
    description: {
      marginTop: '30px',
    },
    reserveButton: {
      display: 'block',
      marginTop: '20px',
    },
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="container" style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{`Place ${place.place_no}`}</h1>
        <span style={styles.badge}>
          {place.availability === 'Available' ? 'Available' : 'Not Available'}
        </span>
      </div>
      {place.images.length > 0 ? (
        <Carousel>
          {place.images.slice(0, 5).map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block"
                src={`http://localhost:4000${image}`}
                alt={`Slide ${index}`}
                style={styles.carouselItem}
                width={700}
                height={400}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No images available</p>
      )}
      <div style={styles.description}>
        <h2>Description</h2>
        <p>{place.description}</p>
        <h3>Details</h3>
        <ul>
          <li>Number of Tables: {place.number_of_tables}</li>
          <li>Number of Chairs: {place.number_of_chairs}</li>
          <li>Type: {place.type}</li>
        </ul>
        {place.availability === 'Available' && (
          <Form onSubmit={handleReserve}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={today}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDuration">
              <Form.Label>Duration (hours)</Form.Label>
              <Form.Control
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                min="1"
                max="5"
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={styles.reserveButton}>
              Reserve
            </Button>
            {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
          </Form>
        )}
        {reservationSuccess === true && <p>Reservation created successfully!</p>&& window.location.reload()}
        {reservationSuccess === false && <p>Failed to create reservation. Please try again.</p>}
      </div>
    </div>
  );
};

export default PlaceDetails;
