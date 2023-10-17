import './ProjectCard.css';

function ProjectCard({data}){
    const {name,img,link,description}=data;
    return(
        <li className='project-card'>
            <img src='https://www.schemecolor.com/wallpaper?i=23887&desktop' alt='???'/>
            <div className='info'>
                <h1>{name}Ray Tracer</h1>
                <h3>{description}This project was made by monkeys</h3>
                <a href={link}>Link</a>

            </div>
        </li>
    )
};


export default ProjectCard;