import { Outlet } from "react-router-dom"
import Navbar from "../Component/Navbar/Navbar"


const LayoutOne = () => {

  return (
     <>
       <Navbar/>
       <Outlet/>
     </>
  )
}

export default LayoutOne