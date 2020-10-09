import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [toggleNav, setToggleNav] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const searchArticles = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleOpen = () => {
    setToggleNav(!toggleNav);
  };

  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload();
  }

  return (
    <div className="header">
      <div className="hamburger-and-logo">
        <i className="fas fa-bars" onClick={toggleOpen}></i>
      </div>
      <form onSubmit={searchArticles}>
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search Articles"
          onChange={handleChange}
        />
      </form>
      <div className="admin-features">
        {token !== null && (
          <>
            <Link to="/inbox">
              <i className="far fa-envelope"></i>
            </Link>
            <Link to="/add-article" className="admin-btn add-btn">
              Add Article
            </Link>
            <button className="logout admin-btn" onClick={logout}>Log Out</button>
          </>
        )}
      </div>
      <div className={`navigation ${toggleNav ? "open" : ""}`}>
        <nav>
          <Link to="/" onClick={toggleOpen}>
            Categories
          </Link>
          <Link to="/contact" onClick={toggleOpen}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
