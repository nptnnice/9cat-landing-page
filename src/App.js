import './style.css'
import Navbar from './component/Navbar'
import About from './component/About'
import Contactus from './component/Contactus'
import Service from './component/Service'
import Blognnew from './component/Blognnew'
import
  {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"

const App = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar/>
            <About />
          </div>} />
        <Route path="/contactus" element={
          <div>
            <Navbar/>
            <Contactus />
          </div>} />
        <Route path="/service" element={
          <div>
            <Navbar/>
            <Service />
          </div>} />
        <Route path="/blognnew" element={
          <div>
            <Navbar/>
            <Blognnew />
          </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
