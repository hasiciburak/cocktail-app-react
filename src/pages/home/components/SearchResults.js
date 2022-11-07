import React from "react";
import CocktailCard from "./CocktailCard";
import Header2 from "../../../components/styled/Header2.styled";
import Description from "../../../components/styled/Description.styled";
const SearchResults = () => {
  return (
    <div className="w-full text-left">
      <div className="my-2">
        <Header2>Search Results</Header2>
        <Description>... results found</Description>
      </div>
      <div className="w-full">
        <CocktailCard />
      </div>
    </div>
  );
};

export default SearchResults;
