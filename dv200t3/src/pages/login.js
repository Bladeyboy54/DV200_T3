import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post("http://localhost:5001/api/users", formData);

      const { token } = response.data;

      localStorage.setItem("token", token);

      navigate.push("/checkout"); 
    } catch (error) {
      console.error("Login error:", error);

    }
  };

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="6" className="mx-auto">
          <form onSubmit={handleSubmit}>
            <MDBInput
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <MDBInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <MDBBtn color="primary" type="submit">
              Login
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
