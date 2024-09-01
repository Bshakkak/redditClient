import styles from '../ComponentsStyles/Contents.module.css';
import Post from './Post';
import {postExample, postExample2, postExample3, postExample4 } from '../Images';
import { subredditIcon } from '../Icons';
import LoadPost from './LoadPost';
import { useState, useEffect } from 'react';
const mockData = [
    {
        id: 'post_1',
        votes: '18k',
        title: 'The title for this post. The picture below explains the post title!',
        image: postExample,
        profile: subredditIcon,
        profileName: 'Creator0012',
        postTime: '8 hours',
        commentsNumber: '777'
    },
    {
        id: 'post_2',
        votes: '10k',
        title: 'The title for this post. The picture below explains the post title!',
        image: postExample2,
        profile: subredditIcon,
        profileName: 'Creator0Kj66',
        postTime: '8 hours',
        commentsNumber: '367'
    },
    {
        id: 'post_3',
        votes: '8k',
        title: 'The title for this post. The picture below explains the post title!',
        image: postExample3,
        profile: subredditIcon,
        profileName: 'Creator556',
        postTime: '6 hours',
        commentsNumber: '1056'
    },
    {
        id: 'post_4',
        votes: '8k',
        title: 'The title for this post. The picture below explains the post title!',
        image: postExample4,
        profile: subredditIcon,
        profileName: 'Clllooreator556',
        postTime: '4 hours',
        commentsNumber: '5666'
    }
];


function Contents(props){
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        const timeout = setTimeout(()=> setIsLoading(false), 3000);
        return () =>{
            clearTimeout(timeout);
        }
    },[]);

    return(
        <section className={styles.contentsContainer}>
            {isLoading && <LoadPost mode={props.mode}/>}
            {!isLoading && mockData.map(post => <Post key={post.id} {...post} hide={false} mode={props.mode}/>)}
        </section>
    );
};

export default Contents;