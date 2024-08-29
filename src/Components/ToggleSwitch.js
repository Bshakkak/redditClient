
import styles from '../ComponentsStyles/ToggleSwitch.module.css';
import { lightIcon, darkIcon } from '../Icons';

function ToggleSwitch(props){
    return (
        <>
            <button className={`${props.className} ${styles.toggleBTN} ${props.mode ? styles.toggled:""}`} 
            onClick={()=> {props.setMode(props.mode); 
            props.mode? localStorage.setItem("rcMode", "light") : localStorage.setItem("rcMode", "dark")}}>
                <div className={styles.thumb}>
                    <img className={styles.modeIcon}
                    src={!props.mode? lightIcon: darkIcon} 
                    alt={!props.mode? 'light mode':'dark mode'}/>
                </div>
            </button>
        </>
    );
};

export default ToggleSwitch;