import React, { useState } from "react";
import styles from "./ProfileIcon.module.css";
const ProfileIcon = () => {
  const [profileType, setProfileType] = useState("S");
  return (
    <div
      className={`${styles.profileIcon} ${
        profileType === "S" ? styles.student : styles.teacher
      }`}
      onClick={() =>
        setProfileType((prevState) => (prevState === "S" ? "T" : "S"))
      }
    >
      <span
        className={`${styles.profileTypeIcon} ${
          profileType === "S" ? styles.student : styles.teacher
        }`}
      >
        {profileType}
      </span>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Profile"
        className={styles.profileIconImg}
      />
    </div>
  );
};

export default ProfileIcon;
