import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage.jsx';
import NavBar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

import './App.css';
// console.log(import.meta.env.VITE_API_BASE_URL)


function App() {
  const [projects, setProjects] = useState(null); 
  // const [formData, setFormData] = useState({
  //   name:'',
  //   description: ''
  // });
  // fetch all project when component first renders
  useEffect(() => {
    // fetch all projects
    const fetchProjects = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/projects`);
      const projectData = await res.json();
      console.log(projectData);
      setProjects(projectData.projects)
      
    }
    fetchProjects();

  }, []);

  // const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]:e.target.value,
  //     });
  // };

  // const handleSubmit = async (e) => {
  //     try {
  //       e.preventDefault();
  //       // Make POST request to create new project
  //       const res = await fetch('http://localhost:3500/api/projects/',{
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //       method: 'POST',
  //       body: JSON.stringify(formData)
  //       });

  //       // parse data to json
  //       const data = await res.json();

  //       console.log(data.project);

  //       // adding the new created project to the project array 
  //       setProjects([data.project, ...projects])
        
  //     } catch (error) {
  //       console.error(error);
        
  //     }
  // }
  
  
  return (
    <>
      
      <NavBar />

      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <ProjectsPage projects={projects} setProjects={setProjects} />
          }
        />



        <Route path='/projects/:id' element={<ProjectDetails projects={projects} setProjects={setProjects} />} />
      </Routes>
    </>
  );
}


export default App;
