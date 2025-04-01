import React from 'react';
import styles from './styles.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from '@docusaurus/Link';
export default function HomepageAboutme(): JSX.Element {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.maintitle}>
          <div className={styles.text}>
            About Me <span className={styles.spinningStar}>⭐</span>
          </div>
          <div className={styles.description}>
            Xin chào! Mình là Lê Huỳnh Đức
          </div>
        </div>

        <div className={styles.maincontent}>
          <div className={styles.item}>
            <Link className={styles.imagecover} to="https://www.linkedin.com/in/lhduc94">
              <img src="https://i.pinimg.com/1200x/94/8c/1d/948c1d9c51227296803919f227eb4cdf.jpg" alt="Avatar" />
            </Link>
            <div className={styles.desc}>
              <p>Mình có hơn 8 năm kinh nghiệm Data Scientist </p>
              <p>Các mảng như Tài chính Phân tích hành vi người dùng trên app</p>
              <p>Ngoài ra mình còn xây dựng các hệ thống khuyến nghị nội dung cho người dùng</p>
              <p>Mình cũng giúp tăng CTR và Revenue cho công ty nhờ vào Quảng cáo đúng mục tiêu</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/lhduc94" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/lhduc94/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 