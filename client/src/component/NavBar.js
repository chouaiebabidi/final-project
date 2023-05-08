import React from 'react'
import image from "./image.png"
import "./style/navbar.css"
import fcb from "./facebook.png"
import yt from "./youtube.png"
import wts from "./whatsapp.png"
import insta from "./instagram.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavBar() {
  const user = useSelector((state) => state.user?.user);
  return (
    <div>
      <div className='Navbarr'>
        <div><img id='main-logo' src={image} /></div>

        {user ? <div className='button-buy'>
          <button><Link style={{ textDecoration: "none" }} to={{ pathname: "/profil" }}>Profile </Link></button>
        </div> : <div className='button-buy'>
          <button><Link style={{ textDecoration: "none" }} to={{ pathname: "/login" }}>Login </Link></button>
        </div>}
      </div>
      <div className='Navbarr2'>
        <ul>
          <li><Link to={{ pathname: "/home" }}>
            Home
          </Link>
          </li>
          <li>
            <a href='#services'>
              <Link to={{ pathname: "/services" }}>
                Services
              </Link>
            </a>
          </li>
          <li>
            About us
          </li>
          <li>
            <Link to={{ pathname: "/contact" }}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className='icons'>
          <li><img src={fcb} /></li>
          <li><img src={insta} /></li>
          <li><img src={wts} /></li>
          <li><img src={yt} /></li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar