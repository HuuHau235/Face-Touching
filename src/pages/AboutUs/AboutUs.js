import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import aboutVideo from "../../assets/about.mp4"; 
import meImage from "../../assets/me.png"; 

function AboutUs() {
  return (
    <div className="about-container">

      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Về Tôi
      </motion.h1>

      <motion.img
        src={meImage}
        alt="Ảnh của tôi"
        className="about-photo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      <motion.p
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Xin chào! Tôi là <strong>Hữu Hậu</strong> — lập trình viên full-stack,
        nhà thiết kế giao diện, và đôi khi cũng là tester cho chính sản phẩm của mình.
        Dù chỉ một người, tôi đảm nhiệm toàn bộ quy trình phát triển từ ý tưởng,
        thiết kế, lập trình, đến triển khai và tối ưu.
      </motion.p>

      <motion.p
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Sứ mệnh của tôi là tạo ra những sản phẩm web vừa đẹp mắt, vừa thân thiện,
        vừa mượt mà — mang lại trải nghiệm tuyệt vời cho người dùng.
      </motion.p>

      <motion.div
        className="about-values"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2>Giá Trị Cốt Lõi</h2>
        <ul>
          <li>💡 Sáng tạo và đổi mới liên tục</li>
          <li>⚡ Tốc độ và hiệu quả</li>
          <li>🚀 Luôn hướng tới trải nghiệm người dùng</li>
        </ul>
      </motion.div>
      <motion.div
        className="about-video"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <video src={aboutVideo} autoPlay loop muted playsInline controls />
      </motion.div>
    </div>
  );
}

export default AboutUs;
