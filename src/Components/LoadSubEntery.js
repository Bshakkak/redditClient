import styles from '../ComponentsStyles/LoadSubEntery.module.css';
import { subredditIcon } from '../Icons';

function LoadSubEntery(props){
    return(
        <>
        <li key={props.id} className={styles.subEnteryContainer}>
            <div className={styles.loadBuffer}>
                <div className={styles.subIcon} style={{border: `4px solid white`}}>
                    <img src={subredditIcon} alt={props.name} className={styles.subIconImage}/>
                </div>
                <span style={{visibility: 'hidden'}}>{props.name}</span>
            </div>
        </li>
        </>
    );
};

export default LoadSubEntery;