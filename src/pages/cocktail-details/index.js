import React from "react";
import Header2 from "../../components/styled/Header2.styled";
import TasteChip from "../../components/styled/TasteChip.styled";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const CocktailDetails = () => {
  return (
    <div>
      <Link
        to="/"
        className="text-yellow-700 hover:underline flex gap-2 mb-2 text-sm hover:text-yellow-900 items-center"
      >
        <ArrowLeftIcon className="text-inherit h-4 w-4" fontSize="16px" />
        Back to Main Page
      </Link>
      {/* COCKTAIL HEADER */}
      <Header2>The Long Island Iced Tea</Header2>
      <p className="text-yellow-700 text-semibold">
        Crazy cocktail for crazy moments
      </p>
      <div className="flex flex-row gap-2 w-full mt-2">
        <TasteChip>Spicy</TasteChip>
        <TasteChip>Tasty</TasteChip>
        <TasteChip>Sweet</TasteChip>
        <TasteChip>Alcholic</TasteChip>
      </div>
      <div>
        <img
          src="https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg"
          className="w-full aspect-[16/9] mt-5 object-cover rounded-xl"
          alt="The Long Island Iced Tea"
        />
      </div>
    </div>
  );
};

export default CocktailDetails;
