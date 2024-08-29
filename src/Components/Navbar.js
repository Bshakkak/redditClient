import styles from '../ComponentsStyles/Navbar.module.css'
import {redditIcon, searchIcon } from '../Icons';
import ToggleSwitch from './ToggleSwitch';
import { useState, useEffect } from 'react';
import { menuIcon, closeIcon, leftArrow } from '../Icons';

function Navbar({activeSide = f => f, modeValue = f => f, mode}){
    const [menuToggle, setMenuToggle] = useState(false);
    // const [mode, setMode] = useState(false);
    const [miniSearch, setMiniSearch] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert('Data submitted!');
    }

    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth > 769){
                setMiniSearch(false);
                setMenuToggle(false);
                activeSide(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    },[activeSide]);

    return(
        <nav className={styles.navbar} style={mode? {backgroundColor: '#5d5d5d'}:{backgroundColor: 'white'}}>
            <div className={styles.logoContainer} tabIndex={'1'}>
                <img className={styles.menuIcon} src={!menuToggle? menuIcon: closeIcon} 
                alt={!menuToggle? 'menu icon':'close icon'} 
                onClick={()=> {
                    activeSide(!menuToggle);
                    setMenuToggle(toggle => !toggle);
                    }} style={mode? {filter: 'invert(100%)'}:{filter: 'invert(0%)'}}/>
                <img className={styles.logoIcon} src={redditIcon} alt='Reddit Icon' style={mode? {filter: 'invert(100%)'}:{filter: 'invert(0%)'}}/>
                {!miniSearch && 
                <span className={`logoFont`} style={mode? {color: 'white'}:{color: '#303030'}}>
                    <span className={styles.logoColor}>Reddit</span>
                Minimal</span>
                }
            </div>
            <div className={styles.formContainer} tabIndex={'1'}>
                <form className={styles.formSearch} onSubmit={handleSubmit}>
                    <input className={styles.formInput} type='text' placeholder='Search'/>
                    <button className={styles.searchBTNContainer} type='submit'>
                        <img className={styles.searchBTN} src={searchIcon} alt='Search Icon' style={mode? {filter: 'invert(100%)'}:{filter: 'invert(0%)'}}/>
                    </button>
                </form>
                <form className={styles.formSearchMini} onSubmit={handleSubmit}>
                    {miniSearch && <>
                    <button className={`${styles.searchBTNContainer}`} type='submit'>
                        <img className={styles.searchBTN} src={leftArrow} alt='Submit search' style={mode? {filter: 'invert(100%)'}:{filter: 'invert(0%)'}}/>
                    </button>
                    <input className={`${styles.formInput}`} type='text' placeholder='Search'/>
                    </>}
                    <div className={styles.searchBTNContainer}>
                        <img className={styles.searchBTN} src={searchIcon} alt='Search Icon' 
                        onClick={() => setMiniSearch(prev => !prev)} style={mode? {filter: 'invert(100%)'}:{filter: 'invert(0%)'}}/>
                    </div>                    
                </form>
                <ToggleSwitch className={styles.toggleSwitchNav} mode={mode} setMode={modeValue}/>
            </div>  
        </nav>
    );
};

export default Navbar;