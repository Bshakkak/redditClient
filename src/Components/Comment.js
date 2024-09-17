import styles from '../ComponentsStyles/Comments.module.css';
import ReactMarkdown from 'react-markdown';

function Comment({id, icon, name, time, comment, mode}){
    return(
        <div key={id} className={!mode ? styles.singleComment : styles.singleCommentDark}>
            <div className={!mode ? styles.singleUpper : styles.singleUpperDark}>
                <div>
                    {/* <img src={icon} alt={name}/> */}
                    <span>{name}</span>
                </div>
                <span className={!mode ? styles.timeComment : styles.timeCommentDark}>{time}</span>
            </div>
                <div className={!mode ? styles.singleLower : styles.singleLowerDark}>
                    <ReactMarkdown>
                        {comment}
                    </ReactMarkdown>
                    {/* <p className={styles.commentText}>{comment}</p> */}
                </div>
        </div>
    );
};

export default Comment;