import './ProjectCard.css';

function ProjectCard({data}){
    const {name,img,link,description}=data;
    return(
        <li className='project-card'>
            <img src='https://www.schemecolor.com/wallpaper?i=23887&desktop' alt='???'/>
            <div className='info'>
                <h1>{name}</h1>
                <h3>{description}</h3>
                <div className='link'><a href={link}><b>LINK</b></a></div>
            </div>
        </li>
    )
};


export default ProjectCard;