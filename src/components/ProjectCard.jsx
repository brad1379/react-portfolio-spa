import React, { useState } from 'react';
import "../ProjectCard.css"

function ProjectCard({name, description, link, image}) {

    return(
        <>
            <a href={link} target="_blank" rel="noreferrer" className="ui card project-card-link">
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="content">
                    <h3>{name}</h3>
                    <div className="description">
                        <p>{link}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default ProjectCard;