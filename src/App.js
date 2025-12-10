import React from 'react';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skill from './Components/Skill/Skill';
import Home from './Components/Home/Home';
import Rproject from './Components/Rproject/Rproject';
import Client from './Components/Client/Client';
import Contact from './Components/Contact/contact';


function App() {
  return (
    <>
      <Navbar/>
      <Home/> 
      <Projects />
      <Rproject/>
      <Skill/>
      <Client/>
      <Contact/>
    </>
  );
}

export default App;
