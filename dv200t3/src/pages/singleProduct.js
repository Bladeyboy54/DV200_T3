import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/graphics/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError(error);
        setLoading(false);
      });
    axios
      .get("http://localhost:5001/api/graphics")
      .then((response) => {
        const shuffledProducts = response.data.sort(() => Math.random() - 0.5);
        const randomFourProducts = shuffledProducts.slice(0, 4);
        setRandomProducts(randomFourProducts);
      })
      .catch((error) => {
        console.error("Error fetching random graphics cards:", error);
      });
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const calculateTotalPrice = () => {
    return (product.price * quantity).toFixed(2);
  };

  const addToCart = () => {
    const cartItem = {
      _id: product._id,
      quantity,
    };

    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    existingCart.push(cartItem);

    sessionStorage.setItem("cart", JSON.stringify(existingCart));

    console.log(`Added ${quantity} ${product.name} to cart.`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <>
      <MDBContainer
        className="mt-5"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <MDBRow>
          <MDBCol md="6">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid"
            />
          </MDBCol>
          <MDBCol md="6">
            <h1>{product.name}</h1>
            <br/>
            <h2>{product.type}</h2>
            <br/>
            <p>{product.description}</p>
            <br/>
            <p>Price: R{product.price.toFixed(2)}</p>
            <br/>
            <p>Total Price: R{calculateTotalPrice()}</p>
            <br/>
            <MDBInput
              type="number"
              label="Quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <br/>
            <MDBBtn color="primary" onClick={addToCart}>
              Add to Cart
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
      <MDBContainer 
        className="mt-5"
        style={{
          backgroundColor: "#F5F5F5",
          padding: "20px",
          borderRadius: "10px",
        }}  
      >
        <MDBRow>
          {randomProducts.map((randomProduct, index) => (
            <MDBCol key={index} sm="3" style={{ marginBottom: "20px" }}>
              <MDBCard style={{height: "520px" }}>
                <MDBCardImage
                  src={randomProduct.imageUrl}
                  alt={randomProduct.name}
                  top
                />
                <MDBCardBody style={{ position: "absolute", bottom: "0", width: "100%" }}>
                  <MDBCardTitle>{randomProduct.name}</MDBCardTitle>
                  <MDBCardText>{randomProduct.type}</MDBCardText>
                  <MDBCardText style={{ marginBottom: "20px" }}>
                    Price: R{randomProduct.price.toFixed(2)}
                  </MDBCardText>
                  <MDBBtn 
                  color="primary"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  Buy Now
                </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default SingleProduct;
