
import walpaper2 from '/src/assets/walpaper2.jpg'

function Herosection() {
  return (
    <div className=" h-[100vh]   w-full flex flex-col  justify-center items-center text-center  text-white bg-center  "
    >
        <img src={walpaper2} className='w-full h-full  relative  ' />
        <h1 className="text-3xl   md:text-6xl font-bold -mt-10 md:-mt-20  absolute">Welcome to The Website</h1>
        <p className="text-2xl md:text-4xl font-medium font-bold mt-8 absolute">You can get benifit</p>
        <button className="bg-blue-500 rounded-md px-10 py-2 hover:bg-fuchsia-600 transition-all duration-1000 cursor-pointer mt-30 md:mt-40 absolute">Get Started</button>
        
        

    </div>
  )
}

export default Herosection