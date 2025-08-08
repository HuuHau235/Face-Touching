import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaGooglePlusG, FaPinterestP, FaRss } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/hauit.png" alt="Logo" />
        </div>

        <div className="footer-info">
          <p>ITDragons - 25 Phạm Văn Xảo, Đà Nẵng</p>
          <p>📞 (123) 456-7890 &nbsp; | &nbsp; 📠 (123) 456-7890</p>
          <div className="footer-social">
            <span>Social Media</span>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGooglePlusG /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaRss /></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/about">ABOUT US</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/help">HELP</Link>
          <Link to="/privacy">PRIVACY POLICY</Link>
          <Link to="/disclaimer">DISCLAIMER</Link>
        </div>
        <p className="footer-copy">Copyright © 2022 • ABC Company.</p>
      </div>
    </footer>
  );
}

export default Footer;
