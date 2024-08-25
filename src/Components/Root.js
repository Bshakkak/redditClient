import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Root({activeSide = f => f}){
    
    return(
        <>
            <Navbar activeSide={activeSide}/>
            <Outlet />
        </>
    );
}

export default Root;