import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import PrimaryButton from "../../../components/styled/PrimaryButton.styled";
const ActionsRow = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center align-middle pt-5 w-full text-center">
      <div className="flex flex-row  justify-center align-middle gap-3">
        <div className="w-4/6">
          <input
            type="search"
            className="w-full rounded border-gray-200  border-2 py-2 px-2 h-full"
            placeholder="Search for the cocktails, ingredients..."
          />
        </div>
        <div className="w-2/6 ">
          <PrimaryButton onClick={() => navigate("/cocktail-details")}>
            <MagnifyingGlassIcon className="h-6 w-6 text-inherit" />
            Search for Cocktails
          </PrimaryButton>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/cocktail-details"
          className="underline mt-1 text-sm cursor-pointer text-gray-400 hover:text-gray-600"
        >
          Feeling Lucky Today...
        </Link>
      </div>
    </div>
  );
};

export default ActionsRow;
