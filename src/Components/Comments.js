import styles from '../ComponentsStyles/Comments.module.css';
import { subredditIcon } from '../Icons';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import LoadComment from './LoadComment';
const mockData = [
    {id: 'c0001', icon: subredditIcon, name: 'user_reddit_1', time: 8, comment: 'this is a comment on a post, this comment is long for testing the UI!'},
    {id: 'c0002', icon: subredditIcon, name: 'user_reddit_2', time: 8, comment: 'this is a comment on a post'},
    {id: 'c0003', icon: subredditIcon, name: 'user_reddit_3', time: 8, comment: 'this is a comment on a post'},
    {id: 'c0004', icon: subredditIcon, name: 'user_reddit_4', time: 8, comment: 'this is a comment on a post'},
    {id: 'c0005', icon: subredditIcon, name: 'user_reddit_5', time: 8, comment: 'this is a comment on a post'},
    {id: 'c0006', icon: subredditIcon, name: 'user_reddit_6', time: 8, comment: 'this is a comment on a post'},
]

function Comments(props){
    const [mockLoad, setMockLoad] = useState(true);

    useEffect(()=>{
        const timeLoad = setTimeout(()=> setMockLoad(false), 3000);
        return () =>{
            clearTimeout(timeLoad)
        }
    },[]);
    return(
        <div className={styles.commentsContainer}>
            {mockLoad ? 
            <>
                <LoadComment />
            </>: 
            <>{mockData.map(item => (
                <Comment {...item} mode={props.mode}/>
            ))}
            </>}
        </div>
    );
};

export default Comments;