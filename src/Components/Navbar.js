import styles from '../ComponentsStyles/Navbar.module.css'
import { redditIcon, searchIcon } from '../Icons';
import ToggleSwitch from './ToggleSwitch';
function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img className={styles.logoIcon} src={redditIcon} alt='Reddit Icon'/>
                <span className='logoFont'><span className={styles.logoColor}>Reddit</span>Minimal</span>
            </div>
            <form className={styles.formNav}>
                <input className={styles.formInput} type='text' placeholder='Search'/>
                <button className={styles.searchBTNContainer} type='submit'><img className={styles.searchBTN} src={searchIcon} alt='Search Icon'/></button>
            </form>
            <div className={styles.toggleContainer}>
                <ToggleSwitch />
            </div>    
        </nav>
    );
};

export default Navbar;