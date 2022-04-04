import './style.css'
import Navbar from './component/Navbar'
import About from './component/About'
import Contactus from './component/Contactus'
import Service from './component/Service'
import Blognnew from './component/Blognnew'
import Footer from './component/Footer'
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
            <Footer />
          </div>} />
        <Route path="/contactus" element={
          <div>
            <Navbar/>
            <Contactus />
            <Footer />
          </div>} />
        <Route path="/service" element={
          <div>
            <Navbar/>
            <Service />
            <Footer />
          </div>} />
        <Route path="/blognnews" element={
          <div>
            <Navbar/>
            <Blognnew />
            <Footer />
          </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
