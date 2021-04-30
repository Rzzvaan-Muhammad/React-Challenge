import React from "react";
import logohere from "../Images/logohere.png";

function TopMenu({ Change, Search }) {
  return (
    <div className="top-menu is-shadow-2">
      <div className="menu-logo-container">
        <img className="menu-logo" src={logohere} alt="Logo" />
      </div>
      <div>
        <input
          className="search-field"
          placeholder="Search here...."
          type="search"
          name="name"
          value={Search}
          autoComplete="off"
          onChange={(e) => Change(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TopMenu;
