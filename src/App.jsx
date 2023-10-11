import { Fragment, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'
import ServicesPage from './ServicesPage'
import OurTeamPage from './OurTeamPage'
import CareersPage from './CareersPage'
import ContactUsPage from './ContactUsPage'
import Footer from './Footer'
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
          <Route path={"/ContactUs"} element={<ContactUsPage/>}/>
          <Route path={"/Home"} element={<HomePage/>}/>
          <Route path={"/Services"} element={<ServicesPage/>}/>
          <Route path={"/OurTeam"} element={<OurTeamPage/>}/>
          <Route path={"/Careers"} element={<CareersPage/>}/>
        </Route>
      </Routes>
     
    </>
  )
}

export default App
