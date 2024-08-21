import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Root(props){
    
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Root;