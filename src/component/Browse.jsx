import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Browse.module.css";
import CourseCard from "./CourseCard";
const Browse = () => {
  const [activeCards, setActiveCards] = useState(1);
  const [browseData, setBrowseData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.beyondexams.org/api/v1/get_next_level_topics?level=1&parent_id=0"
      )
      .then((response) => {
        console.log(response.data.data.data);
        setBrowseData(response.data.data.data);
      });
  }, []);

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
      <div className={styles.browseCards}>
        {browseData.length > 0 &&
          browseData.map((card, index) => (
            <CourseCard src={card.image_url} title={card.title} video_count={card.num_topics} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Browse;
