import "./App.css";
import WrapperContainer from "./components/styled/WrapperContainer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CocktailDetails from "./pages/cocktail-details";
function App() {
  return (
    <WrapperContainer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cocktail-details" element={<CocktailDetails />}></Route>
      </Routes>
    </WrapperContainer>
  );
}

export default App;
