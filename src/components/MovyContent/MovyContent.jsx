import cn from "classnames";
import { useRef, useState } from "react";
import data from "../../data.json";
import Tending from "../Tending/Tending";

import styles from "./MovyContent.module.scss";
import { icons } from "../../assets/images";

const MovyContent = () => {
  const [movyData, setMovyData] = useState(
    JSON.parse(localStorage.getItem("Movy")) || data.Featured
  );
  const [openedPlayer, setOpenedPlayer] = useState(false);
  
  const videoRef = useRef();

  const movyTitleImage = require(`../../assets/images/${movyData.TitleImage}`);
  const movyCoverImage = require(`../../assets/images/${movyData.CoverImage}`);
  const movyDuration = movyData.Duration;

  const setData = (itemData) => {
    if (itemData) {
      setMovyData(itemData);
      localStorage.setItem("Movy", JSON.stringify(itemData));
    }
  };

  const toHoursAndMinutes = (movyDuration) => {
    const totalMinutes = Math.floor(movyDuration / 60);
    const seconds = movyDuration % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { h: hours, m: minutes, s: seconds };
  };

  const openPlayer = () => {
    videoRef.current.play();
    setOpenedPlayer(true);
  }

  const closePlayer = () => {
    videoRef.current.pause();
    setOpenedPlayer(false);
  }

  return (
    <div
      className={styles.movycontent}
      style={{ backgroundImage: `url(${movyCoverImage})` }}
    >
      <div className={styles.movycontent__top}>
        <div className={styles.movycontent__inner}>
          <span className={styles.movycontent__type}>{movyData.Category}</span>
          <div className={styles.movycontent__image}>
            <img src={movyTitleImage} alt={movyData.Title} />
          </div>
          <div className={styles.movycontent__info}>
            <span className={styles.movycontent__year}>
              {movyData.ReleaseYear}
            </span>
            <span className={styles.movycontent__mpa}>
              {movyData.MpaRating}
            </span>
            <span className={styles.movycontent__duration}>
              {toHoursAndMinutes(movyDuration).h > 0 &&
                toHoursAndMinutes(movyDuration).h + "h"}{" "}
              {toHoursAndMinutes(movyDuration).m}m
            </span>
          </div>
          <p className={styles.movycontent__description}>
            {movyData.Description}
          </p>
          <div className={styles.movycontent__actions}>
            <button className={styles.movycontent__play} onClick={openPlayer}>
              <img src={icons.IconPlay} alt="play" />
              Play
            </button>
            <button className={styles.movycontent__more_info}>More Info</button>
          </div>
        </div>
      </div>
      <Tending TendingNow={data.TendingNow} setData={setData} />

      <div className={cn(styles.movycontent__player, {[styles.movycontent__player_opened]: openedPlayer })}>
        <span className={styles.movycontent__player_close} onClick={closePlayer} />
        <div className={styles.movycontent__player_inner}>
          <video src={movyData.VideoUrl} ref={videoRef} />
        </div>
      </div>
    </div>
  );
};

export default MovyContent;
