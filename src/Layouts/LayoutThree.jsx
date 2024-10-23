
import { Outlet } from 'react-router-dom'
import NavbarThree from '../Component/NavbarThree'

const LayoutThree = () => {
  return (
    <> 
     <NavbarThree/>
     <Outlet/>
    </>
  )
}

export default LayoutThree