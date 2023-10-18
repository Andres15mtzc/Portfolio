import './App.css';
import {useState} from "react";
import Resume from './components/resume/Resume';
import ProjectCard from './components/project-card/ProjectCard';
import background from "./Assets/background.jpg";

import raytracerImg from './Assets/Projects/raytracer.png';
import threadsImg from './Assets/Projects/threads.png';
import magicOceanImg from './Assets/Projects/magicOcean.png';
import chatImg from './Assets/Projects/chat.jpeg';
import HandCImg from './Assets/Projects/Hues&Cues.png';

/* This jsx generates the skeleton of the app */

function App() {
  const [projects] = useState(
    [{name: "Raytracer", img: raytracerImg, 
      link:"https://github.com/Andres15mtzc/Raytracer.git", 
      description:"A raytracer made in java that reproduce shadows, lights, reflexions and refractions."},
    {name: "ThreadStates", img: threadsImg, 
      link:"https://github.com/Andres15mtzc/ThreadStates.git", 
      description:"This project shows the funcionality of a thread in Java."},
    {name: "Magic Ocean", img: magicOceanImg, 
      link:"https://github.com/Andres15mtzc/Magic-Ocean.git", 
      description:"A plugin that creates an ocean for Maya. You can define every asset."},
    {name: "Chat-DistributedSystem", img: chatImg, 
      link:"https://github.com/Andres15mtzc/Chat-DistributedSystem.git", 
      description:"An app for chating that use distributed computing to work with multiple computers."},
    {name: "Hues and Cues", img: HandCImg, 
      link:"https://github.com/Andres15mtzc/Hues-and-Cues.git", 
      description:"A game created using JavaFx that combinates the mechanics of other popular games."}]
  )
  return (
    <div className="App" >
      <Resume/>
      <img className='background' src={background} alt='background'/>
      <div className='banner'>
        <h1>Andres Martinez</h1>
        <h4>Software Developer</h4>
      </div>
      <div className='list'>
        <ul>
          {
            projects.map((project, index) => (
              <ProjectCard key={index} data={project}/> 
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
