import Post from "./Post";
import styles from '../ComponentsStyles/LoadPost.module.css';
import { useState, useEffect } from "react";

function ErrorPost({mode}){
    const [show, setShow] = useState(`${styles.dummyError}`);
    
    useEffect(()=>{
        const timeout = setTimeout(()=>{setShow(`${styles.dummyError} ${styles.show}`)}, 3500);
        return ()=>{
            clearTimeout(timeout);
        }
    },[]);
    
    return(
    <>
        <div className={!mode ? styles.loadPostContainer : styles.loadPostContainerDark}>
                <div className={styles.loadBufferError}>
                    <div className={styles.dummyHolder}>
                        <div>
                            <span className={show}>Something went wrong!</span>
                        </div>
                        <Post hide={true}/>
                    </div>
                </div>
        </div>
    </>
    );
};

export default ErrorPost