import React from "react";
import '../Styles/navbar.css'
import logo from '../Images/logo.jpg'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  let loc = useLocation()
  let path = loc.pathname.startsWith('/adminportal')

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="links">
          { path ? (
            <>
              <ul>
                <li><Link to="/adminportal/">HOME</Link></li>
                <li><Link to="/adminportal/books">BOOKS</Link></li>
                <li><Link to="/adminportal/addbooks">ADD BOOKS</Link></li>
                <li><Link to="/adminportal/users">USERS</Link></li>
                <li><Link to="/adminportal/addusers">ADD USERS</Link></li>
                <li><Link to="/">LOGOUT</Link></li>
              </ul>
            </> 
            ) 
          : (
            <>
              <ul>
                <li><Link to="/usersportal/">HOME</Link></li>
                <li><Link to="/usersportal/books">BOOKS</Link></li>
                <li><Link to="/usersportal/users">USERS</Link></li>
                <li><Link to="/">LOGOUT</Link></li>
              </ul>
            </>
            )
          }
        </div>
      </div>
    
    </>
  );
};

export default Navbar;
