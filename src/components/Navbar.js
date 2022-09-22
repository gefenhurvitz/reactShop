import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse">
          <Link className=" nav-link" to={"about"}>
            about
          </Link>
          <Link className=" nav-link" to={"home"}>
            home
          </Link>
          <Link className=" nav-link" to={"products"}>
            products
          </Link>
          <Link className=" nav-link" to={"about"}>
            about
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
