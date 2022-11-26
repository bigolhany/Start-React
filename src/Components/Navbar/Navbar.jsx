import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light fixed-top text-uppercase pt-4 pb-4">
    <div className="container">
    <a className="navbar-brand text-white fs-3 ps-5" href="#">Start React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 pe-5">
        <li className="nav-item">
          <a className="nav-link text-white py-3 px-0 px-lg-3 rounded" aria-current="page" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white py-3 px-0 px-lg-3 rounded" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
        </li>
       
         
      </ul>
      
    </div>
  </div>
</nav>
    
    </>
  )
}
