import styles from '../ComponentsStyles/Comments.module.css';

function Comment({id, icon, name, time, comment}){
    return(
        <div key={id} className={styles.singleComment}>
            <div className={styles.singleUpper}>
                <div>
                    <img src={icon} alt={name}/>
                    <span>{name}</span>
                </div>
                <span className={styles.timeComment}>{time} hours ago</span>
            </div>
                <div className={styles.singleLower}>
                    {comment}
                </div>
        </div>
    );
};

export default Comment;