import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'>Welcome to The </medium><b className="footer-color"> Curly Crew! &copy;{new Date().getFullYear()} | No Rights Reserved | Open-Source</b>
      </div>
    </footer>
  );
};

export default Footer;