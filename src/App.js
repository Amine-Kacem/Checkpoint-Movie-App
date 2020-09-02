import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import MovieList from "./components/MovieList.js";
import AddModal from "./components/AddModal.js";
import Search from "./components/Search.js";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Joker",
      genre: "Crime/Drame",
      year: 2019,
      image:
        "https://i.pinimg.com/236x/8c/7a/dd/8c7adda70acfabcad99d728e0c515044.jpg",
      rating: 5,
      description:
        "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
    },

    {
      id: uuidv4(),
      title: "Spider-Man: Far from Home",
      genre: "Action/Aventure",
      year: 2019,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/714fYNzqYaL._AC_UL320_SR220,320_.jpg",
      rating: 4,
      description:
        "Peter et ses amis passent leurs vacances d’été en Europe. Mais ils n’auront pas vraiment l’occasion de se reposer puisque Peter accepte d’aider Nick Fury pour débusquer les mystérieuses créatures qui sont la cause des catastrophes naturelles qui frappent le continent.",
    },
    {
      id: uuidv4(),
      title: "Law Abiding Citizen",
      genre: "Thriller/Policier",
      year: 2009,
      image:
        "https://3.bp.blogspot.com/-wMpnXj3yDRo/UY9b9n1XaXI/AAAAAAAAAP4/-GFT73zRUWk/s320/Law-Abiding-Citizen-2009.jpg",
      rating: 5,
      description:
        "Dix ans après le meurtre de sa femme et sa fille, un homme se dresse contre le procureur en charge du procès des meurtriers, pour obtenir lui-même la justice. Sa vengeance menace tout aussi bien l'homme qui leur a accordé la clémence, que le système et la ville elle-même.",
    },
    {
      id: uuidv4(),
      title: "Bulletproof 2",
      genre: "Action/Comedie",
      year: 2020,
      image:
        "https://m.media-amazon.com/images/M/MV5BZTRlMTNmZDktYjY1MC00YjQwLWJiMWQtMzNlOTVkMzVhZjhlXkEyXkFqcGdeQXVyODQ4NjA3Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: 2,
      description:
        "Set 25 years after, Jack is now working as a Special Agent with a mission to take down a powerful South African crime family. The officer begrudgingly goes undercover once again, this time taking the identity of Moses.",
    },

    {
      id: uuidv4(),
      title: "Jurassic Park",
      genre: "Fantastique/Aventure",
      year: 2013,
      image:
        "https://m2.odeon.co.uk/_uploads/asset_management/220x320_41a02b37513f8b6f894cbdf353794c30.jpg",
      rating: 3,
      description:
        "An adventure 65 millions years in the making... An ambitious billionaire has harnessed scientific advancements and technology to bring dinosaurs back to life through advanced cloning.And that breakthrough has led him to build Jurassic Park - a new theme park on a remote island near Costa Rica, where the prehistoric animals are allowed to roam in captivity. But as a preview tour of the park takes place, a major power breakdown causes the island's security systems to fail, allowing the dinosaurs to break captivity and run amok.Forced to try to escape the island, it's first tourists are caught in a race for survival.",
    },
  ]);

  const [search, setSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleSearch = (val) => {
    setSearch(val);
  };

  return (
    <div className="App">
      <h1>MOVIE APP</h1>
      <img src="https://torrentfreak.com/images/full-stream-logo.jpg" />
      <center>
        <Search
          handleSearch={handleSearch}
          setRatingSearch={setRatingSearch}
          ratingSearch={ratingSearch}
        />
      </center>
      <AddModal addMovie={addMovie} />
      <MovieList movies={movies} search={search} ratingSearch={ratingSearch} />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
