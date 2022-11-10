import React from "react";
import cocktailImg from "../../../assets/img/cocktail-img.jpg";
import Header4 from "../../../components/styled/Header4.styled";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const CocktailCard = () => {
  return (
    <div className="w-1/3 p-3 bg-white rounded-xl">
      <img
        src={cocktailImg}
        alt="A cocktail with orange inside"
        className="w-full aspect-square object-cover rounded-md mb-2"
      />
      <Header4 className="mb-2">Mojito</Header4>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        labore.
      </p>
      <button className="details-btn text-sm mt-2 px-2 bg-gray-100 w-full py-2 rounded-sm flex items-center gap-3 justify-center">
        Look for Details
        <ArrowRightIcon className="w-4 arrow-right-icon" />
      </button>
    </div>
  );
};

export default CocktailCard;
