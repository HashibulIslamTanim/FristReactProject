import { useLoaderData } from "react-router-dom";


function Accesories() {
  const loadingdata =useLoaderData([])
   console.log(loadingdata);
  return (
       <div className="flex flex-wrap bg-blue-950  justify-center items-center ">
      {
        Array.isArray(loadingdata)  && loadingdata?.map(product =>
          <li className="list-none" key={product.id}> 
        <div className="m-2 w-30  sm:w-4 md:w-60 h-60 md:h-80 sm:h-10 border-blue-500 rounded border-2 flex flex-col justify-center items-center bg-emerald-300 hover:shadow-2xl hover:shadow-fuchsia-500 ">
          <div className=" w-28  sm:w-2 md:w-56 h-40 md:h-60 sm:h-6 bg-cover ">
            <img className="w-full h-full" src={product.image} />
            
          </div>
          <div className="w-full h-fit bg-emerald-600 text-amber-50 hover:-translate-y-1 sm:text-sm text-wrap flex flex-col">
             <h1>Name: {product.name}</h1>
             <p>Price: {product.price}TK</p>
             <button className="bg-cyan-400 px-4  hover:cursor-pointer rounded  text-red-500">Buye Now</button>
            </div>
          
        </div> </li>)
      }
      
     
    </div>
  )
}

export default Accesories