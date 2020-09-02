import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/addModal.css";
import { v4 as uuidv4 } from "uuid";

const AddModal = ({ addMovie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [movie, setMovie] = useState({
    id: uuidv4(),
    title: "",
    genre: "",
    year: "",
    image: "",
    rating: "",
    description: "",
  });

  const handleChange = (e) => {
    const val = e.target.value;
    setMovie({ ...movie, [e.target.name]: val });
  };
  const handleSubmit = () => {
    addMovie(movie);
    setMovie({
      id: uuidv4(),
      title: "",
      genre: "",
      year: "",
      image: "",
      rating: "",
      description: "",
    });
    handleClose();
  };
  return (
    <>
      <center>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ marginTop: "50px" }}
        >
          Add a new movie
        </Button>
      </center>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie informations </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group mb-3">
            <label
              style={{
                marginRight: "2%",
                fontWeight: "bold",
                marginTop: "1.5%",
              }}
            >
              Title
            </label>
            <input
              required
              name="title"
              onChange={(e) => handleChange(e)}
              placeholder="Movie name"
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <label
              style={{
                marginRight: "2%",
                fontWeight: "bold",
                marginTop: "1.5%",
              }}
            >
              Genre
            </label>
            <input
              type="text"
              name="genre"
              onChange={(e) => handleChange(e)}
              placeholder="Movie type"
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <label
              style={{
                marginRight: "2%",
                fontWeight: "bold",
                marginTop: "1.5%",
              }}
            >
              Year
            </label>
            <input
              name="year"
              onChange={(e) => handleChange(e)}
              placeholder="Movie year"
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <label
              style={{
                marginRight: "2%",
                fontWeight: "bold",
                marginTop: "1.5%",
              }}
            >
              Rank
            </label>
            <input
              name="rating"
              onChange={(e) => handleChange(e)}
              placeholder="Movie rate"
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <label
              style={{
                marginRight: "2%",
                fontWeight: "bold",
                marginTop: "1.5%",
              }}
            >
              Image
            </label>
            <input
              name="image"
              onChange={(e) => handleChange(e)}
              placeholder="Movie image"
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <label
              style={{
                marginRight: "2%",
                fontWeight: "bold",
                marginTop: "1.5%",
              }}
            >
              Description
            </label>
            <input
              name="description"
              onChange={(e) => handleChange(e)}
              placeholder="Movie description"
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            EXIT
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Add The Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
