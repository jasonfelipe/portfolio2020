import React from 'react';
import { DiReact, DiMongodb, DiMysql, DiJqueryLogo, DiNodejsSmall } from "react-icons/fa";
import './techbar.css';


const Techbar = props => {
   <div>
       <DiReact onClick={props.handleTechBarClick} id='react'className='icon'/>
       <DiJqueryLogo onClick={props.handleTechBarClick} id='jquery' className='icon'/>
       <DiMongodb onClick={props.handleTechBarClick} id='mongo'className='icon'/>
       <DiMysql onClick={props.handleTechBarClick} id='mysql' className='icon'/>
       <DiNodejsSmall onClick={props.handleTechBarClick} id='node' className='icon'/>
   </div> 
}

export default Techbar;