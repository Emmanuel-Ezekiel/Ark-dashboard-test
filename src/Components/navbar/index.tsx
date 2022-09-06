import React from 'react';
import  styles from './style.module.css';
import Ark from '../../assets/Boothhrak logo white 1.svg';
import Asset from '../../assets/Asset Icon 1.svg';
import Account from '../../assets/Account Icon 1.svg';
import Layer from '../../assets/Layer_x0020_1.svg';
import Elip from '../../assets/Ellipse 3.svg';
import Chat from '../../assets/Vector chat.svg';
import Profile from '../../assets/Vector profile.svg';
import Box from '../../assets/9 squares Icon 1.svg';
import Search from '../../assets/Vector search.svg';
import { HiBell } from 'react-icons/hi';


const Navbar = () => {
  return (
    <>
      <header>
            <nav>
            <div className={styles.work}>
                <div className={styles.ark}>
                    <img src={Ark} alt="ark" />
                    <span>Ark</span>
                </div>
                <div  className={styles.asset}>
                    <img src={Asset} alt="asset" />
                    <span>Asset</span>
                    <img src={Layer} alt="layer" />
                </div>
                <div className={styles.account}>
                    <img src={Account} alt="account" />
                    <span>Account</span>
                </div>
            </div>
            <div className={styles.navCate}>
                <div className={styles.InputSearch}>
                  <input type="text" placeholder='Search'/> <img src={Search} alt="" />
                </div>
                <div className={styles.notify} >
                    <HiBell className={styles.bell}/>
                    <div className={styles.elips}><img src={Elip} alt="bell" /></div>
                </div>
                <div className={styles.chats} >
                    <img src={Chat} alt="user" />
                    <div className={styles.elips2}><img src={Elip} alt="elip" /></div>
                </div>
                <div className={styles.Boxs}>
                    <img src={Box} alt="box" />
                    <img src={Layer} alt="box" />
                </div>
                <div className={styles.user}>
                    <img src={Profile} alt="user" />
                    <img src={Layer} alt="user" />
                </div>
            </div>
            </nav>
      </header>
    </>
  )
}

export default Navbar;
