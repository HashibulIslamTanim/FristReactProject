

function Herosection() {
  return (
    <div className=" h-[100vh]   w-full flex flex-col  justify-center items-center text-center  text-white bg-center " style={{backgroundImage:"url(/src/assets/walpaper2.jpg)",
      backgroundSize: "cover"
    }}>
        <h1 className="text-3xl   md:text-6xl font-bold mb-3 ">Welcome to The Website</h1>
        <p className="text-2xl md:text-4xl font-medium font-bold mb-4">You can get benifit</p>
        <button className="bg-blue-500 rounded-md px-10 py-2 hover:bg-fuchsia-600 transition-all duration-1000 cursor-pointer mt-1">Get Started</button>
        
        

    </div>
  )
}

export default Herosection