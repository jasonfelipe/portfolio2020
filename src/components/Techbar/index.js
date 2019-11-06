import React from 'react';
import { DiReact, DiMongodb, DiMysql, DiJqueryLogo, DiNodejsSmall } from "react-icons/di";
import './techbar.css';


const Techbar = props => {
    return(
        <div className='d-flex justify-content-center'>
            <button className='btn-svg' id='ReactJS' onClick={props.handleTechBarClick}>
                <DiReact className='techSvg'/>
            </button>

            <button className='btn-svg' id='jQuery' onClick={props.handleTechBarClick}>
                <DiJqueryLogo className='techSvg'/>
            </button>

            <button className='btn-svg' id='MongoDB' onClick={props.handleTechBarClick}>
                <DiMongodb className='techSvg'/>
            </button>

            <button className='btn-svg' id='MySQL' onClick={props.handleTechBarClick}>
                <DiMysql className='techSvg'/>
            </button>

            <button className='btn-svg' id='NodeJS' onClick={props.handleTechBarClick}>
                <DiNodejsSmall className='techSvg'/>
            </button>
        </div> 
    )
}

export default Techbar;