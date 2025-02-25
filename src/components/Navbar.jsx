import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-2">
              <p className="h4 fw-light">
                <i
                  class="fa-solid fa-phone"
                  style={{ color: "#833de7" }}
                ></i>
                +1 (234) 567-8910
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
