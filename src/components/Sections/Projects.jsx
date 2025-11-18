import { projectsList } from '../../data/projects';

const Projects = ({ onProjectClick }) => {
  const handleProjectClick = (projectId) => {
    onProjectClick(projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-line"></div>
        </div>
        
        <div className="projects-grid">
          {projectsList.map(project => (
            <div 
              key={project.id} 
              className="project-card fade-in"
              data-project={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-project-btn">
                    <i className="fas fa-expand"></i> View Details
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {/* Student Helper */}
                    {project.id === 'student-helper' && (
                      <>
                        <a 
                          href="https://github.com/nadineziadi/StudentAssistant-Frontend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Frontend Code"
                        >
                          <i className="fas fa-code"></i>
                        </a>
                        <a 
                          href="https://github.com/nadineziadi/studentAssistant-Backend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Backend Code"
                        >
                          <i className="fas fa-server"></i>
                        </a>
                      </>
                    )}
                    
                    {/* GYMINI */}
                    {project.id === 'gymini' && (
                      <a 
                        href="https://github.com/nadineziadi/ProjetMobileMegaMinds5SAE3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        title="GitHub Repository"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    
                    {/* Constructify */}
                    {project.id === 'constructify' && (
                      <>
                        <a 
                          href="https://github.com/nadineziadi/Constuctify-Front" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Frontend Code"
                        >
                          <i className="fas fa-code"></i>
                        </a>
                        <a 
                          href="https://github.com/nadineziadi/Constructify" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Backend Code"
                        >
                          <i className="fas fa-server"></i>
                        </a>
                      </>
                    )}
                    
                    {/* TourNest */}
                    {project.id === 'tournest' && (
                      <>
                        <a 
                          href="https://github.com/nadineziadi/TourNest-AgenceVoyage-Frontend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Frontend Code"
                        >
                          <i className="fas fa-code"></i>
                        </a>
                        <a 
                          href="https://github.com/nadineziadi/TourNest-AgenceVoyage-Backend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Backend Code"
                        >
                          <i className="fas fa-server"></i>
                        </a>
                      </>
                    )}
                    
                    {/* EspritE-learn */}
                    {project.id === 'esprit-elearn' && (
                      <>
                        <a 
                          href="https://github.com/nadineziadi/EspritE-LearnWebSymfony" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Symfony Code"
                        >
                          <i className="fab fa-php"></i>
                        </a>
                        <a 
                          href="https://github.com/nadineziadi/EspritE-LearnJavaFX" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          title="JavaFX Code"
                        >
                          <i className="fab fa-java"></i>
                        </a>
                      </>
                    )}
                    
                    {/* CRM Dashboard - No links */}
                  </div>
                </div>
                
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;