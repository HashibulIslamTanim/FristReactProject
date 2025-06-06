
import { ImCross } from "react-icons/im";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
function Naveber() {
  const [smallNav, Setsmallnav] = useState(true);
  const [activelink, Setactivelink] = useState("/");
  const loction = useLocation();
  useEffect(() => {
    Setactivelink(loction.pathname || "/Home")
  }, [loction.pathname]);
  function changrNavIcon() {
    Setsmallnav(!smallNav);
  }
  function activation(path) {
    Setactivelink(path)
  }


  return (
    <nav className="sticky top-0 z-1 ">

      <div className="flex bg-cyan-500/80  justify-between    px-3 py-3 md:py-6 items-center  ">
        <h1 className=" hidden md:block text-3xl text-lime-300 font-bold italic font-serif">Islamic Beneficial Institution</h1>
        {/* for small device */}
        <h1 className=" block md:hidden text-3xl text-lime-300 font-bold italic font-serif border-3 border-e-lime-300 rounded-full p-2 bg-blue-400">IBI</h1>




        <ul className=" hidden md:flex space-x-5 text-white text-1xl font-bold ">
          <li>
            <Link to={"/"} onClick={() => activation("/")} className={`hover:border-b-3 border-b-blue-700 ${activelink === "/" ? " border-b-blue-700 text-red-600" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/IslamicBook"} onClick={() => activation("/IslamicBook")} className={`hover:border-b-3 border-b-blue-700 ${activelink === "/IslamicBook" ? " border-b-blue-700 text-red-600" : ""}`}>
              Islamic-Book
            </Link>
          </li>
          <li>
            <Link to={"/Food"} onClick={() => activation("/Food")} className={`hover:border-b-3 border-b-blue-700 ${activelink === "/Food" ? " border-b-blue-700 text-red-600" : ""}`}>
              Food
            </Link>
          </li>
          <li>
            <Link to={"/Fruit"} onClick={() => activation("/Fruit")} className={`hover:border-b-3 border-b-blue-700 ${activelink === "/Fruit" ? " border-b-blue-700 text-red-600" : ""}`}>
              Fruit
            </Link>
          </li>
          <li>
            <Link to={"/Accesories"} onClick={() => activation("/Accesories")} className={`hover:border-b-3 border-b-blue-700 ${activelink === "/Accesories" ? " border-b-blue-700 text-red-600" : ""}`}>
              Accesories
            </Link>
          </li>
        </ul>
        <button className="p-1 font-black text-fuchsia-500  border-3 outline-0 border-emerald-500 rounded-2xl cursor-pointer"><Link to={"/Login"}>Log In</Link></button>
        <button className="block md:hidden text-white font-bold cursor-pointer text-3xl" onClick={changrNavIcon}>{smallNav ? <FiAlignJustify /> : <ImCross />}</button>
        


      </div>
      <div className={`bg-emerald-300/90 ${smallNav ? 'hidden' : 'block'}`}>
        <ul className={`flex-col space-x-5 text-white text-1xl font-bold `}>
          <li className={`hover:border-3 border-blue-700 ${activelink === "/" ? " border-b-blue-700 text-red-600" : ""} text-center  m-auto cursor-pointer`}>
            <Link to={"/"} onClick={() => activation("/")}>
              Home
            </Link>
          </li>
          <li className={`hover:border-3 border-blue-700 ${activelink === "/IslamicBook" ? " border-b-blue-700 text-red-600" : ""} text-center  m-auto cursor-pointer`}>
            <Link to={"/IslamicBook"} onClick={() => activation("/IslamicBook")}>
              Islamic-Book
            </Link>
          </li>
          <li className={`hover:border-3 border-blue-700 ${activelink === "/Food" ? " border-b-blue-700 text-red-600" : ""} text-center  m-auto cursor-pointer`}>
            <Link to={"/Food"} onClick={() => activation("/Food")}>
              Food
            </Link>
          </li>
          <li className={`hover:border-3 border-blue-700 ${activelink === "/Fruit" ? " border-b-blue-700 text-red-600" : ""} text-center  m-auto cursor-pointer`}>
            <Link to={"/Fruit"} onClick={() => activation("/Fruit")}>
              Fruit
            </Link>
          </li>
          <li className={`hover:border-3 border-blue-700 ${activelink === "/Accesories" ? " border-b-blue-700 text-red-600" : ""} text-center  m-auto cursor-pointer`}>
            <Link to={"/Accesories"} onClick={() => activation("/Accesories")}>
              Accesories
            </Link>
          </li>
        </ul>
      </div>


    </nav>
  )
}

export default Naveber