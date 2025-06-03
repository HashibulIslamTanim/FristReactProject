import { Outlet } from "react-router"
import Naveber from "./Naveber"
import Footer from "./Footer"


let Root = ()=>{
    return(
        <div>
           <Naveber />
           <Outlet></Outlet>
           <Footer /> 
        </div>
    )
}
export default Root