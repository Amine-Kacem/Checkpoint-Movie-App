import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/MovieList.css";
import StarRatingComponent from "react-star-rating-component";
import { motion } from "framer-motion";
import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader } from "mdbreact";

const MovieList = ({ movies, search, ratingSearch }) => {
  let filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
      movie.rating >= ratingSearch
    );
  });

  const allmoviesCards = filteredMovies.map((movie) => {
    return (
      <MDBCard
        style={{ width: "18rem", marginBottom: "10%", marginLeft: "10%" }}
        className="card"
      >
        <MDBCardHeader>
          <Card.Img
            variant="top"
            src={movie.image}
            width={"220px"}
            height={"320px"}
          />
        </MDBCardHeader>
        <MDBCardBody>
          <Card.Title style={{ paddingTop: 7 }}>{movie.title} </Card.Title>
          <Card.Text>{movie.year}</Card.Text>
          <Card.Text>{movie.genre}</Card.Text>
          <StarRatingComponent starCount={5} value={movie.rating} />
          <MDBCardFooter>{movie.description}</MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    );
  });

  return (
    <center>
      <motion.div
        initial={{ y: "100vw" }}
        animate={{ y: "1vw" }}
        transition={{ duration: 1, type: "summer", stiffness: "100" }}
        className="cards"
      >
        {allmoviesCards}
      </motion.div>
    </center>
  );
};

export default MovieList;
