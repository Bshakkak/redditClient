import styles from '../ComponentsStyles/Post.module.css';
import { postExample } from '../Images';
import { ArrowUp, commentIcon, subredditIcon } from '../Icons';
import { useState } from 'react';
import Comments from './Comments';

function Post(props){
    const [arrowsColor, setArrowsColor] = useState(['#5f5f5f','#5f5f5f','#5f5f5f']);
    const [showComments, setShowComments] = useState(false);
    const handleUpvote = () =>{
        if(arrowsColor[0] === '#5f5f5f'){
            setArrowsColor(['green','#5f5f5f', 'green']);
        }else if(arrowsColor[0] === 'green'){
            setArrowsColor(['#5f5f5f','#5f5f5f', '#5f5f5f']);
        }
    }
    const handleDownvote = () =>{
        if(arrowsColor[1] === '#5f5f5f'){
            setArrowsColor(['#5f5f5f','red', 'red']);
        }else if(arrowsColor[1] === 'red'){
            setArrowsColor(['#5f5f5f','#5f5f5f', '#5f5f5f']);
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <>
            <article className={styles.postContainer}>
                <div className={styles.upperPost}>
                    <form className={styles.votesSection} onSubmit={handleSubmit}>
                        <button type='submit' className={styles.upvoteBTN} onClick={handleUpvote}>
                            <ArrowUp width={'2.2rem'} height={'2rem'} color={arrowsColor[0]}/>
                        </button>
                        <span className={styles.votesMeter} style={{color: arrowsColor[2]}}>18.7k</span>
                        <button type='submit' className={styles.downvoteBTN} onClick={handleDownvote}>
                            <ArrowUp width={'2.2rem'} height={'2rem'} color={arrowsColor[1]} style={{transform: 'rotate(180deg)'}}/>
                        </button>
                    </form>
                    <div className={styles.mainPostContent}>
                        <h2>First pic of Mussolini after an assassination attempt during a rally. The bullet grazed his nose</h2>
                        <img src={postExample} alt='post example' className={styles.postImage}/>
                        <footer className={styles.creatorSection}>
                            <div className={styles.postOwner}>
                                <img src={subredditIcon} alt='profile'/>
                                <span>Creator</span>
                            </div>
                            <div className={styles.creationTime}>
                                <span>x hours</span>
                            </div>
                            <div className={styles.commentsHolder} onClick={() => setShowComments(prev => !prev)}
                                style={showComments? {backgroundColor: 'rgb(170, 170, 253)'}:{}}>
                               <img src={commentIcon} alt='comment'/>
                               <span>777</span>
                            </div>
                        </footer>
                    {showComments && <Comments />}
                    </div>
                </div>
                
            </article>
        </>
    );
};

export default Post;