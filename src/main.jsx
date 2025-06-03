import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Root from './Components/Root.jsx'
import Home from './Components/Home.jsx'
import IslamicBook from './Components/IslamicBook.jsx'
import Food from './Components/Food.jsx'
import Fruit from './Components/Fruit.jsx'
import Accesories from './Components/Accesories.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    Component: App,
    children:[
      {
        index: true,
        Component: Root,
      },
      {
        path: "Home",
        Component: Home,
      },
      {
        path: "IslamicBook",
        Component: IslamicBook,
      },
      {
        path: "Food",
        Component: Food,
      },
      {
        path: "Fruit",
        Component:Fruit, 
      },
      {
        path: "Accesories",
        Component:Accesories, 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
