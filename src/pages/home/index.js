import React from "react";
import ActionsRow from "./components/ActionsRow";
import SloganArea from "./components/SloganArea";
const Home = () => {
  return (
    <div className="text-center mx-auto w-full">
      <SloganArea />
      <ActionsRow />
    </div>
  );
};

export default Home;
