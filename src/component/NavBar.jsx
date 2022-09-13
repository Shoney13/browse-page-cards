import React, { useState } from "react";
import styles from "./NavBar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProfileIcon from "./ProfileIcon";
const NavBar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <div className={`${styles.navBarMain} ${isSearchActive ? styles.navSearchActive :''}`}>
      <div className={styles.navBarLogo} />
      <div className={`${styles.navSearchArea} ${isSearchActive ? styles.navSearchActive :''}`}>
          <input type="text" className={`${styles.navSearchInput} ${isSearchActive ? styles.navSearchActive :''}`} value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='What would you like to learn?'/>
        <button className={`${styles.navSearchButton} ${isSearchActive ? styles.navSearchActive :''}`} onClick={()=>setIsSearchActive(prevState=>!prevState)}>
          <SearchIcon/>
        </button>
        <button className={`${styles.navCourseButton} ${isSearchActive ? styles.navSearchActive :''}`}>Courses</button>
        <span className={`${styles.navBarServices} ${isSearchActive ? styles.navSearchActive :''}`}>
          Our Services
          <KeyboardArrowDownIcon/>
        </span>
      </div>
        <ProfileIcon/>
    </div>
  );
};

export default NavBar;
