import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn
} from "mdb-react-ui-kit";
import Logo from "./logomain.svg";

function BasicNav() {

  const navbarStyle = {
    display: "flex",
    alignItems: "center"
  };

  return (
    <MDBNavbar expand="lg" className="bg-body-tertiary">
      <div className="container">
        <MDBNavbarBrand href="#home">
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
            <MDBNavbarLink to="#products">Products</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
        <MDBNavbarNav className="ms-auto" style={{paddingRight: "0"}}>
          <MDBNavbarItem >
            <MDBNavbarLink to="#">
              <span className="text-dark">Hello, User</span>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink to="/cart">
              <MDBBtn variant="outline-light">Cart</MDBBtn>
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </div>
    </MDBNavbar>
  );
}

export default BasicNav;
