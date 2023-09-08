import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("cart")) || [];

    const fetchProductDetails = async () => {
      const productDetails = [];

      for (const cartItem of cartData) {
        try {
          const response = await axios.get(
            `http://localhost:5001/api/graphics/${cartItem._id}`
          );

          const product = response.data;

          const total = (product.price * cartItem.quantity).toFixed(2);

          productDetails.push({
            product,
            quantity: cartItem.quantity,
            total,
          });
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }

      setCart(productDetails);
    };

    fetchProductDetails();
  }, []);

  const handleSubmitPayment = () => {
    const shouldProceed = window.confirm(
      "Are you sure you want to submit your payment?"
    );

    if (shouldProceed) {
      alert("Payment submitted successfully!");
      // navigate.push("/");
      sessionStorage.clear();
    } else {
      alert("Payment canceled.");
    }
  };

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol
          md="6"
          className="mx-auto"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <MDBCard>
            <MDBCardHeader>
              <h3>Checkout</h3>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBInput
                  type="text"
                  label="Cardholder Name"
                  name="cardholderName"
                  className="mb-4"
                />
                <MDBInput
                  type="text"
                  label="Card Number"
                  name="cardNumber"
                  className="mb-4"
                />
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      type="date"
                      label="Expiry Date"
                      name="expiryDate"
                      className="mb-4"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      type="text"
                      label="CVV"
                      name="cvv"
                      className="mb-4"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn color="primary" onClick={handleSubmitPayment}>
                  Submit Payment
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol
          md="6"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {cart.length > 0 ? (
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product.name}</td>
                    <td>R{item.product.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>R{item.total}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          ) : (
            <p>Your cart is empty.</p>
          )}
          {cart.length > 0 && (
            <div className="mt-4">
              <h3>
                Total Price: R
                {cart
                  .reduce((total, item) => total + parseFloat(item.total), 0)
                  .toFixed(2)}
              </h3>
            </div>
          )}
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol
          md="12"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <Link to="/" className="nav-link">
            <MDBBtn variant="outline-light">Return Home</MDBBtn>
          </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Checkout;
