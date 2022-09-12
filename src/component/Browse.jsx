import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Browse.module.css";
import CourseCard from "./CourseCard";
const Browse = () => {
  const [activeCards, setActiveCards] = useState(1);
  const [skillData, setSkillData] = useState([]);
  const [syllabusData, setSyllabusData] = useState([]);
  useEffect(() => {
    if (activeCards === 1) {
      if (skillData.length === 0)
        axios
          .get(
            "https://api.beyondexams.org/api/v1/get_next_level_topics?level=1&parent_id=0"
          )
          .then((response) => {
            // console.log(response.data.data.data);
            setSkillData(response.data.data.data);
          });
    } else {
      if (syllabusData.length === 0)
        axios
          .get(
            "https://api.beyondexams.org/api/v1/get_courses?level=1&parent_id=0"
          )
          .then((response) => {
            // console.log(response.data.data.courses.data);
            setSyllabusData(response.data.data.courses.data);
          });
    }
  }, [activeCards]);

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
        {activeCards === 1 ? (
          skillData.length > 0 ? (
            skillData.map((card, index) => (
              <CourseCard
                src={card.image_url}
                title={card.title}
                video_count={card.num_topics}
                key={index}
              />
            ))
          ) : (
            <>Loading</>
          )
        ) : syllabusData.length > 0 ? (
          syllabusData.map((card, index) => (
            <CourseCard
              src={card.image_url}
              title={card.title}
              video_count={card.num_categories}
              key={index}
            />
          ))
        ) : (
          <>Loading</>
        )}
      </div>
    </div>
  );
};

export default Browse;
