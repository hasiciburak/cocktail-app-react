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
  // Hooks
  const [drinkData, setDrinkData] = useState({});
  const [language, setLanguage] = useState("EN");

  // Fetching random cocktail data from the API
  const getDrinkDetail = async () => {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => {
        console.log(res.data.drinks);
        setDrinkData(res.data.drinks[22]);
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
            <LangOptions language={language} setLanguage={setLanguage} />
          </div>
        </div>
        <div className="w-full">
          <IngredientsArea />
        </div>
        <div className="my-4">
          <Header3>Instructions</Header3>
          <p className="mt-2">
            {language === "EN" ? (
              drinkData.strInstructions
            ) : language === "ES" ? (
              drinkData.strInstructionsES !== null ? (
                drinkData.strInstructionsES
              ) : (
                <span>No encontramos ninguna instrucción!🥲</span>
              )
            ) : language === "DE" ? (
              drinkData.strInstructionsDE !== null ? (
                drinkData.strInstructionsDE
              ) : (
                <span>Wir haben keine Anleitung gefunden!🥲</span>
              )
            ) : language === "FR" ? (
              drinkData.strInstructionsFR ? (
                drinkData.strInstructionsFR
              ) : (
                <span>Nous n'avons pas trouvé d'instructions!🥲</span>
              )
            ) : language === "IT" ? (
              drinkData.strInstructionsIT ? (
                drinkData.strInstructionsIT
              ) : (
                <span>Non abbiamo trovato istruzioni!🥲</span>
              )
            ) : language === "HANS" ? (
              drinkData["strInstructionsZH-HANS"] ? (
                drinkData["strInstructionsZH-HANS"]
              ) : (
                <span>"我们没有找到任何说明!"&nbsp;🥲</span>
              )
            ) : language === "HANT" ? (
              drinkData["strInstructionsZH-HANT"] ? (
                drinkData["strInstructionsZH-HANT"]
              ) : (
                <span className="flex flex-row gap-2 text-xl">
                  &nbsp;&nbsp;我們沒有找到任何說明&nbsp;🥲
                </span>
              )
            ) : (
              <span>We didn't find any instructions!🥲</span>
            )}
          </p>
        </div>
        <div className="my-4">
          <Header3 className="mb-6">Preperation Video</Header3>
          <iframe
            id="ytplayer"
            type="text/html"
            style={{ width: "100%", aspectRatio: "16/9" }}
            src={drinkData.strVideo}
            frameborder="0"
            title="Youtube Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;
