import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import demoVideo from '../../assets/video.mp4';

function HomePage() {
  return (
    <div className="home-container px-4 py-8 max-w-4xl mx-auto text-justify">
      {/* Hero section */}
      <motion.header
        className="hero-section text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Đừng Chạm Tay Lên Khuôn Mặt</h1>
        <p className="text-lg mb-4">Bảo vệ bạn khỏi thói quen vô thức gây hại trong mùa dịch!</p>
        <Link to="/test" className="start-btn">Bắt đầu kiểm tra ngay</Link>
      </motion.header>

      {/* Features */}
      <motion.section
        className="features-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div className="feature-card p-4 border rounded shadow" whileHover={{ scale: 1.05 }}>
          <img src="https://ocd.vn/wp-content/uploads/2024/08/AI.jpg" alt="Tính năng camera" className="mb-2 w-full h-40 object-cover" />
          <h3 className="font-semibold text-lg mb-1">Phát hiện chạm tay</h3>
          <p>Sử dụng AI để phát hiện khi bạn chạm tay lên mặt.</p>
        </motion.div>

        <motion.div className="feature-card p-4 border rounded shadow" whileHover={{ scale: 1.05 }}>
          <img src="https://media.vneconomy.vn/images/upload/2025/01/19/tri-tue-nhan-tao.jpg" alt="Huấn luyện mô hình" className="mb-2 w-full h-40 object-cover" />
          <h3 className="font-semibold text-lg mb-1">Tự huấn luyện</h3>
          <p>Cho phép bạn huấn luyện mô hình để phù hợp với khuôn mặt của bạn.</p>
        </motion.div>

        <motion.div className="feature-card p-4 border rounded shadow" whileHover={{ scale: 1.05 }}>
          <img src="https://lumi.vn/wp-content/uploads/2025/04/AI-la-cong-nghe-mo-phong-cach-con-nguoi-suy-nghi-giai-quyet-van-de.jpg" alt="Thông báo âm thanh" className="mb-2 w-full h-40 object-cover" />
          <h3 className="font-semibold text-lg mb-1">Cảnh báo tức thì</h3>
          <p>Thông báo và âm thanh mỗi khi bạn chạm tay lên mặt.</p>
        </motion.div>
      </motion.section>

      {/* Educational Content */}
      <motion.section
        className="education-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="prose max-w-none">
          <h2>Ngày 8 tháng 10 năm 2024 / Tình trạng sức khỏe / Sức khỏe tâm thần</h2>
          <h1>Đừng chạm tay vào mặt! Làm thế nào để ngừng chạm tay vào mặt</h1>
          <p>Chạm vào mặt là một thói quen phổ biến, nhưng có thể khắc phục được, chẳng hạn như bằng cách học cách nhận biết khi nào bạn đang làm điều đó và giữ cho tay bạn không bị phân tâm.</p>
          <p>Tất cả chúng ta đều chạm tay vào mặt. Và có lẽ nhiều hơn chúng ta nghĩ.</p>
          <p>Bạn tựa cằm vào tay khi đang chìm đắm trong suy nghĩ. Xoa trán như thể điều đó sẽ xóa tan những suy nghĩ vẩn vơ. Mát-xa thái dương để giảm căng thẳng ngay lập tức.</p>
          <p>Vậy, làm thế nào để ngừng chạm tay lên mặt? Và tại sao việc tránh chạm tay lại quan trọng đến vậy? Chúng tôi đã trao đổi với chuyên gia trị liệu lâm sàng về sức khỏe hành vi Karen Tucker, LISW-S, để xin lời khuyên về cách từ bỏ thói quen này.</p>

          <h2>Điều gì xảy ra nếu tôi chạm vào mặt quá nhiều?</h2>
          <p>Lý do số 1 mà các chuyên gia y tế khuyên bạn nên tránh chạm vào mặt là vì việc chạm vào mặt có thể lây lan vi trùng gây bệnh cho bạn.</p>
          <p>Đây là lý do tại sao.</p>
          <p>Nhiễm trùng đường hô hấp thường lây lan qua việc hít phải các giọt bắn khi người bị nhiễm bệnh ho hoặc hắt hơi. Tuy nhiên, những giọt bắn này cũng có thể rơi xuống các bề mặt.</p>
          <p>Vì vậy, khi bạn chạm tay vào bề mặt bị nhiễm trùng rồi chạm vào mặt, bạn đang tạo cơ hội cho vi khuẩn xâm nhập và gây bệnh. Điều này bao gồm các tình trạng như:</p>
          <ul>
            <li>COVID-19</li>
            <li>Cúm</li>
            <li>Virus hợp bào hô hấp (RSV)</li>
            <li>Cảm lạnh thông thường</li>
            <li>Đau mắt đỏ</li>
          </ul>
          <p>Ngoài ra, bụi bẩn, dầu và các chất bẩn khác trên ngón tay có thể gây ra các vấn đề như tắc nghẽn lỗ chân lông và mụn trứng cá.</p>
          <p>Trong một nghiên cứu, các nhà nghiên cứu cho rằng mọi người chạm vào mặt từ 9 đến 162 lần mỗi giờ. (Ôi trời!) Họ cũng cho biết gần một nửa số lần chạm đó nhắm vào niêm mạc, như mắt, mũi và miệng.</p>
          <p>Nói cách khác, có thể bạn đang chạm vào mặt mình thường xuyên hơn bạn nghĩ - đưa những ngón tay bẩn vào đúng nơi vi khuẩn có thể xâm nhập và cư trú.</p>
          <p>Và rất khó có khả năng bạn rửa tay ở tần suất gần như vậy.</p>

          <h2>Làm thế nào để không chạm vào mặt bạn</h2>
          <p>Việc tránh chạm tay lên mặt có thể nói dễ hơn làm. Suy cho cùng, chạm tay lên mặt là một thói quen. Và cần thời gian và suy nghĩ để thay đổi thói quen này.</p>
          <p>Nhưng điều đó hoàn toàn có thể! Tucker chia sẻ những mẹo sau.</p>

          <h3>Xây dựng nhận thức của bạn</h3>
          <p>Bước đầu tiên để sửa một thói quen như chạm tay vào mặt là nhận ra khi nào bạn đang làm điều đó. Việc chạm tay vào mặt diễn ra thường xuyên trong ngày — hầu hết thời gian chúng ta thậm chí không nhận ra.</p>
          <p>Tucker thừa nhận: "Rất có thể đó là hành vi vô thức hoặc thậm chí là hành vi lo lắng, như việc xoắn tóc vậy".</p>
          <p>Vì vậy, bước đầu tiên để tránh chạm tay vào mặt là nhận thức được khi nào và tần suất bạn làm điều đó.</p>
          <p>Thông thường, chúng ta nhận ra thói quen ở người khác rất lâu trước khi nhìn thấy chúng ở chính mình. Vì vậy, việc bắt đầu bằng cách quan sát cử chỉ của người khác có thể giúp ích. Việc để ý cách thức và thời điểm người khác chạm vào mặt có thể gợi ý cho bạn về thói quen của chính mình.</p>
          <p>Con bạn có chống cằm khi buồn chán không? Sếp bạn có dụi mắt khi họp không? Đồng nghiệp của bạn có ngứa mũi không?</p>
          <p>Và hãy tự hỏi bản thân xem bạn có đang làm như vậy không?</p>

          <h3>Sử dụng mùi hương</h3>
          <p>Nếu tay hoặc cổ tay của bạn có mùi thơm, bạn sẽ dễ nhận thấy hơn khi chúng tiến lại gần mũi (và phần còn lại trên khuôn mặt).</p>
          <p>Hãy thử dùng xà phòng rửa tay hoặc kem dưỡng da có mùi thơm (nếu phù hợp với da bạn). Hoặc thoa một chút nước hoa hoặc kem dưỡng sau khi cạo râu lên gần cổ tay.</p>
          <p>Bằng cách đó, khi bạn bắt đầu xoa bóp, bạn sẽ dễ dàng nhận ra mình đang làm điều đó hơn. Và bạn có thể dừng hành động đó ngay lập tức.</p>

          <h3>Hãy xem xét một chiếc mặt nạ</h3>
          <p>Các nhà nghiên cứu đã chỉ ra rằng việc sử dụng khẩu trang trong thời kỳ đỉnh điểm của đại dịch COVID-19 có liên quan đến việc ít chạm tay vào mặt hơn. Xét cho cùng, nếu mũi và miệng của bạn không dễ dàng tiếp cận, thì việc bạn ít chạm tay vào chúng cũng là điều dễ hiểu.</p>

          <h3>Giữ cho đôi tay của bạn bận rộn</h3>
          <p>Khi bạn không phải đứng dậy, hãy tìm thứ gì đó để nghịch ngợm cho đôi tay bận rộn. Giữ cho đôi tay luôn bận rộn và tập trung vào công việc có thể giúp bạn tránh chạm tay vào mặt.</p>
          <p>Bạn có thể thử:</p>
          <ul>
            <li>Một quả bóng giảm căng thẳng</li>
            <li>Con quay fidget</li>
            <li>Dây thun</li>
            <li>Bút hoặc bút chì</li>
            <li>Đồ chơi nhỏ hoặc thú nhồi bông</li>
            <li>Đá hoặc vỏ sò nhẵn</li>
            <li>Đất sét trị liệu</li>
          </ul>
          <p>Thực sự thì bất cứ thứ gì vừa lòng bàn tay bạn đều có thể có tác dụng ngăn chặn.</p>

          <h3>Thay đổi vị trí của bạn</h3>
          <p>Nếu bạn đang ngồi ở bàn làm việc, hãy tránh đặt khuỷu tay lên bàn. Thay vào đó, hãy giữ khoảng cách giữa tay và mặt.</p>
          <p>Hãy thử ngồi với hai tay đặt dưới bụng. Hoặc khoanh tay trên đùi. Hoặc để tay ở hai bên.</p>
          <p>Tay bạn càng xa thì não bạn càng có nhiều thời gian để nhận biết khi nào tay di chuyển về phía khuôn mặt.</p>

          <h3>Hãy chuẩn bị các phương án thay thế</h3>
          <p>Đôi khi, bạn cần phải gãi ngứa. Hoặc lau sạch lớp vảy ở mắt. Chuyện đó vẫn xảy ra.</p>
          <p>Trong những lúc cần thiết, việc giữ khăn giấy bên mình có thể hữu ích. Hãy dùng khăn giấy như một vật chắn giữa tay và mặt để bạn có thể xử lý công việc mà không cần chạm tay trực tiếp lên mặt.</p>
          <p>Tất nhiên, thỉnh thoảng bạn vẫn sẽ chạm tay vào mặt. Nhưng việc hạn chế chạm tay có thể giúp ích rất nhiều. Việc giữ tay sạch sẽ bằng cách thường xuyên rửa tay bằng xà phòng cũng vậy.</p>
          <p><em>Nhân tiện, trong khoảng thời gian bạn đọc đến đây, có lẽ bạn đã chạm tay vào mặt mình khoảng năm lần. Bạn có để ý không?</em></p>
        </div>
      </motion.section>

      {/* Video Demo */}
      <motion.section
        className="video-section mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Video demo</h2>
        <div className="video-wrapper aspect-w-16 aspect-h-9">
          <video
            src={demoVideo}
            controls
            className="w-full rounded shadow"
          />
        </div>
      </motion.section>
    </div>
  );
}

export default HomePage;
