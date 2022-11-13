import React, { useEffect, useState } from "react";
import ActionsRow from "./components/ActionsRow";
import SloganArea from "./components/SloganArea";
import SearchResults from "./components/SearchResults";
import "../../assets/scss/home.scss";
import axios from "axios";

const Home = () => {
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
      <ActionsRow searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults results={results} />
    </div>
  );
};

export default Home;
