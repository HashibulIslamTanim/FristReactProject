import { FaInstagram,FaTwitter,FaYoutube, FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative flex flex-col h-100 w-full   bg-cyan-950 text-white items-center justify-center">

      <h1 className="text-xl  md:text-2xl -mt-10 mb-20 text-fuchsia-600 italic">Thank you again come to our website.</h1>
      <div className=" text-center">
        
      <h2 className="text-sm mb-10 ">If you need any help from us you will contact us by this number: 01925942758. Again If you feel any where we mistake any issue you will informe us.</h2>
      
      </div>
      <h3 className="mt-0">This website fully designed by <p className="text-green-400 hover:text-green-300">MD.HASHIBUL ISLAM TANIM</p></h3>
       
       {/* logo link */}
      <div className="text-center">
        <h1>Follow us</h1>
        <div className="flex space-x-3">
          <FaFacebook className="bg-white text-4xl rounded-4xl text-blue-600 hover:cursor-pointer hover:-translate-y-2" />
         
          <FaTwitter className="text-4xl py-1 bg-blue-400 rounded-2xl hover:cursor-pointer hover:-translate-y-2" />
          <FaInstagram className="text-white text-4xl bg-red-400 rounded-3xl hover:cursor-pointer hover:-translate-y-2" />
          <a href="https://www.youtube.com/results?search_query=programming+shikhbo"><FaYoutube className="text-red-500 bg-amber-50 text-4xl rounded-2xl hover:cursor-pointer hover:-translate-y-2"  /></a>
        </div>


      </div>
      <div className="w-full h-fit bg-gray-700 py-2 text-center  bottom-0 absolute">
       <p> hashibulislamtanim58@gmail.com</p>
      </div>



    </footer>
  )
}

export default Footer