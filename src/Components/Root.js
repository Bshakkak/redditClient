import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Root({activeSide = f => f, modeValue = f => f, mode}){
    
    return(
        <div style={mode? {backgroundColor: '#303030'}:{backgroundColor: 'white'}}>
            <Navbar activeSide={activeSide} modeValue={modeValue} mode={mode}/>
            <Outlet />
        </div>
    );
}

export default Root;