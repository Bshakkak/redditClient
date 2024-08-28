import styles from '../ComponentsStyles/Post.module.css';
import { ArrowUp, commentIcon } from '../Icons';
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
                            {!props.hide && <ArrowUp width={'2.2rem'} height={'2rem'} color={arrowsColor[0]}/>}
                        </button>
                        <span className={styles.votesMeter} style={{color: arrowsColor[2]}}>{props.votes}</span>
                        <button type='submit' className={styles.downvoteBTN} onClick={handleDownvote}>
                           {!props.hide && <ArrowUp width={'2.2rem'} height={'2rem'} color={arrowsColor[1]} style={{transform: 'rotate(180deg)'}}/>}
                        </button>
                    </form>
                    <div className={styles.mainPostContent}>
                        <h2>{props.title}</h2>
                        {/* votes tablet*/}
                        <div className={styles.votesSection2Container}>
                            <form className={styles.votesSection2} onSubmit={handleSubmit}>
                                <button type='submit' className={styles.upvoteBTN} onClick={handleUpvote}>
                                    {!props.hide && <ArrowUp width={'1.2rem'} height={'1.2rem'} color={arrowsColor[0]}/>}
                                </button>
                                <span className={styles.votesMeter} style={{color: arrowsColor[2]}}>{props.votes}</span>
                                <button type='submit' className={styles.downvoteBTN} onClick={handleDownvote}>
                                    {!props.hide && <ArrowUp width={'1.2rem'} height={'1.2rem'} color={arrowsColor[1]} style={{transform: 'rotate(180deg)'}}/>}
                                </button>
                            </form>
                        </div>
                        
                        {/* end votes tablet*/}
                        <img src={props.image} alt='post example' className={styles.postImage}/>
                        <footer className={styles.creatorSection}>
                            <div className={styles.postOwner}>
                                {!props.hide && <img src={props.profile} alt='profile'/>}
                                <span>{props.profileName}</span>
                            </div>
                            <div className={styles.creationTime}>
                                <span>{props.postTime}</span>
                            </div>
                            <div className={styles.commentsHolder} onClick={() => setShowComments(prev => !prev)}
                                style={showComments? {backgroundColor: 'rgb(170, 170, 253)'}:{}}>
                               {!props.hide && <img src={commentIcon} alt='comment'/>}
                               <span>{props.commentsNumber}</span>
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