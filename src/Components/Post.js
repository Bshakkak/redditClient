import styles from '../ComponentsStyles/Post.module.css';
import { ArrowUp, commentIcon } from '../Icons';
import { useState, useEffect } from 'react';
import Comments from './Comments';

function Post(props){
    const [arrowsColor, setArrowsColor] = useState(() => {
        let mode = window.localStorage.getItem('rcMode');
        return mode === 'light' ? ['#5f5f5f','#5f5f5f','#5f5f5f'] : ['white', 'white', 'white'];
    });

    useEffect(()=>{
        !props.mode ? setArrowsColor(['#5f5f5f','#5f5f5f','#5f5f5f']) : setArrowsColor(['white', 'white', 'white'])
    },[props.mode]);

    const [showComments, setShowComments] = useState(false);
    const handleUpvote = () =>{
        if(!props.mode){
        if(arrowsColor[0] === '#5f5f5f'){
            setArrowsColor(['green','#5f5f5f', 'green']);
        }else if(arrowsColor[0] === 'green'){
            setArrowsColor(['#5f5f5f','#5f5f5f', '#5f5f5f']);
        }}
        else{
            if(arrowsColor[0] === 'white'){
                setArrowsColor(['lightgreen','white', 'lightgreen']);
            }else if(arrowsColor[0] === 'lightgreen'){
                setArrowsColor(['white','white', 'white']);
            }
        }
    }
    const handleDownvote = () =>{
        if(!props.mode){
        if(arrowsColor[1] === '#5f5f5f'){
            setArrowsColor(['#5f5f5f','red', 'red']);
        }else if(arrowsColor[1] === 'red'){
            setArrowsColor(['#5f5f5f','#5f5f5f', '#5f5f5f']);
        }}
        else{
            if(arrowsColor[1] === 'white'){
                setArrowsColor(['white','#f36161', '#f36161']);
            }else if(arrowsColor[1] === '#f36161'){
                setArrowsColor(['white','white', 'white']);
            } 
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <>
            <article className={props.mode ? styles.postContainerDark : styles.postContainer}>
                <div className={styles.upperPost}>
                    <form className={styles.votesSection} onSubmit={handleSubmit}>
                        <button type='submit' className={!props.mode ? styles.upvoteBTN : styles.upvoteBTNDark} onClick={handleUpvote}>
                            {!props.hide && <ArrowUp width={'2.2rem'} height={'2rem'} color={arrowsColor[0]}/>}
                        </button>
                        <span className={styles.votesMeter} style={{color: arrowsColor[2]}}>{props.votes}</span>
                        <button type='submit' className={!props.mode ? styles.downvoteBTN : styles.downvoteBTNDark} onClick={handleDownvote}>
                           {!props.hide && <ArrowUp width={'2.2rem'} height={'2rem'} color={arrowsColor[1]} style={{transform: 'rotate(180deg)'}}/>}
                        </button>
                    </form>
                    <div className={styles.mainPostContent}>
                        <h2>{props.title}</h2>
                        {/* votes tablet*/}
                        <div className={styles.votesSection2Container}>
                            <form className={styles.votesSection2} onSubmit={handleSubmit}>
                                <button type='submit' className={!props.mode ? styles.upvoteBTN : styles.upvoteBTNDark} onClick={handleUpvote}>
                                    {!props.hide && <ArrowUp width={'1.2rem'} height={'1.2rem'} color={arrowsColor[0]}/>}
                                </button>
                                <span className={styles.votesMeter} style={{color: arrowsColor[2]}}>{props.votes}</span>
                                <button type='submit' className={!props.mode ? styles.downvoteBTN : styles.downvoteBTNDark} onClick={handleDownvote}>
                                    {!props.hide && <ArrowUp width={'1.2rem'} height={'1.2rem'} color={arrowsColor[1]} style={{transform: 'rotate(180deg)'}}/>}
                                </button>
                            </form>
                        </div>
                        
                        {/* end votes tablet*/}
                        <img src={props.image} alt='post example' className={styles.postImage}/>
                        <footer className={styles.creatorSection}>
                            <div className={!props.mode ? styles.postOwner : styles.postOwnerDark}>
                                {!props.hide && <img src={props.profile} alt='profile'/>}
                                <span>{props.profileName}</span>
                            </div>
                            <div className={!props.mode ? styles.creationTime : styles.creationTimeDark}>
                                <span>{props.postTime}</span>
                            </div>
                            <div className={!props.mode ? styles.commentsHolder : styles.commentsHolderDark} onClick={() => setShowComments(prev => !prev)}
                                style={showComments? {backgroundColor: 'rgb(170, 170, 253)'}:{}}>
                               {!props.hide && <img src={commentIcon} alt='comment'/>}
                               <span>{props.commentsNumber}</span>
                            </div>
                        </footer>
                    {showComments && <Comments mode={props.mode}/>}
                    </div>
                </div>
    
            </article>
        </>
    );
};

export default Post;