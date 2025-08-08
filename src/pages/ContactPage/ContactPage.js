import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [showNotif, setShowNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotif(true);
    e.target.reset();
  };

  useEffect(() => {
    if (showNotif) {
      const timer = setTimeout(() => setShowNotif(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showNotif]);

  return (
    <div className="contact-container">
      {showNotif && (
        <div className="custom-notification">
          Cảm ơn bạn đã liên hệ với chúng tôi.
          <br /> Chúng tôi sẽ thông báo và liên hệ với bạn sớm nhất.
        </div>
      )}

      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Liên hệ với tôi
      </motion.h1>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="info-item">
          <FaPhoneAlt className="info-icon" />
          <p>+84 334 224 702</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <p>hhai98940@gmail.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <p>Đà Nẵng, Việt Nam</p>
        </div>
      </motion.div>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Họ và tên" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Nội dung tin nhắn" rows="5" required></textarea>
        <button type="submit">Gửi tin nhắn</button>
      </motion.form>

      <motion.div
        className="map-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502434059124!2d106.70098187505036!3d10.772215389375424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e2c4b5c4d%3A0x23fd46b3cbe67276!2zQ8O0bmcgVmnDqm4gSG_DoG4gQ8O0bmcgU2Fu!5e0!3m2!1svi!2s!4v1692699208765!5m2!1svi!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
}
