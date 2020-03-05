import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className="w3-top">
        <div className="w3-bar w3-white w3-padding w3-card" >
            <Link to='/' className="w3-bar-item w3-button">Home</Link>
        <div className="w3-right w3-hide-small">
            <Link to='/top-meow' className="w3-bar-item w3-button">Who's Top Meow?</Link>
            <Link to='/not-hot-meow' className="w3-bar-item w3-button">Who's Not Hot Meow?</Link>
            <Link to='/about' className="w3-bar-item w3-button">About</Link>
        </div>
        </div>
    </div>
  )
}

export default NavBar
