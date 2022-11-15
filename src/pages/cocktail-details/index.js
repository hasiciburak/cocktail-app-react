import React, { useState } from "react";
import "../../assets/scss/cocktail-details.scss";
import Header2 from "../../components/styled/Header2.styled";
import TasteChip from "../../components/styled/TasteChip.styled";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Description from "../../components/styled/Description.styled";
import LangOptions from "./components/LangOptions";
import Header3 from "../../components/styled/Header3.styled";
import IngredientsArea from "./components/IngredientsArea";
import PropTypes from "prop-types";
import { WhatsappIcon, EmailIcon, InstapaperIcon } from "react-share";
import { useEffect } from "react";
const CocktailDetails = ({ selectedCocktail, setSelectedCocktail }) => {
  // Hooks
  const [language, setLanguage] = useState("EN");

  // Changing Title To Cocktail Name
  useEffect(() => {
    document.title = `${selectedCocktail.strDrink} - The Crazy Bartender`;
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
      <Header2>{selectedCocktail.strDrink}</Header2>
      <div className="flex flex-row justify-between">
        <Description>
          Last Modified: {selectedCocktail.dateModified}
        </Description>
      </div>
      <div className="flex flex-row gap-2 w-full overflow-auto  scrollbar-hide mt-2 ">
        <TasteChip>Spicy</TasteChip>
        <TasteChip>Tasty</TasteChip>
        <TasteChip>Sweet</TasteChip>
        <TasteChip>{selectedCocktail.strAlcoholic}</TasteChip>
      </div>
      <div>
        <img
          src={selectedCocktail.strDrinkThumb}
          className="w-full aspect-[16/9] mt-5 object-cover rounded-xl"
          alt="Deneme"
        />
        <div>
          {selectedCocktail.strImageAttribution !== null ? (
            <Description className="mt-2">
              Attribution: {selectedCocktail.strImageAttribution}
            </Description>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full flex flex-col-reverse mt-3 md:mt-0 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 items-center mt-2 mb-4">
            <Description>Category:</Description>
            <TasteChip>{selectedCocktail.strCategory}</TasteChip>
          </div>
          <div className="">
            <LangOptions language={language} setLanguage={setLanguage} />
          </div>
        </div>
        <div>
          <Header3>Share on Social Media</Header3>
        </div>
        <div className="flex flex-row gap-2">
          <EmailIcon
            className="w-9 share-button"
            borderRadius="100%"
          ></EmailIcon>
          <InstapaperIcon
            className="w-9 share-button"
            borderRadius="100%"
          ></InstapaperIcon>
          <WhatsappIcon
            className="w-9 share-button"
            borderRadius="100%"
          ></WhatsappIcon>
        </div>
        <div className="w-full">
          <IngredientsArea selectedCocktail={selectedCocktail} />
        </div>
        <div className="my-4">
          <Header3>Instructions</Header3>
          <p className="mt-2">
            {language === "EN" ? (
              selectedCocktail.strInstructions
            ) : language === "ES" ? (
              selectedCocktail.strInstructionsES !== null ? (
                selectedCocktail.strInstructionsES
              ) : (
                <span>No encontramos ninguna instrucción!🥲</span>
              )
            ) : language === "DE" ? (
              selectedCocktail.strInstructionsDE !== null ? (
                selectedCocktail.strInstructionsDE
              ) : (
                <span>Wir haben keine Anleitung gefunden!🥲</span>
              )
            ) : language === "FR" ? (
              selectedCocktail.strInstructionsFR ? (
                selectedCocktail.strInstructionsFR
              ) : (
                <span>Nous n'avons pas trouvé d'instructions!🥲</span>
              )
            ) : language === "IT" ? (
              selectedCocktail.strInstructionsIT ? (
                selectedCocktail.strInstructionsIT
              ) : (
                <span>Non abbiamo trovato istruzioni!🥲</span>
              )
            ) : language === "HANS" ? (
              selectedCocktail["strInstructionsZH-HANS"] ? (
                selectedCocktail["strInstructionsZH-HANS"]
              ) : (
                <span>"我们没有找到任何说明!"&nbsp;🥲</span>
              )
            ) : language === "HANT" ? (
              selectedCocktail["strInstructionsZH-HANT"] ? (
                selectedCocktail["strInstructionsZH-HANT"]
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

        {selectedCocktail.strVideo !== null && (
          <div className="my-4">
            <Header3 className="mb-6">Preperation Video</Header3>
            <iframe
              id="ytplayer"
              type="text/html"
              style={{ width: "100%", aspectRatio: "16/9" }}
              src={selectedCocktail.strVideo}
              frameborder="0"
              title="Youtube Video"
            ></iframe>
          </div>
        )}

        <div className="mb-20">
          <Header3 className="mb-6">Recommended Playlist During Prep</Header3>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6syac0fWYdV?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Cocktail Playlist"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

CocktailDetails.propTypes = {
  selectedCocktail: PropTypes.any,
  setSelectedCocktail: PropTypes.any,
};

export default CocktailDetails;
