import styles from '../ComponentsStyles/Homepage.module.css';
import Subreddits from './Subreddits';
function Homepage({activeSide}){
    return(
        <main className={styles.homepageContainer}>
            <Subreddits activeSide={activeSide}/>
        </main>
    );
};

export default Homepage;