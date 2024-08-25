import styles from '../ComponentsStyles/Subreddits.module.css';
import { subredditIcon } from '../Icons';
import SubEntery from './SubEntery';
import { useState } from 'react';
const mockDate = [
    {id: '0001', name: 'SubReddit1', icon:subredditIcon, color: 'blue'},
    {id: '0002', name: 'SubReddit2', icon:subredditIcon, color: 'red'},
    {id: '0003', name: 'SubReddit3', icon:subredditIcon, color: 'green'},
    {id: '0004', name: 'SubReddit4', icon:subredditIcon, color: 'aqua'},
    {id: '0005', name: 'SubReddit5', icon:subredditIcon, color: 'grey'},
    {id: '0006', name: 'SubReddit6', icon:subredditIcon, color: 'blue'},
    {id: '0007', name: 'SubReddit7', icon:subredditIcon, color: 'red'},
    {id: '0008', name: 'SubReddit8', icon:subredditIcon, color: 'aqua'},
];

function Subreddits(props){
    const [selectedSub, setSelectedSub] = useState(null);
    return(
        <>
            <section className={styles.subRedditsContainer}>
                {selectedSub && 
                <>
                    <div  className={styles.cancelNav} tabIndex={'-1'} onClick={()=>setSelectedSub(null)}/>
                    <div className={styles.cancelDiv} tabIndex={'-1'} onClick={()=>setSelectedSub(null)}/>
                </>
               }
                <h2>Subreddits</h2>
                <ul>
                    {mockDate.map(item => 
                        <SubEntery id={item.id} name={item.name} icon={item.icon} color={item.color}
                        focus={selectedSub === item.id} setFocus={setSelectedSub}/>
                    )}
                </ul>
            </section>
        </>
    )
};

export default Subreddits;