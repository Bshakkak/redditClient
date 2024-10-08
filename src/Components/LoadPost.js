import Post from "./Post";
import styles from '../ComponentsStyles/LoadPost.module.css'
function LoadPost({mode}){
    return(
        <>
            <div className={!mode ? styles.loadPostContainer : styles.loadPostContainerDark}>
                <div className={styles.loadBuffer}>
                    <div className={styles.dummyHolder}>
                        <Post hide={true}/>
                    </div>
                </div>
            </div>
            <div className={!mode ? styles.loadPostContainer : styles.loadPostContainerDark}>
                <div className={styles.loadBuffer}>
                    <div className={styles.dummyHolder}>
                        <Post hide={true}/>
                    </div>
                </div>
            </div>
            <div className={!mode ? styles.loadPostContainer : styles.loadPostContainerDark}>
                <div className={styles.loadBuffer}>
                    <div className={styles.dummyHolder}>
                        <Post hide={true}/>
                    </div>
                </div>
            </div>
            <div className={!mode ? styles.loadPostContainer : styles.loadPostContainerDark}>
                <div className={styles.loadBuffer}>
                    <div className={styles.dummyHolder}>
                        <Post hide={true}/>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default LoadPost;