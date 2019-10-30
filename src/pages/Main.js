import React, {useState} from 'react';
import Techbar from '../components/Techbar';
import Card from '../components/Card';
import './main.css';

const Main = () => {
    const [search, setSearch] = useState(null);

    const handleTechQuery = event => {
        let { id } = event.target;
        setSearch(id);
    }

    return <>
        <Techbar handleTechBarClick={handleTechQuery}/>
        {search ? 
            <h1>Now Showing Projects with {search}! </h1>
            : null
        }
        <Card
            title='Example'
            text='something'
        />
    </>
}

export default Main;