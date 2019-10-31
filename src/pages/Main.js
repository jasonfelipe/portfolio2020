import React, {useState} from 'react';
import Techbar from '../components/Techbar';
import Card from '../components/Card';
import { Projects } from '../assets/projects.json'
import './main.css';
console.log(Projects)

const Main = () => {
    const [search, setSearch] = useState(null);
    const [projects, setProjects] = useState(Projects);

    const handleTechQueryButton = event => {
        let { id } = event.target;
        setSearch(id);
    }

    return <>
        <div>
            <Techbar handleTechBarClick={handleTechQueryButton}/>
            {search ?
            <div className='center'>
                <h1 >Now Showing Projects with {search}! </h1>
                <button className='clear-button' id='' onClick={handleTechQueryButton}>
                    Clear Search
                </button>
            </div> : null
            }
        </div>

        <div className="row">
            {projects.map((project, index) => 
                <Card
                    key={index}
                    title={project.name}
                    text={project.description}
                />)
            }
        </div>

    </>
}

export default Main;