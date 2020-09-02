import React from "react";
import "../assets/Search.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { motion } from "framer-motion";
import Rate from "./Rate";

const Search = ({ handleSearch, setRatingSearch, ratingSearch }) => {
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0vw" }}
        transition={{
          duration: 10,
          type: "spring",
          stiffness: "100",
          delay: 0.5,
        }}
        id="search-container"
      >
        <input
          style={{
            width: "400px",
            height: "40px",
            backgroundColor: "#282828",
            borderRadius: "15px",
          }}
          type="text"
          weight={100}
          height={100}
          border={100}
          placeholder="Type the movie name "
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </motion.div>
      <br></br>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "0vw" }}
        transition={{
          duration: 1,
          type: "winter",
          stiffness: "100",
          delay: 0.5,
        }}
      >
        <Rate
          className="star-rating"
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
      </motion.div>
    </>
  );
};

export default Search;
