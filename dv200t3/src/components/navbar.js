import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function BasicNav() {
  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light' style={{height: '100px'}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <MDBContainer fluid style={{height: '60px'}}>
            <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
            <MDBNavbarNav className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBContainer>
          <MDBContainer fluid style={{height: '40px', float: 'right'}}>
            <MDBInputGroup tag="form" className='d-flex mb-3'>
                <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' style={{width: '20%'}} />
                <MDBBtn outline>Search</MDBBtn>
              </MDBInputGroup>
          </MDBContainer>
        </div>
      </MDBNavbar>
    </>
  );
}

