import styles from '../ComponentsStyles/Contents.module.css';
import Post from './Post';
function Contents(props){
    return(
        <section className={styles.contentsContainer}>
           <Post />
           <Post />
        </section>
    );
};

export default Contents;