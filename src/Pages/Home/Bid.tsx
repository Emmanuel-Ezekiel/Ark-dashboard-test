import React from 'react'
import styles from "./style.module.css";
import Search from '../../assets/Vector10.svg';
import ThumbDown  from '../../assets/thumb_down.svg';
import Love from '../../assets/Vector 2.svg';
import Star from '../../assets/Star 5.svg';
import check from '../../assets/fi_check-circle.svg';
import Location from '../../assets/u_location-point.svg';
import { links } from '../../Components/Data';

const Bid = () => {
  return (
    <div className={styles.home}>
      <div  className={styles.search}>
        <input type="text" placeholder='Search Request'/>
        <div className={styles.searchIcon}> <img src={Search} alt="" /></div>
      </div>
      <div className={styles.Ads}>
      <span>Advanced Search</span>
      </div>

      <div className={styles.button}>
        <div>Sort</div>
        <button>Best Match</button>
        <button>Most Recent</button>
      </div>
      <div className={styles.timeContain}>
      { links.map((item) => (
        <>
        <div className={styles.timeline} key={item.id}>
        <div className={styles.timelineHead}>
          <span>{item.header}</span>
          <div className={styles.Icon}>
            <div><img src={ThumbDown} alt="" /></div>
            <div><img src={Love} alt="" /></div>
          </div>
        </div>
        <div className={styles.List}>
          <p> {item.hourly}
           </p>
        </div>
        <div className={styles.List}>
          <p>{item.content}
          </p>
        </div>

      <div className={styles.button2}>
        {
          item.socials.map((social) => (
            <>
              <button>{social.instagram}</button>
              <button>{social.MediaImagery}</button>
              <button>{social.GraphicDesign}</button>
              <button>{social.Photoshop}</button>
            </>
          ))
        }
      </div>

      <div  className={styles.proposal}>{item. Proposals}</div>

      <div className={styles.review}>
        <div  className={styles.verifed }>
          <img src={check} alt="" />
          <span>{item.Payment}</span>
        </div>

        <div className={styles.star}>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>

        <span>{item.spent}</span>

        <div className={styles.location}>
          <img src={Location} alt="" />
          <span>{item.country}</span>
        </div>

      </div>

      </div>
        </>
      ))}
          </div>
   
    </div>
  )
}

export default Bid;
