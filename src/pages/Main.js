import React, { useState } from 'react';
import Techbar from '../components/Techbar';
import Card from '../components/Card';
import { Projects } from '../assets/projects.json';
import './main.css';

const Main = () => {
    const [search, setSearch] = useState(null);
    const [projects, setProjects] = useState(Projects);

    const handleTechQueryButton = event => {
        let { id } = event.target;
        setSearch(id);
        handleProjectSearch(id.toLowerCase());
    };

    const handleProjectSearch = tech => {
        const projectArray = [];
        Projects.forEach(project => {
            if (project.tech.includes(tech)) {
                projectArray.push(project);
            };
        });
        setProjects(projectArray);
    };

    const handleClearSearch = () => {
        setProjects(Projects);
        setSearch('');
    };

    const handleCardButtonClick = event => {
        const { value } = event.target;
        return window.open(value, '_blank');
    }

    return <>
        <div>
            <Techbar handleTechBarClick={handleTechQueryButton} />
            {search ?
                <div className='center-text'>
                    <button className='btn clear-button' id='' onClick={handleClearSearch}>
                        Clear Search
                    </button>
                    <h1 className='results-header center-text'>Showing Projects with {search}! </h1>
                </div> : <h1 className=' results-header center-text'>Showing All Projects!</h1>
            }
        </div>

        <div className="d-flex justify-content-center">
            {projects.map((project, index) =>
                <Card
                    github={project.github}
                    link={project.link}
                    key={index}
                    title={project.name}
                    text={project.description}
                    onClick={handleCardButtonClick}
                />)
            }
        </div>
    </>
}

export default Main;