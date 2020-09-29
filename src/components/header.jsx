import React, { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  const searchArticles = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="header">
      <div className="hamburger-and-logo">
        <i className="fas fa-bars"></i>
        <p>Logo</p>
      </div>
      <form onSubmit={searchArticles}>
        <input type="text" placeholder="Search Articles" onChange={handleChange} />
      </form>
      <div>
      <i className="far fa-envelope"></i>
        <button>Add Article</button>
      </div>
    </div>
  );
};

export default Header;
