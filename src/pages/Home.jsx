import { BrowserRouter, Route, Routes } from "react-router-dom";
import logoMenu from "../assets/iconMenu.png";
import NavBar from "../components/NavBar/NavBar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
    return (
        <BrowserRouter>
             <NavBar logoMenu={logoMenu} alt='logoMenu' />
             <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/category/:id_game" element={<ItemListContainer />} />
             </Routes>
        </BrowserRouter>
   )
};

export default Home;
