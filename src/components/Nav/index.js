import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Nav = () => {
  return (
    <nav className="navBar">
        <Link to="/" className="link">
            <div>Dashboard</div>
        </Link>
        <Link to="/about" className="link">
            <div>About</div>
        </Link>
    </nav>
  )
}

export default Nav