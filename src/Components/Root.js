import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Root({activeSide = f => f, modeValue = f => f, mode}){
    
    return(
        <>
            <Navbar activeSide={activeSide} modeValue={modeValue} mode={mode}/>
            <Outlet />
        </>
    );
}

export default Root;