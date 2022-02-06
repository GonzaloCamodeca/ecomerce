import logoMenu from "../../assets/iconMenu.png";
import NavBar from "../NavBar/NavBar"
const Header = () => {
    return(
    <>
    <header>
        <NavBar logoMenu={logoMenu} alt='logoMenu' />
    </header>
    </>
    );
}

export default Header;