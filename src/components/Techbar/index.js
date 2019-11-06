import React from 'react';
import { DiReact, DiMongodb, DiMysql, DiJqueryLogo, DiNodejsSmall } from "react-icons/di";
import './techbar.css';


const Techbar = props => {
    return(
        <div className='d-flex justify-content-center'>
            <button id='ReactJS' onClick={props.handleTechBarClick}>
                <DiReact className='techSvg'/>
            </button>

            <button id='jQuery' onClick={props.handleTechBarClick}>
                <DiJqueryLogo className='techSvg'/>
            </button>

            <button id='MongoDB' onClick={props.handleTechBarClick}>
                <DiMongodb className='techSvg'/>
            </button>

            <button id='MySQL' onClick={props.handleTechBarClick}>
                <DiMysql className='techSvg'/>
            </button>

            <button id='NodeJS' onClick={props.handleTechBarClick}>
                <DiNodejsSmall className='techSvg'/>
            </button>
        </div> 
    )
}

export default Techbar;