import { useState, useEffect } from 'react';
import { projectsData, projectsList } from '../../data/projects';

const Modal = ({ isOpen, project, onClose, onProjectChange }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectData = projectsData[project];

  // Get current project index and total projects
  const currentProjectIndex = projectsList.findIndex(p => p.id === project);
  const totalProjects = projectsList.length;

  // Reset to first image when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  const handleNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % totalProjects;
    const nextProject = projectsList[nextIndex].id;
    if (onProjectChange) {
      onProjectChange(nextProject);
    }
  };

  const handlePrevProject = () => {
    const prevIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects;
    const prevProject = projectsList[prevIndex].id;
    if (onProjectChange) {
      onProjectChange(prevProject);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Get the current image to display
  const getCurrentImage = () => {
    if (projectData.images && projectData.images.length > 0) {
      return projectData.images[currentImageIndex];
    }
    return projectData.image || '/images/placeholder.jpg';
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false);
          } else {
            onClose();
          }
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevProject();
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleNextProject();
          break;
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, isFullscreen]);

  if (!isOpen || !projectData) return null;

  const hasMultipleImages = projectData.images && projectData.images.length > 1;

  return (
    <div className={`modal project-modal ${isOpen ? 'active' : ''} ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        {/* Project Navigation Arrows - Outside the modal */}
        {totalProjects > 1 && !isFullscreen && (
          <>
            <button className="project-nav project-nav-prev" onClick={handlePrevProject}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="project-nav project-nav-next" onClick={handleNextProject}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </>
        )}

        <div className="modal-body">
          {/* Gallery Section */}
          <div className="gallery-section">
            <div className="gallery-main">
              <img 
                src={getCurrentImage()} 
                alt={projectData.title}
                className="gallery-image"
                onClick={toggleFullscreen}
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
              
              {/* Gallery Controls */}
              <div className="gallery-controls">
                <button 
                  className="gallery-fullscreen" 
                  onClick={toggleFullscreen} 
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
                </button>
              </div>
            </div>

            {/* Thumbnails - Click to change main image */}
            {hasMultipleImages && !isFullscreen && (
              <div className="gallery-thumbnails">
                {projectData.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                    title={`View image ${index + 1}`}
                  >
                    <img 
                      src={image} 
                      alt={`${projectData.title} - Image ${index + 1}`}
                      onError={(e) => {
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Info Section - Hidden in fullscreen */}
          {!isFullscreen && (
            <div className="modal-info">
              <div className="modal-header">
                <h2>{projectData.title}</h2>
                <div className="project-links">
                  {/* Student Helper */}
                  {project === 'student-helper' && (
                    <>
                      <a 
                        href="https://github.com/nadineziadi/StudentAssistant-Frontend" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Frontend Code"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                      <a 
                        href="https://github.com/nadineziadi/studentAssistant-Backend" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Backend Code"
                      >
                        <i className="fas fa-server"></i>
                      </a>
                    </>
                  )}
                  
                  {/* GYMINI */}
                  {project === 'gymini' && (
                    <a 
                      href="https://github.com/nadineziadi/ProjetMobileMegaMinds5SAE3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="GitHub Repository"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  
                  {/* Constructify */}
                  {project === 'constructify' && (
                    <>
                      <a 
                        href="https://github.com/nadineziadi/Constuctify-Front" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Frontend Code"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                      <a 
                        href="https://github.com/nadineziadi/Constructify" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Backend Code"
                      >
                        <i className="fas fa-server"></i>
                      </a>
                    </>
                  )}
                  
                  {/* TourNest */}
                  {project === 'tournest' && (
                    <>
                      <a 
                        href="https://github.com/nadineziadi/TourNest-AgenceVoyage-Frontend" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Frontend Code"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                      <a 
                        href="https://github.com/nadineziadi/TourNest-AgenceVoyage-Backend" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Backend Code"
                      >
                        <i className="fas fa-server"></i>
                      </a>
                    </>
                  )}
                  
                  {/* EspritE-learn */}
                  {project === 'esprit-elearn' && (
                    <>
                      <a 
                        href="https://github.com/nadineziadi/EspritE-LearnWebSymfony" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Symfony Code"
                      >
                        <i className="fab fa-php"></i>
                      </a>
                      <a 
                        href="https://github.com/nadineziadi/EspritE-LearnJavaFX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="JavaFX Code"
                      >
                        <i className="fab fa-java"></i>
                      </a>
                    </>
                  )}
                  
                  {/* CRM Dashboard - No links */}
                </div>
              </div>
              
              <div className="modal-tech">
                {projectData.tech?.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <p>{projectData.description}</p>
              
              <div className="modal-features">
                <h3>Key Features</h3>
                <ul>
                  {projectData.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;