import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";

function Admin() {
  const [graphicsData, setGraphicsData] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    stock: "",
    image: "",
    description: "",
    discount: "",
  });

  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [editingItemId, setEditingItemId] = useState(null); // Track edited item's ID

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/graphics")
      .then((response) => setGraphicsData(response.data))
      .catch((error) => console.error("Error fetching graphics data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, type, price, stock, imageUrl, description, discount } =
      formData;
    const requestData = {
      name,
      type,
      price,
      stock,
      imageUrl,
      description,
      discount,
    };

    if (isEditing && editingItemId) {
      // Handle update if in edit mode
      axios
        .put(`http://localhost:5001/api/graphics/${editingItemId}`, requestData)
        .then((response) => {
          // Update the graphics data with the updated card
          setGraphicsData((prevData) =>
            prevData.map((item) =>
              item._id === editingItemId ? response.data : item
            )
          );

          // Reset edit mode and clear formData
          setIsEditing(false);
          setEditingItemId(null);
          setFormData({
            name: "",
            type: "",
            price: "",
            stock: "",
            imageUrl: "",
            description: "",
            discount: "",
          });
        })
        .catch((error) =>
          console.error("Error updating graphics card:", error)
        );
    } else {
      // Handle create if not in edit mode
      axios
        .post("http://localhost:5001/api/graphics", requestData)
        .then((response) => {
          setGraphicsData((prevData) => [...prevData, response.data]);
          setFormData({
            name: "",
            type: "",
            price: "",
            stock: "",
            imageUrl: "",
            description: "",
            discount: "",
          });
        })
        .catch((error) =>
          console.error("Error creating graphics card:", error)
        );
    }
  };

  const handleEdit = (item) => {
    // Set formData and edit mode when clicking Edit button
    setFormData({
      name: item.name,
      type: item.type,
      price: item.price,
      stock: item.stock,
      imageUrl: item.imageUrl,
      description: item.description,
      discount: item.discount,
    });
    setIsEditing(true);
    setEditingItemId(item._id);
  };

  const handleCancelEdit = () => {
    // Cancel editing and reset form data
    setIsEditing(false);
    setEditingItemId(null);
    setFormData({
      name: "",
      type: "",
      price: "",
      stock: "",
      imageUrl: "",
      description: "",
      discount: "",
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/graphics/${id}`)
      .then(() => {
        // Remove the deleted item from graphicsData
        setGraphicsData((prevData) =>
          prevData.filter((item) => item._id !== id)
        );
      })
      .catch((error) => console.error("Error deleting graphics card:", error));
  };

  return (
    <MDBContainer className="my-5">
      <MDBContainer
        style={{
          backgroundColor: "#FFFFFF",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <MDBRow className="mb-3">
            <MDBCol md="3">
              <MDBInput
                type="text"
                label="Name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </MDBCol>
            <MDBCol md="3">
              <MDBInput
                type="text"
                label="Type"
                name="type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
            </MDBCol>
            <MDBCol md="2">
              <MDBInput
                type="number"
                label="Price"
                name="price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </MDBCol>
            <MDBCol md="2">
              <MDBInput
                type="number"
                label="Stock"
                name="stock"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
            </MDBCol>
            <MDBCol md="2">
              <MDBInput
                type="text"
                label="Image URL"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
              />
            </MDBCol>
            <MDBCol md="2" style={{ marginTop: "10px" }}>
              <MDBInput
                type="text"
                label="Description"
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </MDBCol>
            <MDBCol md="2" style={{ marginTop: "10px" }}>
              <MDBInput
                type="number"
                label="Discount"
                name="discount"
                value={formData.discount}
                onChange={(e) =>
                  setFormData({ ...formData, discount: e.target.value })
                }
              />
            </MDBCol>
          </MDBRow>

          {isEditing ? (
            <div className="d-flex">
              <MDBBtn color="primary" type="submit">
                Save
              </MDBBtn>
              <MDBBtn color="secondary" onClick={handleCancelEdit}>
                Cancel
              </MDBBtn>
            </div>
          ) : (
            <MDBBtn color="primary" type="submit">
              Submit
            </MDBBtn>
          )}
        </form>
      </MDBContainer>

      <br />
      <MDBContainer
        style={{
          backgroundColor: "#FFFFFF",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <MDBTable striped style={{tableLayout: "fixed"}}>
          <MDBTableHead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
              <th>Description</th>
              <th>Discount</th>
              <th>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {graphicsData.map((graphic) => (
              <tr key={graphic._id}>
                <td>{graphic.name}</td>
                <td>{graphic.type}</td>
                <td>R{graphic.price.toFixed(2)}</td>
                <td>{graphic.stock}</td>
                <td>
                  <img
                    src={graphic.imageUrl}
                    alt={graphic.name}
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td style={{overflow: "hidden", whiteSpace: "nowrap"}}>{graphic.description}</td>
                <td>{graphic.discount}</td>
                <td>
                  {isEditing && editingItemId === graphic._id ? (
                    <>
                      <MDBBtn color="primary" onClick={() => handleSubmit()}>
                        Save
                      </MDBBtn>
                      <MDBBtn
                        color="secondary"
                        onClick={() => handleCancelEdit()}
                      >
                        Cancel
                      </MDBBtn>
                    </>
                  ) : (
                    <>
                      <MDBBtn color="info" onClick={() => handleEdit(graphic)}>
                        Edit
                      </MDBBtn>
                      <MDBBtn
                        color="danger"
                        onClick={() => handleDelete(graphic._id)}
                      >
                        Delete
                      </MDBBtn>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </MDBContainer>
  );
}

export default Admin;
