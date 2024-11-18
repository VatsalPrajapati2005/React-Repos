import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container">
            <NavLink className="navbar-brand fw-bold" to="/">
              MyWebsiteFrom
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="" to="/">
                  Registration
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/view">
                    View
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
