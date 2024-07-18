import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from "./Components/Pages/Home"
import Footer from "./Components/Pages/Footer"
import Navbar from './Components/Pages/Navbar'
import Store from './Components/Slice/Store'
import Whypintola from './Components/Pages/Whypintola'
import Aboutus from './Components/Pages/Aboutus'
import Contactus from './Components/Pages/Contactus'
import Recipes from './Components/Pages/Recipes'
import Torder from './Components/Pages/Torder'
import Userlogin from './Components/Pages/Userlogin'
import Cart from './Components/Pages/Cart'
import Singlepro from './Components/Pages/Singlepro'
const App = () => {
  return (
   

    <div>
      <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="store" element={<Store />} /> */}
          <Route path="whypintola" element={<Whypintola />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="Torder" element={<Torder />} />
          <Route path="Userlogin" element={<Userlogin />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="demo/:id" element={<Singlepro />} />

        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
