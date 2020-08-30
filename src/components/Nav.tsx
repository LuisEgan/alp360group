import React from "react";
import { Link } from "gatsby";

interface INav {
  onMenuToggle: () => void;
}

const Nav = (props: INav) => {
  const { onMenuToggle } = props;

  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={() => {
                onMenuToggle();
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                onMenuToggle();
              }}
              to="/Generic"
            >
              Generic Page
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                onMenuToggle();
              }}
              to="/Elements"
            >
              Elements
            </Link>
          </li>
        </ul>
        <a
          className="close"
          onClick={(e) => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        />
      </div>
    </nav>
  );
};

export default Nav;
