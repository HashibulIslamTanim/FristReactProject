import { Outlet } from "react-router"
import Naveber from "../shared/Naveber"
import Footer from "../shared/Footer"


let Root = ()=>{
    return(
        <div>
           <Naveber />
            <Outlet />
           <Footer /> 
        </div>
    )
}
export default Root