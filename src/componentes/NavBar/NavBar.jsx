import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link, Links } from 'react-router-dom'

const NavBar = () => {

  return (
    <header>
      <Link to="/">
        <h1 className=''>VICENROSS</h1>
      </Link>

        <nav>
            <ul>
                <li>
                  <Link to="categoria/bordados"> Bordados </Link>
                </li>
                <li>
                  <Link to="categoria/patchwork"> Patchwork</Link>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar