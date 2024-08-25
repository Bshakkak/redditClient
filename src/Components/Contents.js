import styles from '../ComponentsStyles/Contents.module.css';

function Contents(props){
    return(
        <section className={styles.contentsContainer}>
            <div className={styles.contentsHolder}>
                contents
            </div>
        </section>
    );
};

export default Contents;