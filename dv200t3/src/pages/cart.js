import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

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

  const handleRemoveItem = (productId) => {
    // Remove the item from the cart based on the product id
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    setCart(updatedCart);

    // Update sessionStorage with the updated cart
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.total),
    0
  );

  // Store the total price in session storage
  sessionStorage.setItem("cartTotalPrice", totalPrice.toFixed(2));

  return (
    <MDBContainer
      className="mt-5"
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 className="mb-4">Cart</h1>
      {cart.length > 0 ? (
        <MDBTable bordered>
          <MDBTableHead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.product.name}</td>
                <td>R{item.product.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>R{item.total}</td>
                <td>
                  <MDBBtn
                    color="danger"
                    onClick={() => handleRemoveItem(item.product._id)}
                  >
                    Remove
                  </MDBBtn>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <div className="text-end mt-4">
          <p>
            Total Price: R
            {cart
              .reduce((total, item) => total + parseFloat(item.total), 0)
              .toFixed(2)}
          </p>
          <Link to="/checkout">
            <MDBBtn color="primary">Checkout</MDBBtn>
          </Link>
        </div>
      )}
    </MDBContainer>
  );
};

export default Cart;
