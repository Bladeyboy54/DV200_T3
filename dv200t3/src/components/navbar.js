import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn
} from "mdb-react-ui-kit";
import Logo from "./logomain.svg";
import { Link } from 'react-router-dom';

function BasicNav() {

  const navbarStyle = {
    display: "flex",
    alignItems: "center"
  };

  return (
    <MDBNavbar expand="lg" className="bg-body-tertiary">
      <div className="container">
        <MDBNavbarBrand href="/">
          <img
            alt=""
            src={Logo}
            width="60"
            className="d-inline-block align-top"
          />{" "}
          Tiger Technologies
        </MDBNavbarBrand>
        <MDBNavbarNav style={navbarStyle}  navbarScroll>
          <MDBNavbarItem>
            <Link to="/products" className="nav-link">Products</Link>
          </MDBNavbarItem>
        </MDBNavbarNav>
        <MDBNavbarNav className="ms-auto" style={{ position: "relative", right: "0" }}>
          <MDBNavbarItem style={{ position: "absolute",right: "100px"}}>
            <Link to="#">
              <span className="text-dark">Hello, User</span>
            </Link>
          </MDBNavbarItem>
          <MDBNavbarItem style={{ position: "absolute",right: "0"}}>
            <Link to="/cart">
              <MDBBtn variant="outline-light">Cart</MDBBtn>
            </Link>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </div>
    </MDBNavbar>
  );
}

export default BasicNav;
