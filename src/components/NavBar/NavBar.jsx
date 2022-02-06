import CartWidget from "../CartWidget/CartWidget";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
// import styles from "../../components/NavBar/NavBar.module.css"
//import logoMenu from "../../assets/iconMenu.png";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-3 border-bottom border-primary p-0">
        <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          <a className="navbar-brand" href="/">
          <img className="iconMenu" src={props.logoMenu}  alt="logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active m-2" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="/">
                  Novedades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="/">
                  Contactos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="/">
                  Exclusivos
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <a
                activeclassname="active"
                className="nav-item nav-link"
                to="/login" href="/"
              >
                Login
                <LoginOutlinedIcon />
              </a>
            </ul>
          </div>
          <ul className="navbar-nav md-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <CartWidget />
                  </a>
                </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
