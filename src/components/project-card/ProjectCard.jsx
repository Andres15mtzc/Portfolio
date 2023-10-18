import './ProjectCard.css';

function ProjectCard({data}){
    const {name,img,link,description}=data;
    return(
        <li className='project-card'>
            <div className='project-img'>
                <img src={img} alt='project'/>
            </div>
            <div className='info'>
                <h1>{name}</h1>
                <h3>{description}</h3>
                <div className='link'><a href={link} target='_blank'><b>LINK</b></a></div>
            </div>
        </li>
    )
};


export default ProjectCard;