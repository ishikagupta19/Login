import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


import { UserContext } from "../App";

const Navbar = () => {
  


  const {state, dispatch} = useContext(UserContext);

    const RenderMenu = () => {
      if(state) {
        return (
          <>

             
              
              <form class="container-fluid justify-content-start ">
                  <button class="btn btn-outline-danger me-2" type="button">Log Out</button>
                 
              </form> 
            
          </>
        )
      } else {
        return (
          <>
           <li className="nav-item active">
                <NavLink className="nav-link" to="/login">Home <span className="sr-only"></span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Page No. 2</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Page No. 3</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-danger me-2" to="/signup">Signup</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-danger me-2" type="button" to="/login">Login</NavLink>
              </li>
              
          </>
        )
      }
    }
  
  

  return <>
      <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <NavLink className="navbar-brand" to="/">
      <img  alt="logo" className="logohere"/>
  </NavLink>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      

      <RenderMenu/>
      
    </ul>
    
  </div>
</nav>
  </>;
};

export default Navbar;

 