import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import PrimaryButton from "../../../components/styled/PrimaryButton.styled";
import axios from "axios";
import StyledLink from "../../../components/styled/StyledLink.styled";
import { useNavigate } from "react-router-dom";
const ActionsRow = ({
  searchQuery,
  setSearchQuery,
  selectedCocktail,
  setSelectedCocktail,
}) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const fetchRandomCocktail = async () => {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        setSelectedCocktail(res.data.drinks[0]);
        console.log(selectedCocktail);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center align-middle pt-5 w-full text-center">
      <div className="flex flex-col md:flex-row  justify-center align-middle gap-3">
        <div className="w-full md:w-4/6">
          <input
            type="search"
            className="w-full rounded border-gray-200  border-2 py-2 px-2 h-full"
            placeholder="Search for the cocktails, ingredients..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchQuery(search);
              }
            }}
          />
        </div>
        <div className="w-full md:w-2/6 ">
          <PrimaryButton
            onClick={() => {
              // navigate("/cocktail-details");
              console.log(searchQuery);
              setSearchQuery(search);
            }}
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-inherit" />
            <span>Search for Cocktails</span>
          </PrimaryButton>
        </div>
      </div>
      <div className="text-center mt-2">
        <StyledLink
          className="underline mt-3 text-sm cursor-pointer text-gray-400 hover:text-gray-600"
          onClick={() => {
            fetchRandomCocktail();
            navigate(`/cocktail-details/${selectedCocktail.idDrink}`);
          }}
        >
          Feeling Lucky Today...
        </StyledLink>
      </div>
    </div>
  );
};
ActionsRow.propTypes = {
  searchQuery: PropTypes.any,
  setSearchQuery: PropTypes.any,
  selectedCocktail: PropTypes.any,
  setSelectedCocktail: PropTypes.any,
};

export default ActionsRow;
