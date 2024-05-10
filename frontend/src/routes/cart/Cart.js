import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";


const Cart = ({ cartItems, CartItem }) => {
  useEffect(() => {
    document.title = "Reservation";
  }, []);
  return (
    <div>
     <div className="contrainer mt-10">
        <div className="row ">
          <div className="d-flex flex-wrap justify-content-center">
            <div className="m-3">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="images/Table_1/73076efa62fdecfedd1e7e43665758b4.webp"
                  width={500}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="images/Table_2/a370fb8ac6013371e20e29a06adc6ca1.webp"
                  width={500}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="images/Table_3/e55d9b5be608114378f82ca3a3e2acfb.webp"
                  width={500}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="images/Table_4/199840269.jpg"
                  width={500}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="images/Table_5/199840199.jpg"
                  width={500}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="images/Table_6/fortaleza-hotel-galle-pic-21.JPEG"
                  width={500}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default Cart;
