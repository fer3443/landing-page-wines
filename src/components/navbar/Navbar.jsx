import React, { useState } from "react";
import "../navbar/Navbar.css";
export const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="nav container">
      <a href="/" className="nav-logo">Wines</a>
      <div className={ show ? "nav-menu show-menu":"nav-menu"}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#origen" className="nav-link">Origen</a>
          </li>
          <li className="nav-item">
            <a href="#vinos" className="nav-link">Vinos</a>
          </li>
          <li className="nav-item">
            <a href="#experiencias" className="nav-link">Experiencias</a>
          </li>
          <li className="nav-item">
            <a href="#novedades" className="nav-link">Novedades</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link">Contacto</a>
          </li>
        </ul>

        <div className="btn-close" onClick={() => {
          setShow(false)
        }}>
          <box-icon name="x" color={"#9ea1ad"} size="md"></box-icon>
        </div>
      </div>
      <div className="btn-toggle" onClick={() => {
          setShow(true)
        }}>
        <box-icon name="menu" color={"#9ea1ad"} size="md"></box-icon>
      </div>
    </nav>
  );
};
