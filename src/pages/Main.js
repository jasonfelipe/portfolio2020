import React, {useState} from 'react';
import Hero from '../components/Hero';
import Techbar from '../components/Techbar';
import Card from '../components/Card';

const Main = () => {
    const [search, setSearch] = useState(null); 
    const handleTechQuery = event => {
        let { id } = event.target;
        console.log('Hey lol', id);
    }

    return <>
        <Techbar handleTechBarClick={handleTechQuery}/>
        <Card
            title='Example'
            text='something'
        />
    </>
}

export default Main;