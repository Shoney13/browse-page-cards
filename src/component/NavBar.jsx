import React from "react";
import styles from "./NavBar.module.css";
import logo from "../assets/beyond-exams-logo.svg";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProfileIcon from "./ProfileIcon";
const NavBar = () => {
  return (
    <div className={styles.navBarMain}>
      <img src={logo} alt="Beyond Exam Logo" />
      <div className={styles.navSearchArea}>
        <button className={styles.navSearchButton}>
          <SearchIcon/>
        </button>
        <button className={styles.navCourseButton}>Courses</button>
        <span className={styles.navBarServices}>
          Our Services
          <KeyboardArrowDownIcon/>
        </span>
        <ProfileIcon/>
      </div>
    </div>
  );
};

export default NavBar;
