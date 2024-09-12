import Post from "./Post";
import styles from '../ComponentsStyles/LoadPost.module.css';

function ErrorPost({mode}){
    return(
    <>
        <div className={!mode ? styles.loadPostContainer : styles.loadPostContainerDark}>
                <div className={styles.loadBufferError}>
                    <div className={styles.dummyHolder}>
                        <div className={styles.dummyError}>
                            <span>Something went wrong!</span>
                        </div>
                        <Post hide={true}/>
                    </div>
                </div>
        </div>
    </>
    );
};

export default ErrorPost