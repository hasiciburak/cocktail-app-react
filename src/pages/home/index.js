import React from "react";
import ActionsRow from "./components/ActionsRow";
import SloganArea from "./components/SloganArea";
import SearchResults from "./components/SearchResults";
import "../../asstes/scss/home.scss";

const Home = () => {
  return (
    <div className="text-center mx-auto w-full">
      <SloganArea />
      <ActionsRow />
      <SearchResults />
    </div>
  );
};

export default Home;
