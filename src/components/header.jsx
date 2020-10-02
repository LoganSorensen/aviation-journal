import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [toggleNav, setToggleNav] = useState(false);

  const searchArticles = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const toggleOpen = () => {
    setToggleNav(!toggleNav);
  };

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
        <Link to='/inbox'><i className="far fa-envelope"></i></Link>
        <Link to="/add-article" className='add-article'>Add Article</Link>
      </div>
      <div className={`navigation ${toggleNav ? "open" : ""}`}>
        <nav>
          <Link to="/">Categories</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
