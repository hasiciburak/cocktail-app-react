import React, { useLayoutEffect, useState } from "react";
import "../../asstes/scss/cocktail-details.scss";
import Header2 from "../../components/styled/Header2.styled";
import TasteChip from "../../components/styled/TasteChip.styled";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Description from "../../components/styled/Description.styled";
import LangOptions from "./components/LangOptions";
import Header3 from "../../components/styled/Header3.styled";
import IngredientsArea from "./components/IngredientsArea";
import axios from "axios";
const CocktailDetails = () => {
  const [drinkData, setDrinkData] = useState({});
  const getDrinkDetail = async () => {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log(res.data.drinks);
        setDrinkData(res.data.drinks[0]);
      })
      .catch((error) => alert(error));
  };

  useLayoutEffect(() => {
    getDrinkDetail();
    console.log("i fire once");
  }, []);

  return (
    <div>
      <Link
        to="/"
        className="back-to-main-page text-yellow-700 hover:underline flex gap-2 mb-2 text-sm hover:text-yellow-900 items-center"
      >
        <ArrowLeftIcon
          className="arrow-left-icon text-inherit h-4 w-4"
          fontSize="16px"
        />
        Back to Main Page
      </Link>
      {/* COCKTAIL HEADER */}
      <Header2>{drinkData.strDrink}</Header2>
      <div className="flex flex-row justify-between">
        <Description>Crazy cocktail for crazy moments</Description>
        <Description>Last Modified: {drinkData.dateModified}</Description>
      </div>
      <div className="flex flex-row gap-2 w-full mt-2">
        <TasteChip>Spicy</TasteChip>
        <TasteChip>Tasty</TasteChip>
        <TasteChip>Sweet</TasteChip>
        <TasteChip>{drinkData.strAlcoholic}</TasteChip>
      </div>
      <div>
        <img
          src={drinkData.strDrinkThumb}
          className="w-full aspect-[16/9] mt-5 object-cover rounded-xl"
          alt="Deneme"
        />
        <div>
          {drinkData.strImageAttribution !== null ? (
            <Description className="mt-2">
              Attribution: {drinkData.strImageAttribution}
            </Description>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center mt-2 mb-4">
            <Description>Category:</Description>
            <TasteChip>{drinkData.strCategory}</TasteChip>
          </div>
          <div className="">
            <LangOptions />
          </div>
        </div>
        <div className="w-full">
          <IngredientsArea />
        </div>
        <div className="mt-4 mb-20">
          <Header3>Instructions</Header3>
          <p className="mt-2">{drinkData.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;
