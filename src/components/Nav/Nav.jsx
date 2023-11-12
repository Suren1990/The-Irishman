import styles from "./Nav.module.scss";
import { icons } from "../../assets/images";
import Menu from "../Menu/Menu";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__inner}>
        <span className={styles.nav__item}>
          <img src={icons.IconSearch} alt="icon search" />
        </span>
        <span className={`${styles.nav__item} ${styles.nav__item_active}`}>
          <img src={icons.IconHome} alt="icon home" />
        </span>
        <span className={styles.nav__item}>
          <img src={icons.IconTVShows} alt="icon tv shows" />
        </span>
        <span className={styles.nav__item}>
          <img src={icons.IconMovies} alt="icon movies" />
        </span>
        <span className={styles.nav__item}>
          <img src={icons.IconGenres} alt="icon genres" />
        </span>
        <span className={styles.nav__item}>
          <img src={icons.IconWatchLater} alt="icon watch later" />
        </span>
        <div className={styles.nav__menu}>
          <Menu />
        </div>
      </div>
      <div className={styles.nav__shadow}></div>
    </nav>
  );
};

export default Nav;
