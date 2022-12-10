import Header1 from "../../../components/styled/Header1.styled";
import React from "react";
import Description from "../../../components/styled/Description.styled";
import redCocktail from "../../../assets/img/cocktial-red.png";
import { motion } from "framer-motion";
const SloganArea = () => {
  return (
    <div className="text-center">
      <div className="flex flex-row justify-center items-center gap-10">
        <Header1>The Crazy Bartender</Header1>
        <motion.img
          src={redCocktail}
          alt=""
          className=" w-[50px]"
          animate={{
            x: [300, 0],
            rotate: [1200, 0],
          }}
          transition={{
            duration: 1,
          }}
        />
      </div>
      <Description>
        Crazy cocktails from your crazy bartender BH,in one place
      </Description>
    </div>
  );
};

export default SloganArea;
