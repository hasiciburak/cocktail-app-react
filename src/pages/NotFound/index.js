import React from "react";
import Header1 from "../../components/styled/Header1.styled";
import { Player } from "@lottiefiles/react-lottie-player";
import cocktailAnimation from "../../assets/animations/cocktail-mix.json";
import Header3 from "../../components/styled/Header3.styled";
import StyledLink from "../../components/styled/StyledLink.styled";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center align-center text-center h-screen">
      <Header1>404 - Not Found</Header1>
      <Player
        autoplay
        loop
        src={cocktailAnimation}
        className="w-full aspect-[16/9]"
      ></Player>
      <Header3>Please Try Again Or Refresh Page</Header3>
      <div className="flex flex-row gap-3 wrap justify-center mt-2">
        <StyledLink
          onClick={() => {
            window.location.reload();
          }}
        >
          Try Again
        </StyledLink>
        <StyledLink>
          <Link to="/"> Return To Home</Link>
        </StyledLink>
      </div>
    </div>
  );
};

export default NotFound;
