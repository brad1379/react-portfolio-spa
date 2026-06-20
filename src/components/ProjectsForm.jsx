import React, { useState } from 'react';
import "../ProjectsForm.css"

// Empty object for the initial state of the form
const initialState = {
    name: "",
    description: "",
    link: "",
    image: ""
}

function ProjectForm({addNewProject}) {
    const [formData, setFormData] = useState(initialState);
    const [isVisible, setIsVisible] = useState(false);

    // Toggles the visibility of the form
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    // sets the form data based on the input names and values
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(event) {
        // prevents page from refreshing on submit
        event.preventDefault();

        // adds new project from the form data
        addNewProject(formData);

        // clear all form fields
        setFormData(initialState);

        // hides the form after submission
        toggleVisibility();
    }


    return(
        <div>
            {/* Button for showing hiding form */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="ui labeled button">
                <button id="button" className="ui button" onClick={toggleVisibility}><svg aria-hidden="true" class="svg-icon iconArrowDownAlt" width="10" height="10.2" viewBox="0 0 18 18"><path d="m16.01 7.43-1.4-1.41L9 11.6 3.42 6l-1.4 1.42 7 7z"></path></svg></button>
                <label className="ui basic label" htmlFor="button">{isVisible ? "Hide Form" : "Show Form"}</label>
            </div>
            </div>
            {isVisible && (
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
                        placeholder="https://"
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
                        placeholder="https://websiteimage.com/image.pngs"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit" className="ui button">Add</button>
                </div>
            </form>
            )}
        </div>
    )
}

export default ProjectForm;