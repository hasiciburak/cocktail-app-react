import React, { useEffect, useState } from "react";
import ActionsRow from "./components/ActionsRow";
import SloganArea from "./components/SloganArea";
import SearchResults from "./components/SearchResults";
import PropTypes from "prop-types";
import axios from "axios";
import "../../assets/scss/home.scss";

const Home = ({ selectedCocktail, setSelectedCocktail }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchSearchResults = async () => {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
      )
      .then((res) => {
        setResults(res.data.drinks);
        console.log(res.data);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchSearchResults();
    document.title = "Home - The Crazy Bartender";
  }, [searchQuery]);

  return (
    <div className="text-center mx-auto w-full">
      <SloganArea />
      <ActionsRow
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCocktail={selectedCocktail}
        setSelectedCocktail={setSelectedCocktail}
      />
      <SearchResults
        results={results}
        selectedCocktail={selectedCocktail}
        setSelectedCocktail={setSelectedCocktail}
      />
    </div>
  );
};

Home.propTypes = {
  selectedCocktail: PropTypes.any,
  setSelectedCocktail: PropTypes.any,
};

export default Home;
