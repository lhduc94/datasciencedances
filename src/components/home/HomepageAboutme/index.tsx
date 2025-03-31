import React from 'react';
import styles from './styles.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomepageAboutme(): JSX.Element {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.maintitle}>
          <div className={styles.text}>
            About Me <span className={styles.spinningStar}>⭐</span>
          </div>
          <div className={styles.description}>
            Xin chào! Mình là Đức
          </div>
        </div>

        <div className={styles.maincontent}>
          <div className={styles.item}>
            <div className={styles.imagecover}>
              <img src="https://i.pinimg.com/1200x/94/8c/1d/948c1d9c51227296803919f227eb4cdf.jpg" alt="Avatar" />
            </div>
            <div className={styles.desc}>
              Mình là một Data Scientist với 8 năm kinh nghiệm
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