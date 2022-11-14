import {useState} from "react";
import "./App.scss";
import WrapperContainer from "./components/styled/WrapperContainer";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import CocktailDetails from "./pages/cocktail-details";
import NotFound from "./pages/NotFound";

function App() {
    const [selectedCocktail, setSelectedCocktail] = useState({});

    return (
        <WrapperContainer>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            selectedCocktail={selectedCocktail}
                            setSelectedCocktail={setSelectedCocktail}
                        />
                    }
                />
                <Route path="/cocktail-details" element={<CocktailDetails/>}/>
                <Route
                    path="cocktail-details/:id"
                    element={
                        <CocktailDetails
                            selectedCocktail={selectedCocktail}
                            setSelectedCocktail={setSelectedCocktail}
                        />
                    }
                />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </WrapperContainer>
    );
}

export default App;
