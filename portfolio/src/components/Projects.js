import React from 'react';
import PROJECTS from '../data/projects';




const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(p => (
                        <Project key={p.id} project={p} />
                    )
                )
            }
        </div>
    </div>
)


const Project = (props) =>  {
        const{title, image, description, link } = props.project;
        return(
            <div style={{ display: 'inline-block', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt='profile' style={{ width: 200, height: 120}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
}


export default Projects;