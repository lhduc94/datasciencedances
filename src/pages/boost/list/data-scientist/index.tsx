import React, { Component, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.scss';
import data from "./skills-data.json";

interface Course {
  title: string;
  url: string;
  type: 'free' | 'paid';
}

interface Section {
  title: string;
  content: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface Skill {
  id: string;
  title: string;
  image: string;
  description: string;
  sections: Section[];
  courses: Course[];
}
const dataSkills: Skill[] = data;

export default function DataScientistSkills(): JSX.Element {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <Layout title="Data Scientist Skills">
      <div className={styles.container}>
        <h1 className={styles.title}>Data Scientist Skills Roadmap</h1>
        
        <div className={styles.content}>
          {/* Main Skills Grid */}
          <div className={styles.skillsGrid}>
            {dataSkills.map((skill) => (
              <div
                key={skill.id}
                className={`${styles.skillCard} ${selectedSkill?.id === skill.id ? styles.active : ''}`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill.image && (
                  <div className={styles.skillImage}>
                    <img src={skill.image} alt={skill.title} />
                  </div>
                )}
                <div className={styles.skillContent}>
                  <h3>{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Detail View */}
          {selectedSkill && (
            <>
              <div className={styles.overlay} />
              <div className={styles.skillDetail}>
                <div className={styles.detailHeader}>
                  <div className={styles.headerContent}>
                    <h1>{selectedSkill.title}</h1>
                    <p className={styles.description}>{selectedSkill.description}</p>
                  </div>
                  <button 
                    className={styles.closeButton}
                    onClick={() => setSelectedSkill(null)}
                  >
                    ×
                  </button>
                </div>
                <div className={styles.detailContent}>
                  <div className={styles.description}>
                    {selectedSkill.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className={styles.section}>
                        <div className={styles.sectionHeader}>
                          <h3 className={styles.sectionTitle}>{section.title}</h3>
                          <span className={`${styles.levelBadge} ${styles[section.level.toLowerCase()]}`}>
                            {section.level}
                          </span>
                        </div>
                        <ul className={styles.sectionContent}>
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {selectedSkill.courses.length > 0 && (
                    <div className={styles.courseList}>
                      <h4>Khóa học tham khảo:</h4>
                      <div className={styles.courses}>
                        {selectedSkill.courses.map((course, courseIndex) => (
                          <a 
                            key={courseIndex}
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.courseLink} ${styles[course.type]}`}
                          >
                            {course.title}
                            <span className={styles.courseTag}>{course.type}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
