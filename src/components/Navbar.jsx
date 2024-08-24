import React, { useEffect } from "react";
import "./Style/Nav.css";

export default function Navbar(props) {
  const isChecked = props.Mode.background === "#28282B"; 

 

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{...props.Mode}}>
        <div className="container-fluid">
          <h4 className="my-1" style={{ fontFamily: "sans-serif" }}>
            {props.title}
          </h4>
          
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.toggle}
              checked={isChecked} 
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            ></label>
          </div>
        </div>
      </nav>
    </>
  );
}
