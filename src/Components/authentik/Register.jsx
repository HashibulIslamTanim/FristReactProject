import { Link } from "react-router-dom"
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";


function Register() {
    const [showpass,Setshowpass] =useState(true);
    const [showconpass,Setshowconpass] = useState(true);






  return (
    <div className='w-full h-[100vh] bg-gray-800 text-gray-700 flex flex-col items-center justify-center'>
      <div className='bg-white  flex flex-col text-center py-3  md:px-2 rounded'>
        <h1 className='text-green-600 font-bold text-3xl '>Sin Up</h1>
        
        <form className='flex flex-col px-2'>
          <input 
          type="text" 
          name="name" 
          placeholder='user name'
          id="name"
          required className='px-12 md:px-18 py-2  text-center mt-4 mb-2 border-1 focus:ring-green-300 focus:ring-4 rounded border-black outline-0 ' />

          <input 
          type="email" 
          name="email" 
          placeholder='Email'
          required
          id="mail" className='px-12 md:px-18 py-2  text-center mt-2 mb-4 border-1 focus:ring-green-300 focus:ring-4 rounded border-black outline-0 ' />

         <div className="relative flex justify-center items-center ">
           <input type={showpass ? "password" : "text"}
          name="passward"
          placeholder='password'
          required
          id="pass" className='px-12 md:px-18 py-2 text-center mb-2  focus:ring-green-300 focus:ring-4 rounded outline-0 border-1 border-black ' />
          {
            showpass ? <IoMdEye className="absolute ml-60 text-2xl" onClick={()=>Setshowpass(!showpass)} /> :
            <IoMdEyeOff className="absolute ml-60 text-2xl" onClick={()=>Setshowpass(!showpass)} />
          }
         </div>

          <div className="relative flex items-center justify-center">
            <input 
          type={showconpass ? "password" : "text"}
          name="conf password" 
          placeholder='conferme password'
          required
          id="confpass" className='px-12 md:px-18 py-2 focus:ring-green-300 focus:ring-4  text-center mt-2 mb-4 border-1 rounded border-black outline-0 ' />
          {
            showconpass ? <IoMdEye className="absolute ml-60 text-2xl" onClick={()=>Setshowconpass(!showconpass)} /> :
            <IoMdEyeOff className="absolute ml-60 text-2xl" onClick={()=>Setshowconpass(!showconpass)} />
          }
          </div>
          
          {/* forgotpassword */}

          <div className="flex  items-center justify-between mb-2 -mt-2 text-sm">
              <input 
              type="checkbox" 
              name="learnteco" 
              id="ltc"
              required  />
              <label htmlFor="ltc" className="text-sm -ml-4 -mt-1">Lern Tems & <Link className="text-green-400 hover:border-b-2 ">Condition</Link></label>


              <p className="text-sm text-green-400 hover:border-b-2 cursor-pointer">Forgot password</p>
          </div>

          <input type="button" value="submit" className='bg-blue-600 w-full py-2 font-bold text-red-400 text-1xl rounded cursor-pointer hover:bg-blue-500 ' />

         

          <div className="flex  items-center justify-center m-3">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <span>OR</span>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>




          <button className='bg-black flex justify-center items-center py-2 text-amber-50 text-1xl font-bold cursor-pointer rounded mb-1'>Sin In with GitHub
            <FaGithub className="text-2xl ml-1" />
          </button>

          <div>
             <button className='bg-red-500 items-center flex justify-center text-amber-50 text-1xl mb-6 w-full py-2 text-1xl font-bold cursor-pointer rounded'>Sin In with Google
             <IoLogoGoogle className="text-2xl ml-1" />
           </button>
          
          </div>







        </form>
        <div className="flex justify-center text-sm items-center flex-row">
          <p className='text-black-400 mb-2 '>Do you have an account ?</p>
          <button className=' hover:border-b-2 ml-1 -mt-1  cursor-pointer rounded text-green-400 hover:text-emerald-500'><Link to={"/Login"}>Login Here</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Register