import { Fragment, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Services from './Services'
import OurTeam from './OurTeam'
import Careers from './Careers'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Nav from './Nav';
import { useState } from 'react'
import './App.css'




function NavLayout(){
  return(
    <Fragment>
      <Nav></Nav>
    <Outlet/>
    <Footer/>
    </Fragment>
  )
  }


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path={"/"} element={<NavLayout/>}>
        <Route path={"/"} element={<Home/>}/>
          <Route path={"/ContactUs"} element={<ContactUs/>}/>
          <Route path={"/Services"} element={<Services/>}/>
          <Route path={"/OurTeam"} element={<OurTeam/>}/>
          <Route path={"/Careers"} element={<Careers/>}/>
        </Route>
      </Routes>
     
    </>
  )
}

export default App
