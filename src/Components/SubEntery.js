import styles from '../ComponentsStyles/SubEntery.module.css';
import { useDispatch } from 'react-redux';
import { fetchData } from '../Slices/subredditsSlice';

function SubEntery(props){
  const dispatch = useDispatch();
  const handleClick = () =>{
    props.setFocus(props.id);
    dispatch(fetchData(props.fetchURL));
  }

    return (
      <>
        <li key={props.id} className={props.focus ? styles.subEnteryContainerSelected :styles.subEnteryContainer} 
        onClick={() => handleClick()} tabIndex={'1'}>
            <div className={styles.subIcon}>
                <img src={props.icon} alt={props.name} className={styles.subIconImage} style={{border: `4px solid ${props.color}`}}/>
            </div>
            <span style={props.mode? {color: 'white'}:{color: 'black'}} className={styles.subName}>
              {props.name}
            </span>
        </li>
      </>
    );
}

export default SubEntery