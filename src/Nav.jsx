import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <Fragment>
         <nav className='navbar'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/AboutUs"><li>About Us</li></Link>
          <Link to="/Services"><li> Services </li> </Link>
          <Link to="/OurTeam"><li>Our Team</li> </Link>
          <Link to="/Careers"><li>Careers </li> </Link>
          <Link to="/ContactUs"><li>Contact Us</li></Link>
         
         
        </ul>
      </nav>
    </Fragment>
  )
}