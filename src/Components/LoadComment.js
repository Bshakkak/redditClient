import styles from '../ComponentsStyles/LoadComments.module.css';

function LoadComment(){
    return(
        <div className={styles.commentsContainer}>
            <div className={styles.singleComment}/>
            <div className={styles.singleComment}/>
            <div className={styles.singleComment}/>
            <div className={styles.singleComment}/>
        </div>
    );
};

export default LoadComment;