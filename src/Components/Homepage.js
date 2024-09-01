import styles from '../ComponentsStyles/Homepage.module.css';
import Subreddits from './Subreddits';
import Contents from './Contents';
import { useState, useEffect } from 'react';
function Homepage({activeSide, mode, modeValue = f => f}){
    const [contentScreen, setContentScreen] = useState(false);
    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth > 769){
                setContentScreen(false);
            }else{
                setContentScreen(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () =>{
            window.removeEventListener('resize', handleResize)
        }
    },[]);

    return(
        <main className={styles.homepageContainer}>
            {contentScreen && <div className={styles.contentsContainer}>
                <Contents mode={mode}/>
            </div>}
            <div className={styles.subredditsContainer}>
                <Subreddits activeSide={activeSide} mode={mode} modeValue={modeValue}/>
            </div>
            {!contentScreen && <div className={styles.contentsContainer}>
                <Contents mode={mode}/>
            </div>}
        </main>
    );
};

export default Homepage;