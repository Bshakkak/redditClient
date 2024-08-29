import styles from '../ComponentsStyles/SubEntery.module.css';
function SubEntery(props){
    return (
      <>
        <li key={props.id} className={props.focus ? styles.subEnteryContainerSelected :styles.subEnteryContainer} 
        onClick={() => props.setFocus(props.id)} tabIndex={'1'}>
            <div className={styles.subIcon} style={{border: `4px solid ${props.color}`}}>
                <img src={props.icon} alt={props.name} className={styles.subIconImage}/>
            </div>
            <span style={props.mode? {color: 'white'}:{color: 'black'}}>{props.name}</span>
        </li>
      </>
    );
}

export default SubEntery