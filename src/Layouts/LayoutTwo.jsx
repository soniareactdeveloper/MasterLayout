import { Outlet } from "react-router-dom"
import NavbarTwo from "../Component/NavbarTwo.jsx/NavbarTwo"



const LayoutTwo = () => {
  return (
    <>
     <NavbarTwo/>
     <Outlet/>
    </>
  )
}

export default LayoutTwo