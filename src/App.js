import './App.css';
import NavBar from './components/nav-bar/NavBar';
import {useState} from "react";
import ProjectCard from './components/project-card/ProjectCard';
import background from "./Assets/background.jpg";

function App() {
  const [projects, setProjects] = useState(
    [{name: "Raytracer", img: "", link:"https://github.com/Andres15mtzc/Raytracer.git", description:"A raytracer made in java that reproduce shadows, lights, reflexions and refractions."},
    {name: "ThreadStates", img: "", link:"https://github.com/Andres15mtzc/ThreadStates.git", description:"This project shows the funcionality of a thread in Java."},
    {name: "Magic Ocean", img: "", link:"https://github.com/Andres15mtzc/Magic-Ocean.git", description:"A plugin that creates an ocean for Maya. You can define every asset."},
    {name: "Chat-DistributedSystem", img: "", link:"https://github.com/Andres15mtzc/Chat-DistributedSystem.git", description:"An app for chating that use distributed computing to work with multiple computers."},
    {name: "", img: "", link:"", description:""}]
  )
  return (
    <div className="App" >
      <NavBar/>
      <img className='background' src={background}/>
      <div className='banner'>
        <h1>Andres Martinez</h1>
        Software Developer
        <h2>I am a Software developer specialized on Machine Learning and data analytics.<br/>Videogame developer as a hobbie</h2>
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
