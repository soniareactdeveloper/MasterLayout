import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne'
import Home from './Pages/Home'
import About from './Pages/About'
import LayoutTwo from './Layouts/LayoutTwo'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import LayoutThree from './Layouts/LayoutThree'
import Hello from './Pages/Hello'

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Routes for LayoutOne */}
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>

        {/* Routes for LayoutTwo */}
        <Route path='layout-two' element={<LayoutTwo />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
        </Route>
        
        
        {/* Routes for LayoutTwo */}
        <Route path='layout-three' element={<LayoutThree/>}>
          <Route path='hello'    element={<Hello/>}/>
        </Route>

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App;
