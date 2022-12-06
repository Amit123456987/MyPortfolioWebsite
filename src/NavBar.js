import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavBar = () => {
  return (
   
        
        <nav style={{'padding':'10px'}} className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="#">Amit Maurya</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{'color':'white'}}/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tech Stack</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contact me</a>
              </li>
            </ul>
          
          </div>
        </nav>
 
  );
}
