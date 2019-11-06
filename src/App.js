import React, {useState, useEffect} from 'react';


import Main from './pages/Main';
import Hero from './components/Hero';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';


const App = () => {
  const [job, setJob] = useState('Human');

  let changeJob = () =>{
    let jobArray = ['Teacher', 'Student', 'Programmer'];
    let counter = 0; 
    setInterval(() => {setJob(jobArray[counter]); counter++; if (counter===jobArray.length) counter = 0;}, 8000)
  }

  useEffect(changeJob, []);

  return (
  <>
    <Hero
        job={job}
    />
    <Wrapper>
      <Main/>
    </Wrapper>
    <Footer></Footer>    
  </>
  );
}

export default App;
