import React from "react";
import { useEffect, useState } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import '../css/landing.css';

function Landing() {
  const [graphicsData, setGraphicsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/graphics")
      .then((response) => setGraphicsData(response.data))
      .catch((error) => console.error("Error fetching graphics data:", error));
  }, []);

  function shuffleAndUniqueArray(array, numItems) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[x]] = [
        shuffledArray[x],
        shuffledArray[i],
      ];
    }
    return shuffledArray.slice(0, numItems);
  }

  const shuffledGraphicsData = shuffleAndUniqueArray(graphicsData, 20);

  const newestProductsData = shuffledGraphicsData.slice(0, 10);
  const onSaleData = shuffledGraphicsData.slice(10, 21);

  function generateDiscount(price) {
    const discountFactor = 1 + Math.random() * 0.3;
    const discountedPrice = price * discountFactor;
    return discountedPrice.toFixed(2);
  }

  const cardHeight = "600px";

  return (
    <>
      <MDBCarousel showControls>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          alt="..."
          style={{ height: "400px" }}
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          alt="..."
          style={{ height: "400px" }}
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          alt="..."
          style={{ height: "400px" }}
        >
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem>
      </MDBCarousel>
      <br />
      
      <div
        style={{
          backgroundColor: "#F5F5F5",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "7px",
        }}
      >
        <div
          className="row"
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <h1>Newest Products</h1>
          {newestProductsData.slice(0, 4).map((graphic, index) => (
            <div key={index} className="col-sm-3">
              <MDBCard style={{ height: cardHeight }}>
                <MDBCardImage
                  src={graphic.imageUrl}
                  alt={graphic.name}
                  style={{ objectFit: "cover", margin: "10px" }}
                />
                <MDBCardBody
                  style={{ position: "absolute", bottom: "0", width: "100%" }}
                >
                  <MDBCardTitle>{graphic.name}</MDBCardTitle>
                  <MDBCardText>{graphic.type}</MDBCardText>
                  <MDBCardText style={{ marginBottom: "20px" }}>
                    R{graphic.price.toFixed(2)}
                  </MDBCardText>
                  <MDBBtn
                    color="primary"
                    onClick={() => navigate(`/product/${graphic._id}`)}
                  >
                    Buy Now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      </div>
      <br />
      {/* //////////////////////////////////////////////////////////////////////// */}
      <div
        style={{
          backgroundColor: "#F5F5F5",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "7px",
        }}
      >
        <div
          className="row"
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <h1>Now on Sale !!</h1>
          {onSaleData.slice(0, 4).map((graphic, index) => (
            <div key={index} className="col-sm-3">
              <MDBCard style={{ height: cardHeight }}>
                <MDBCardImage
                  src={graphic.imageUrl}
                  alt={graphic.name}
                  style={{ objectFit: "cover", margin: "10px" }}
                />
                <MDBCardBody
                  style={{ position: "absolute", bottom: "0", width: "100%" }}
                >
                  <MDBCardTitle>{graphic.name}</MDBCardTitle>
                  <MDBCardText>{graphic.type}</MDBCardText>
                  <div style={{ textDecoration: "line-through" }}>
                    Original Price: R{generateDiscount(graphic.price)}
                  </div>
                  <MDBCardText style={{ marginBottom: "20px" }}>
                    R{graphic.price.toFixed(2)}
                  </MDBCardText>
                  <MDBBtn
                    color="primary"
                    onClick={() => navigate(`/product/${graphic._id}`)}
                  >
                    Buy Now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Landing;
