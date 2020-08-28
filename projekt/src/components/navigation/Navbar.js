import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCart from '../shoppingcart/ShoppingCart'
import './Navbar.css'  

export default function Navbar() {
    return (
    <div>
            {/*--Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark default-color">
          <div className="container">
          <i className="fab fa-shopware text-white mr-4" href="/">BUY.SE</i>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
            aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-white" id="navbarSupportedContent-333">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Nyheter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/clothes">Kläder</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/shoes">Skor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/accessoarer">Accessoarer</Link>
              </li>
              
            </ul>
            <ul className="navbar-nav ml-auto nav-flex-icons">   
            
              <li className="nav-item dropdown">
                <button className="nav-link mr-4 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-shopping-cart"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                  <ShoppingCart />
                </div>
              </li>
              <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user"></i>
                  </button>

                <div className="dropdown-menu drop-down-right z-depth-2">  
                    
                </div>
            
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    {/*--/.Navbar */}
    </div>
    )
}
