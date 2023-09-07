import React from "react";
import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import axios from "axios";

function Products() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/graphics")
      .then((response) => setProductsData(response.data))
      .catch((error) => console.error("Error fetching graphics data", error));
  }, []);

  const cardHeight = "520px";
  const cardMargin = "20px";

  return (
    <MDBContainer>
      <br/>
      <h1 className="text-light">Products</h1>
      <br/>
      <MDBRow>
        {productsData.map((product, index) => (
          <MDBCol key={index} sm="3" style={{ marginBottom: cardMargin}}>
            <MDBCard style={{ height: cardHeight }}>
              <MDBCardImage
                src={product.imageUrl}
                alt={product.name}
                style={{ objectFit: "cover", margin: "10px" }}
              />
              <MDBCardBody
                style={{ position: "absolute", bottom: "0", width: "100%" }}
              >
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardText>{product.type}</MDBCardText>
                <MDBCardText style={{ marginBottom: "20px" }}>
                  R{product.price.toFixed(2)}
                </MDBCardText>
                <MDBBtn color="primary">Buy Now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );

}
export default Products;
