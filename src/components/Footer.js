import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {
  return (
    <div>
      <footer className=" py-5 text-center text-light text-lg-start bg-dark">
        <div className=" text-center container">
          <div className="text-light bg-success">
            <a href="google.com">
              <i className="m-2 fa fa-2x fa-github"></i>
            </a>
            <a href="google.com">
              <i className=" m-2 fa fa-2x fa-facebook"></i>
            </a>
            <a href="google.com">
              <i className="m-2 fa fa-2x fa-google"></i>
            </a>
            <a href="google.com">
              <i className="m-2 fa fa-2x fa-instagram"></i>
            </a>
          </div>
          <i className="m-2 fa fa-2x fa-instagram"></i>

          <p className="m-0 text-center text-white">Created by Gefen hurvitz</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
