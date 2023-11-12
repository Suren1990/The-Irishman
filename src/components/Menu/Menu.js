import styles from "./Menu.module.scss";
import { images, icons } from "../../assets/images";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__user}>
        <div className={styles.menu__user_image}>
          <img src={images.UserImage} alt="User Daniel" />
        </div>
        <span className={styles.menu__user_name}>Daniel</span>
      </div>
      <nav className={styles.menu__nav}>
        <a href="/" className={styles.menu__item} rel="noreferrer">
          <img src={icons.IconSearch} alt="icon search" />
          <span className={styles.menu__item_text}>Search</span>
        </a>
        <a
          href="/"
          className={`${styles.menu__item} ${styles.menu__item_active}`}
          rel="noreferrer"
        >
          <img src={icons.IconHome} alt="icon home" />
          <span className={styles.menu__item_text}>Home</span>
        </a>
        <a href="/" className={styles.menu__item} rel="noreferrer">
          <img src={icons.IconTVShows} alt="icon tv shows" />
          <span className={styles.menu__item_text}>TV Shows</span>
        </a>
        <a href="/" className={styles.menu__item} rel="noreferrer">
          <img src={icons.IconMovies} alt="icon movies" />
          <span className={styles.menu__item_text}>Movies</span>
        </a>
        <a href="/" className={styles.menu__item} rel="noreferrer">
          <img src={icons.IconGenres} alt="icon genres" />
          <span className={styles.menu__item_text}>Genres</span>
        </a>
        <a href="/" className={styles.menu__item} rel="noreferrer">
          <img src={icons.IconWatchLater} alt="icon watch later" />
          <span className={styles.menu__item_text}>Watch Later</span>
        </a>
      </nav>
      <div className={styles.menu__more}>
        <span className={styles.menu__more_item}>LANGUAGE</span>
        <span className={styles.menu__more_item}>GET HELP</span>
        <span className={styles.menu__more_item}>EXIT</span>
      </div>
    </div>
  );
};

export default Menu;
