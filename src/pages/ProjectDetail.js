import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import Carousel from '../components/Carousel';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === parseInt(projectId));

  if (!project) {
    return <div className="text-white p-8 text-center">Proyecto no encontrado.</div>;
  }

  // Define images for Google Clone project
  const googleCloneImages = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 pt-24">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">{project.title}</h1>
        <p className="text-lg mb-6">{project.description}</p>

        <div className="mb-8">
          {project.id === 4 ? (
            <Carousel images={googleCloneImages} interval={2000} />
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-md" />
          )}
        </div>

        <Link to="/projects" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Volver a Proyectos
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
