import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {BsLinkedin,BsGithub} from 'react-icons/bs';

export const ContactMe = () => {
  
  return (
    <div className="footer" style={{ "line-height": "60px", height:"60px",display: "table-cell" ,"background-color":"black", "color" : "white" , "display":"block", direction:"revert"}}>
            <div style={{"line-height": "60px", marginLeft:"60px", display : "inline-block"}}>  
              <img src="" alt="Amit Maurya"></img>
            </div>  
            <div style={{"line-height": "60px", marginRight:"60px", display : "inline-block", float:"right"}}>  
              <BsLinkedin style={{ "margin":"10px", "width":"30px", height:"30px"}}/>
              <BsGithub style={{ "margin":"10px", "width":"30px", height:"30px" }}/>
            </div>
    </div>
  );
}
