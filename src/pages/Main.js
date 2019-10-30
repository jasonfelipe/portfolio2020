import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

const Main = () => {
    const handleClick = event => {
        console.log('Hey lol');
    }

    return <>
        <Card
            title='Example'
            text='something'
        />
    </>
}

export default Main;