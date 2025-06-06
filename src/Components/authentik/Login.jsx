import { Link } from "react-router"
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";

function Login() {
      const [showpass,Setshowpass] =useState(true);
      


  return (
    <div className='w-full h-[100vh] bg-gray-800 text-gray-700 flex flex-col items-center justify-center'>
      <div className='bg-white -mt-10 flex flex-col text-center py-3  md:px-2 rounded'>
        <h1 className='text-green-600 font-bold text-3xl '>LogIn</h1>
        
        <form className='flex flex-col px-2'>
          <input 
          type="email" 
          name="email" 
          placeholder='Email'
          required
          id="mail" className='px-12 md:px-18 py-2 focus:ring-green-300 focus:ring-4  text-center mt-2 mb-4 border-1 rounded border-black outline-0 ' />

          <div className="relative flex justify-center items-center">
                     <input type={showpass ? "password" : "text"}
                    name="passward"
                    placeholder='password'
                    required
                    id="pass" className='px-12 md:px-18 py-2 text-center mb-2 border-1 focus:ring-green-300 focus:ring-4 rounded border-black outline-0 ' />
                    {
                      showpass ? <IoMdEye className="absolute ml-60 text-2xl" onClick={()=>Setshowpass(!showpass)} /> :
                      <IoMdEyeOff className="absolute ml-60 text-2xl" onClick={()=>Setshowpass(!showpass)} />
                    }
                   </div>

          <input type="button" value="submit" className="w-full bg-blue-600 py-2 text-red-500 rounded text-1xl font-bold hover:bg-blue-500 cursor-pointer"/>

         

          <div className="flex  items-center justify-center m-3">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <span>OR</span>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>

          <div>
            <button className='  py-2 text-amber-50 flex relative bg-black w-full justify-center items-center mb-1 text-1xl font-bold cursor-pointer rounded '>Login with GitHub
             <FaGithub className=" text-2xl text-white" />
            </button>
             
            
          </div>

           <div >
            <button className='bg-red-500 mb-6 w-full py-2 text-1xl font-bold items-center justify-center relative flex flex-row cursor-pointer rounded text-amber-50'>Login with Google
              <IoLogoGoogle className="ml-1 text-2xl" />
            </button>
            
           </div>

        </form>
        <div className="flex justify-center text-sm items-center flex-row">
          <p className='text-black-400 mb-2 '>Don't you have an account ?</p>
          <button className=' hover:border-b-2 ml-1 -mt-1  cursor-pointer rounded text-green-400 hover:text-emerald-500'><Link to={"/Register"}>Sin Up</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Login