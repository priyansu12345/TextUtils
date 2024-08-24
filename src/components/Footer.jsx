import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer(props) {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className='mx-3'>
              <Link to="/" className="no-underline" style={{
                textDecorationLine:"none"
              }}>Home</Link>
            </li>
            <li className='mx-3'>
              <Link to="/about" className="no-underline" style={{
                textDecorationLine:"none"
              }}>About</Link>
            </li>
            <li className='mx-3'>
              <Link to="/contact" className="no-underline" style={{
                textDecorationLine:"none"
              }}   >Contact us</Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary" style={{...props.Mode,background:"none"}}>© 2024 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}
