import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-links">
          <span>Newest</span>
          <span>Careers</span>
          <span>Blogs</span>
        </div>
        <div className="top-icons">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>

      <div className="main-nav">
        <div className="logo">
          <img src="/hauit.png" alt="Logo công ty" />
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/product">Product</a>
          <a href="/combo">Combo</a>
          <a href="/blog">Blog</a>
          <a href="/about">About us</a>
        </nav>

        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;