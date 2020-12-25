import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="Logo" height="60" width="300"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <NavLink activeClassName="active" className="nav-item nav-link" 
                exact
                to="/characters">
                  Characters
              </NavLink>
              <NavLink activeClassName="active" className="nav-item nav-link" 
                exact
                to="/episodes">
                  Episodes
              </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;