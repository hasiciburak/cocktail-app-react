import React from "react";
import CocktailCard from "./CocktailCard";

const SearchResults = () => {
  return (
    <>
      <div>
        <h1>Search Results</h1>
        <p>... results found</p>
      </div>
      <div>
        <CocktailCard />
      </div>
    </>
  );
};

export default SearchResults;
