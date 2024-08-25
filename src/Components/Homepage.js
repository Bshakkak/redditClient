import styles from '../ComponentsStyles/Homepage.module.css';
import Subreddits from './Subreddits';
function Homepage(props){
    return(
        <main className={styles.homepageContainer}>
            <Subreddits />
        </main>
    );
};

export default Homepage;