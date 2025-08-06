import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import demoVideo from '../../assets/video.mp4';


function HomePage() {
  return (
    <div className="home-container">
      <motion.header
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Đừng Chạm Tay Lên Khuôn Mặt</h1>
        <p>Bảo vệ bạn khỏi thói quen vô thức gây hại trong mùa dịch!</p>
        <Link to="/test" className="start-btn">Bắt đầu kiểm tra ngay</Link>
      </motion.header>

      <motion.section
        className="features-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="https://ocd.vn/wp-content/uploads/2024/08/AI.jpg" alt="Tính năng camera" />
          <h3>Phát hiện chạm tay</h3>
          <p>Sử dụng AI để phát hiện khi bạn chạm tay lên mặt.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="https://media.vneconomy.vn/images/upload/2025/01/19/tri-tue-nhan-tao.jpg" alt="Huấn luyện mô hình" />
          <h3>Tự huấn luyện</h3>
          <p>Cho phép bạn huấn luyện mô hình để phù hợp với khuôn mặt của bạn.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="https://lumi.vn/wp-content/uploads/2025/04/AI-la-cong-nghe-mo-phong-cach-con-nguoi-suy-nghi-giai-quyet-van-de.jpg" alt="Thông báo âm thanh" />
          <h3>Cảnh báo tức thì</h3>
          <p>Thông báo và âm thanh mỗi khi bạn chạm tay lên mặt.</p>
        </motion.div>
      </motion.section>

      <motion.section
        className="video-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Video demo</h2>
        <div className="video-wrapper">
          <iframe
            src={demoVideo}
            title="Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.section>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p>© 2025 Đừng Chạm Tay Lên Mặt. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default HomePage;
