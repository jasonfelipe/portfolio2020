import React, {useState} from 'react';
import Techbar from '../components/Techbar';
import Card from '../components/Card';
import './main.css';

const Main = () => {
    const [search, setSearch] = useState(null);
    const [projects, setProjects] = useState([{title: "Hey", text: "Hello"}]);


    const handleTechQueryButton = event => {
        let { id } = event.target;
        setSearch(id);
    }

    const handleSearch = (searchArray = null, projectsJson) => {
        let shownProjects = []
        projectsJson.forEach(project => {
            if (searchArray.includes(project.technology)) shownProjects.push(project);
        });
        setProjects(shownProjects);
    }

    return <>
        <Techbar handleTechBarClick={handleTechQueryButton}/>
        {search ?
        <div className='center'>
            <h1 >Now Showing Projects with {search}! </h1>
            <button className='clear-button' id='' onClick={handleTechQueryButton}>
                Clear Search
            </button>
        </div> : null
        }

        {projects.map(project => 
        
        <Card
            title={project.title}
            text={project.text}
        />)}

    </>
}

export default Main;