import styles from '../ComponentsStyles/Post.module.css';
import { postExample } from '../Images';
function Post(props){
    return(
        <>
            <article className={styles.postContainer}>
                <div className={styles.upperPost}>
                    <h2>First pic of Mussolini after an assassination attempt during a rally. The bullet grazed his nose</h2>
                    <div className={styles.votesSection}></div>
                    <div className={styles.mainPostContent}>
                        <img src={postExample} alt='post example' className={styles.postImage}/>
                    </div>
                </div>
                <footer></footer>
            </article>
        </>
    );
};

export default Post;