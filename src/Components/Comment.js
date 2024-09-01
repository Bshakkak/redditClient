import styles from '../ComponentsStyles/Comments.module.css';

function Comment({id, icon, name, time, comment, mode}){
    return(
        <div key={id} className={!mode ? styles.singleComment : styles.singleCommentDark}>
            <div className={!mode ? styles.singleUpper : styles.singleUpperDark}>
                <div>
                    <img src={icon} alt={name}/>
                    <span>{name}</span>
                </div>
                <span className={!mode ? styles.timeComment : styles.timeCommentDark}>{time} hours ago</span>
            </div>
                <div className={!mode ? styles.singleLower : styles.singleLowerDark}>
                    {comment}
                </div>
        </div>
    );
};

export default Comment;