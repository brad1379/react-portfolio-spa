import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectsForm';
import projects from "./project_data"
import './App.css';

function App() {
  const [projectList, setProjectList] = useState(projects);

  function addNewProject(newProject){
    setProjectList((projectList) => [...projectList, newProject]);
  }

  return (
      <div className="App">
        <h1 className="ui center aligned header">Personal Project Showcase App</h1>
        <div className="ui container">
          <ProjectForm addNewProject={addNewProject}/>
        </div>
        <ProjectList projects={projectList} />
      </div>
  )
}

export default App
