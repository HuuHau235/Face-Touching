import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container simple-footer">
        <div className="footer-logo">
          <img src="/hauit.png" alt="Logo công ty" />
          <p>Bảo vệ sức khỏe bằng AI thông minh</p>
        </div>

        <div className="footer-contact">
          <p>Email: contact@donttouchface.app</p>
          <p>Hotline: 0123 456 789</p>
        </div>

        <div className="footer-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaTelegramPlane />
        </div>
      </div>
    </footer>
  );
}