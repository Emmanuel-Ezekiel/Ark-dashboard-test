import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from './style.module.css';
import Edit from '../../assets/Group 59.svg';
import globe from '../../assets/u_globe.svg';
import Time from '../../assets/access_time.svg';
import plus from '../../assets/fi_plus-circle.svg';
import suit from '../../assets/u_suitcase-alt.svg';
import board from '../../assets/u_create-dashboard.svg';





const SideBar = () => {
  const [ open, setOpen ] = useState(false)
  const [ show, setShow ] = useState(false)
  return (
    <>
      <div className={styles.Sidebar}>
        <div className={styles.SideBarContainer}>
          <div className={styles.SidebarPick}>
          <Link
                    to={"/Patronise"}
                    key={"patronise"}
                  > 
             <div className={styles.patronise} onClick={() => {setOpen(false), setShow(true)}}>
            
                    <span>Patronise</span>
            </div>
            </Link> 
            <Link
                  to={"/"}
                  key={"Home"}
                  > 
           <div className={styles.Bid} onClick={() => {setOpen(true), setShow(false)}}>
                    <span>Bid</span>
           </div>
           </Link> 
          </div>
          {
            open ? ( 
              <>
                  <div className={styles.cateCon}>
                <span>My Categories</span>
                <div>Other-Admin Support
                  Personal/Virtual Assistant
                  Web Research <br />
                  Pro</div>
                <img src={Edit} alt="edit" />
              </div>
              <div className={styles.cateCon2}>
                <div className={styles.visibleCon}>
                 <span>Visibility</span> <img src={Edit} alt="edit"  className={styles.edit}/>
                </div>
                <div className={styles.visibleCon2}>
                <img src={globe} alt="edit"  className={styles.edit2}/> <span>Public</span> 
                </div>
                
              </div>
              <div className={styles.cateCon3}>
                <div className={styles.visibleCon3}>
                 <span>Availability</span> <img src={Edit} alt="edit"  className={styles.edit}/>
                </div>
                <div className={styles.visibleCon4}>
                <img src={Time} alt="edit"  className={styles.edit2}/> <span>More than 30hr/week</span> 
                </div>
              </div>

              <div className={styles.cateCon3}>
                <div className={styles.visibleCon3}>
                 <span>Booth Completion</span> 
                </div>
                <div className={styles.visibleCon5}>
                  <div></div> <div></div> <div></div> <span>100%</span> 
                </div>
                <div className={styles.visibleCon6}>
                <img src={plus} alt="edit"  className={styles.edit6}/> <span>Add Work History</span> 
                </div>
              </div>

              <div className={styles.cateCon3}>
                <div className={styles.visibleCon3}>
                 <span>Inventory</span> 
                </div>
                <div className={styles.visibleCon8}>
                <img src={suit} alt="edit"  className={styles.edit6}/> <span>My Inventory</span> 
                </div>
              </div>

              <div className={styles.cateCon3}>
                <div className={styles.visibleCon3}>
                 <span>Bids</span>
                </div>
                <div className={styles.visibleCon8}>
                <img src={board} alt="edit"  className={styles.edit6}/> <span> 50 available connects</span> 
                </div>
              </div>
              </>
            
            ) : (null) 
          }
          {
            show ? ( 
              <div>
                <h1 style={{ color: "red"}}>hello</h1>
              </div>
            ) : (null)
          }
        </div>
      </div>
    </>
  )
}

export default SideBar;
