import React from 'react';
import { DiReact, DiMongodb, DiMysql, DiJqueryLogo, DiNodejsSmall } from "react-icons/di";
import './techbar.css';


const Techbar = props => {
    return(
        <div className='techbar'>
            <button id='react' onClick={props.handleTechBarClick}>
                <DiReact className='techSvg'/>
            </button>

            <button id='jquery' onClick={props.handleTechBarClick}>
                <DiJqueryLogo className='techSvg'/>
            </button>

            <button id='mongo' onClick={props.handleTechBarClick}>
                <DiMongodb className='techSvg'/>
            </button>

            <button id='mysql' onClick={props.handleTechBarClick}>
                <DiMysql className='techSvg'/>
            </button>

            <button id='node' onClick={props.handleTechBarClick}>
                <DiNodejsSmall className='techSvg'/>
            </button>

            <button id='' onClick={props.handleTechBarClick}>
                Clear
            </button>
        </div> 
    )
}

export default Techbar;