import React from "react";
import Header2 from "../../components/styled/Header2.styled";
import TasteChip from "../../components/styled/TasteChip.styled";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Description from "../../components/styled/Description.styled";
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
      <Description>Crazy cocktail for crazy moments</Description>
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
        <div className="flex gap-2 items-center mt-2 mb-4">
          <Description>Category:</Description>
          <TasteChip>Ordinary Drink</TasteChip>
        </div>
        <div>
          <h3>Ingredients</h3>
          <ul>
            <li>Vodka</li>
            <li>Vodka</li>
            <li>Vodka</li>
            <li>Vodka</li>
          </ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <p>
            Mix all contents in a highball glass and sitr gently. Add dash of
            Coca-Cola for the coloring and garnish with lemon or lime twist
          </p>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;
