import styles from '../ComponentsStyles/Homepage.module.css';
import Subreddits from './Subreddits';
import Contents from './Contents';
function Homepage({activeSide, mode, modeValue = f => f}){
    return(
        <main className={styles.homepageContainer}>
            <Subreddits activeSide={activeSide} mode={mode} modeValue={modeValue}/>
            <Contents />
        </main>
    );
};

export default Homepage;