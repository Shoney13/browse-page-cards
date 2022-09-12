import React, { useState } from "react";
import styles from "./Browse.module.css";
const Browse = () => {
  const [activeCards, setActiveCards] = useState(1);
  return (
    <div className={styles.browsePage}>
      <div className={styles.courseSelector}>
        <button
          className={`${styles.activeCard} ${
            activeCards === 1 && styles.active
          }`}
          onClick={() => setActiveCards(1)}
        >
          Learn A Skill
        </button>
        <button
          className={`${styles.activeCard} ${
            activeCards === 0 && styles.active
          }`}
          onClick={() => setActiveCards(0)}
        >
          Revise Your Syllabus
        </button>
      </div>
    </div>
  );
};

export default Browse;
