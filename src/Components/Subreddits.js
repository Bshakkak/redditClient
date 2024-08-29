import styles from '../ComponentsStyles/Subreddits.module.css';
import { subredditIcon } from '../Icons';
import SubEntery from './SubEntery';
import LoadSubEntery from './LoadSubEntery';
import { useState, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';

const mockDate = [
    {id: '0001', name: 'SubReddit1', icon:subredditIcon, color: 'blue'},
    {id: '0002', name: 'SubReddit2', icon:subredditIcon, color: 'red'},
    {id: '0003', name: 'SubReddit3', icon:subredditIcon, color: 'green'},
    {id: '0004', name: 'SubReddit4', icon:subredditIcon, color: 'aqua'},
    {id: '0005', name: 'SubReddit5', icon:subredditIcon, color: 'grey'},
    {id: '0006', name: 'SubReddit6', icon:subredditIcon, color: 'blue'},
    {id: '0007', name: 'SubReddit7', icon:subredditIcon, color: 'red'},
    {id: '0008', name: 'SubReddit8', icon:subredditIcon, color: 'aqua'},
    {id: '0009', name: 'SubReddit9', icon:subredditIcon, color: 'green'},
    {id: '0010', name: 'SubReddit10', icon:subredditIcon, color: 'red'},
    {id: '0011', name: 'SubReddit11', icon:subredditIcon, color: 'black'},
    {id: '0012', name: 'SubReddit12', icon:subredditIcon, color: 'grey'},
];

function Subreddits({activeSide, mode, modeValue = f => f}){
    const [selectedSub, setSelectedSub] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        const timeout = setTimeout(()=> setIsLoading(false), 3000);
        return () =>{
            clearTimeout(timeout)
        }
    }, []);

    return(
        <>
            <section className={!activeSide ? styles.subRedditsContainer : styles.subRedditsContainerActive} style={mode? {backgroundColor: '#5d5d5d'}:{backgroundColor: 'white'}}>
                {selectedSub && 
                <>
                    {activeSide && <div style={{backgroundColor: 'transparent'}} className={styles.cancelNav} tabIndex={'-1'} onClick={()=>setSelectedSub(null)} />}
                    <div style={{backgroundColor: 'transparent'}} className={styles.cancelDiv} tabIndex={'-1'} onClick={()=>setSelectedSub(null)}/>
                </>
               }
                
                <ul className={styles.listContainer}>
                    <div className={styles.subHeader}>
                        <h2 style={mode? {color: 'white'}:{color: '#5f5f5f'}}>Subreddits</h2>
                        <ToggleSwitch className={styles.toggleSwitchSide} mode={mode} setMode={modeValue}/>
                    </div>
                    {isLoading && 
                    <>
                        <LoadSubEntery />
                        <LoadSubEntery />
                        <LoadSubEntery />
                        <LoadSubEntery />
                    </>}
                    {!isLoading && mockDate.map(item => 
                        <SubEntery key={item.id} id={item.id} name={item.name} icon={item.icon} color={item.color}
                        focus={selectedSub === item.id} setFocus={setSelectedSub} mode={mode}/>
                    )}
                </ul>
            </section>
        </>
    )
};

export default Subreddits;