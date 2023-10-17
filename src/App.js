import './App.css';
import NavBar from './components/nav-bar/NavBar';
import {useState} from "react";
import ProjectCard from './components/project-card/ProjectCard';


function App() {
  const [projects, setProjects] = useState(
    [{name: "", img: "", link:"", description:""},
    {name: "", img: "", link:"", description:""},
    {name: "", img: "", link:"", description:""},
    {name: "", img: "", link:"", description:""},
    {name: "", img: "", link:"", description:""}]
  )
  return (
    <div className="App" >
      <NavBar/>
      <div className='banner'>
        <h1>Andres Martinez</h1>
        Software Developer
        <h2>I am a Software developer specialized on Machine Learning and data analytics.<br/>Videogame developer as a hobbie</h2>
      </div>
      <ul>
        {
          projects.map((project, index) => (
           <ProjectCard key={index} data={project}/> 
          ))
        }
      </ul>
    </div>
  );
}

export default App;
