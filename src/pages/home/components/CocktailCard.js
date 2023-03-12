import React from "react";
import Header4 from "../../../components/styled/Header4.styled";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const CocktailCard = ({ data, selectedCocktail, setSelectedCocktail }) => {
  const navigate = useNavigate();
  return (
    <div
      className="p-3 bg-white rounded-xl flex flex-col justify-between"
      onClick={() => {
        navigate(`/cocktail-details/${data.idDrink}`);
        setSelectedCocktail(data);
      }}
    >
      <img
        src={data.strDrinkThumb}
        alt="A cocktail with orange inside"
        className="w-full aspect-square object-cover rounded-md mb-2"
      />
      <Header4 className="mb-2">{data.strDrink}</Header4>
      <p className="text-sm h-full line-clamp-3">{data.strInstructions}</p>
      <button
        className="details-btn text-sm mt-2 px-2 bg-gray-100 w-full py-2 rounded-sm flex items-center gap-3 justify-center"
        onClick={() => {
          navigate(`/cocktail-details/${data.idDrink}`);
          console.log(selectedCocktail);
          setSelectedCocktail(data);
        }}
      >
        Look for Details
        <ArrowRightIcon className="w-4 arrow-right-icon" />
      </button>
    </div>
  );
};

CocktailCard.propTypes = {
  data: PropTypes.object,
  selectedCockail: PropTypes.any,
  setSelectedCocktail: PropTypes.any,
};

export default CocktailCard;
