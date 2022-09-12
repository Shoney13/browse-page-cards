import React from "react";
import styles from "./CourseCard.module.css";
const CourseCard = (props) => {
  return (
    <div className={styles.courseCard}>
      <div style={{backgroundImage: `url(${props.src})`}} className={styles.courseCardImage} />
      <p className={styles.courseCardTitle}>{props.title}</p>
      <p className={styles.courseCardDetails}>{props.video_count} courses</p>
    </div>
  );
};

export default CourseCard;
