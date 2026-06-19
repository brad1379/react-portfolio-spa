import React, { useState } from 'react';
import "../ProjectsForm.css"

const initialState = {
    name: "",
    description: "",
    link: "",
    image: ""
}

function ProjectForm({addNewProject}) {
    const [formData, setFormData] = useState(initialState);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addNewProject(formData);
        setFormData(initialState);
    }


    return(
        <form className="ui form" onSubmit={handleSubmit}>
            <h2 className="ui dividing header">Add Project</h2>
            {/* Project Title */}
            <div className="ui field">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            {/* Project Description */}
            <div className="ui field">
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            {/* Project Link */}
            <div className="ui field">
                <label htmlFor="link">Project Link</label>
                <input
                    id="link"
                    name="link"
                    type="text"
                    value={formData.link}
                    onChange={handleChange}
                />
            </div>

            {/* Project Image */}
            <div className="ui field">
                <label htmlFor="url">Project Image</label>
                <input
                    id="url"
                    name="image"
                    type="url"
                    placeholder="https://websiteimage.com"
                    value={formData.image}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit" className="ui button">Add</button>
            </div>
        </form>
    )
}

export default ProjectForm;