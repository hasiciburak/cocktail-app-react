import React from "react";
import CocktailCard from "./CocktailCard";
import Header2 from "../../../components/styled/Header2.styled";
import Description from "../../../components/styled/Description.styled";
import PropTypes from "prop-types";
const SearchResults = ({ results }) => {
  return (
    <div className="w-full text-left">
      <div className="my-2">
        <Header2>Search Results</Header2>
        <Description>
          {results != null ? results.length : "0"} results found
        </Description>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 s:grid-cols-2 xs:grid-gap-3">
        {results != null &&
          results.map((drink) => {
            return results != null ? (
              <CocktailCard key={drink.idDrink} data={drink} />
            ) : (
              <p>Did not find any results</p>
            );
          })}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
};

export default SearchResults;
