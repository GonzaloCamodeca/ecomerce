import CartWidget from "./CartWidget";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import logoMenu from "../assets/iconMenu.png"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-3 border-bottom border-primary p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="iconMenu" src={logoMenu} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active m-2" aria-current="page" href="#">
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link m-2" href="#">
                  Novedades
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link m-2" href="#">
                  Contacto
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link m-2" href="#">
                  <CartWidget></CartWidget>
                </p>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto">
            <p
              activeClassName="active"
              className="nav-item nav-link"
              to="/login"
            >Login<LoginOutlinedIcon />
            </p>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
