import React, {useState, useEffect} from 'react';

import './App.css';

import Main from './pages/Main';
import Hero from './components/Hero';


const App = () => {
  const [job, setJob] = useState('Human');

  let changeJob = () =>{
    let jobArray = ['Teacher', 'Student', 'Programmer'];
    let counter = 0; 
    setInterval(() => {setJob(jobArray[counter]); counter++; if (counter===jobArray.length) counter = 0;}, 2000)
  }

  useEffect(changeJob, []);

  return (
  <>
    <Hero
        job={job}
    />    
    <Main/>
  </>
  );
}

export default App;
