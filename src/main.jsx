import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Root from './Components/layout/Root.jsx'
import Home from './Components/pages/Home.jsx'
import IslamicBook from './Components/pages/IslamicBook.jsx'
import Food from './Components/pages/Food.jsx'
import Fruit from './Components/pages/Fruit.jsx'
import Accesories from './Components/pages/Accesories.jsx'
import Login from './Components/authentik/Login.jsx'
import Register from './Components/authentik/Register.jsx'
import Error from './Components/pages/Error.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    errorElement: Error,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: "IslamicBook",
        Component: IslamicBook,
      },
      {
        path: "Food",
        Component: Food
      },
      {
        path: "Fruit",
        Component:Fruit, 
      },
      {
        path: "Accesories",
        loader:()=>fetch('/public/AccesoriesAPI/Accesories.json'),
        Component:Accesories, 
      },
      {
        path: "Login",
        Component: Login
      },
      {
        path:"Register",
        Component: Register
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
