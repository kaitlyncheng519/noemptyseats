import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://noemptyseats.org/cdn/shop/files/image.jpg?v=1686603145&width=400" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Collaborations</a>{" "}
          </li>
          <li>
            <a href="/">Outreach</a>{" "}
          </li>
          <li>
            <a href="/">Stories</a>{" "}
          </li>
        </ul>
      </nav>
      <div className="btn">
        <button type="button"> Contact</button>
      </div>
    </div>
  );
};
export default Header;
