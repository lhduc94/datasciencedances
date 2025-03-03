import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.scss';

export default function Contact(): JSX.Element {
  return (
    <Layout
      title="Liên hệ"
      description="Thông tin liên hệ và giới thiệu về tôi"
    >
      <div className={styles.contactContainer}>
        <div className={styles.profileSection}>
          <img 
            src="/img/avatar.jpg" 
            alt="Avatar" 
            className={styles.avatar}
          />
          <h1>Lê Huỳnh Đức</h1>
          <p className={styles.title}>Data Scientist | MLOps Engineer</p>
        </div>

        <div className={styles.aboutSection}>
          <h2>Về tôi</h2>
          <p>
            Xin chào! Tôi là một Data Scientist với niềm đam mê về phân tích dữ liệu và machine learning.
            Tôi có X năm kinh nghiệm trong lĩnh vực khoa học dữ liệu, đặc biệt là về xử lý dữ liệu lớn,
            phát triển các mô hình machine learning và deep learning.
          </p>
        </div>

        <div className={styles.skillsSection}>
          <h2>Kỹ năng</h2>
          <div className={styles.skillsList}>
            <span>Python</span>
            <span>TensorFlow</span>
            <span>PyTorch</span>
            <span>Scikit-learn</span>
            <span>SQL</span>
            <span>Data Visualization</span>
            <span>Machine Learning</span>
            <span>Deep Learning</span>
            {/* Thêm các kỹ năng khác */}
          </div>
        </div>

        <div className={styles.experienceSection}>
          <h2>Kinh nghiệm làm việc</h2>
          <div className={styles.experienceItem}>
            <h3>Data Scientist - Công ty ABC</h3>
            <p className={styles.duration}>01/2020 - Hiện tại</p>
            <ul>
              <li>Phát triển và triển khai các mô hình machine learning cho dự đoán hành vi khách hàng</li>
              <li>Xây dựng pipeline xử lý dữ liệu tự động với công nghệ Apache Airflow</li>
              <li>Tối ưu hóa hiệu suất các mô hình, cải thiện độ chính xác lên 25%</li>
            </ul>
          </div>
          
          <div className={styles.experienceItem}>
            <h3>ML Engineer - Công ty XYZ</h3>
            <p className={styles.duration}>06/2018 - 12/2019</p>
            <ul>
              <li>Phát triển các giải pháp computer vision cho nhận dạng đối tượng</li>
              <li>Triển khai các mô hình ML trên nền tảng cloud</li>
              <li>Tối ưu hóa quy trình MLOps để giảm thời gian triển khai</li>
            </ul>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h2>Liên hệ</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:lhduc94@gmail.com">lhduc94@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <i className="fa-brands fa-github"></i>
              <a href="https://github.com/lhduc94" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className={styles.contactItem}>
              <i className="fa-brands fa-linkedin"></i>
              <a href="https://linkedin.com/in/lhduc94" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}