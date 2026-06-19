import React, { useState } from 'react';
import ProjectCard from './ProjectCard'
import Filter from './Filter'
import "../ProjectList.css"


function ProjectList({projects}) {
    const [search, setSearch] = useState('');

    function handleSearch(e){
        setSearch(e.target.value)
    }

    const projectsToDisplay = projects
        .filter((project) => project.name.toLowerCase().includes(search.toLowerCase()));
    return(
        <>
            <div className="ui container">
                <Filter search={search} handleSearch={handleSearch}/>
                <div className="ui divider"></div>
                <div className="ui link cards">
                    {projectsToDisplay.map((project) => (
                            <ProjectCard 
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                link={project.link}
                                image={project.image}
                            />

                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectList;