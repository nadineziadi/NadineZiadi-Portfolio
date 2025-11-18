import { useState, useEffect } from 'react';
import { experiences } from '../../data/experience';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentExpIndex, setCurrentExpIndex] = useState(0);

  const handleViewDetails = (experience) => {
    const expIndex = experiences.findIndex(exp => exp.id === experience.id);
    setSelectedExperience(experience);
    setCurrentExpIndex(expIndex);
    setCurrentImageIndex(0);
    setIsFullScreen(false);
  };

  const closeModal = () => {
    setSelectedExperience(null);
    setCurrentImageIndex(0);
    setIsFullScreen(false);
    setCurrentExpIndex(0);
  };

  const nextImage = () => {
    if (selectedExperience) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % (selectedExperience.additionalImages.length + 1)
      );
    }
  };

  const prevImage = () => {
    if (selectedExperience) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedExperience.additionalImages.length : prev - 1
      );
    }
  };

  const nextExperience = () => {
    const nextIndex = (currentExpIndex + 1) % experiences.length;
    setCurrentExpIndex(nextIndex);
    setSelectedExperience(experiences[nextIndex]);
    setCurrentImageIndex(0);
  };

  const prevExperience = () => {
    const prevIndex = currentExpIndex === 0 ? experiences.length - 1 : currentExpIndex - 1;
    setCurrentExpIndex(prevIndex);
    setSelectedExperience(experiences[prevIndex]);
    setCurrentImageIndex(0);
  };

  const handleViewCode = (repoUrl) => {
    if (repoUrl && repoUrl !== '#') {
      window.open(repoUrl, '_blank');
    }
  };

  const getCurrentImage = () => {
    if (!selectedExperience) return '';
    if (currentImageIndex === 0) {
      return selectedExperience.image;
    }
    return selectedExperience.additionalImages[currentImageIndex - 1];
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedExperience) return;
      
      if (e.key === 'Escape') {
        if (isFullScreen) {
          setIsFullScreen(false);
        } else {
          closeModal();
        }
      }
      
      if (e.key === 'ArrowRight') {
        if (isFullScreen) {
          nextImage();
        } else {
          nextExperience();
        }
      }
      
      if (e.key === 'ArrowLeft') {
        if (isFullScreen) {
          prevImage();
        } else {
          prevExperience();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedExperience, isFullScreen]);

  return (
    <>
      <section id="work" className="work-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02.</span>
            <h2 className="section-title">Work Experience</h2>
            <div className="title-line"></div>
          </div>
          
          <div className="experience-grid">
            {experiences.map(exp => (
              <div key={exp.id} className="experience-card fade-in">
                <div className="experience-image">
                  <img src={exp.image} alt={exp.company} />
                  <div className="experience-overlay">
                    <div className="experience-duration">{exp.duration}</div>
                  </div>
                </div>
                
                <div className="experience-content">
                  <div className="experience-header">
                    <div className="experience-title">
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                    </div>
                    <span className="date">{exp.date}</span>
                  </div>
                  
                  <p className="experience-role">{exp.role}</p>
                  
                  <div className="tech-stack">
                    {exp.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <ul className="experience-list">
                    {exp.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  
                  <div className="experience-actions">
                    <button 
                      className="btn-view-details"
                      onClick={() => handleViewDetails(exp)}
                    >
                      <i className="fas fa-images"></i>
                      View Project & Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Details Modal */}
      {selectedExperience && (
        <div className={`modal active experience-modal ${isFullScreen ? 'fullscreen' : ''}`}>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            {/* Experience Navigation Arrows */}
            {!isFullScreen && experiences.length > 1 && (
              <>
                <button 
                  className="exp-nav exp-nav-prev" 
                  onClick={prevExperience}
                  aria-label="Previous experience"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                  className="exp-nav exp-nav-next" 
                  onClick={nextExperience}
                  aria-label="Next experience"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
                
                {/* Experience Counter */}
                <div className="exp-counter">
                  {currentExpIndex + 1} / {experiences.length}
                </div>
              </>
            )}
            
            <div className="modal-body">
              {/* Header - Hidden in fullscreen */}
              {!isFullScreen && (
                <div className="modal-header">
                  <div className="header-content">
                    <h2>{selectedExperience.title}</h2>
                    <p className="company">{selectedExperience.company}</p>
                    <div className="header-meta">
                      <span className="role">{selectedExperience.role}</span>
                      <span className="date">{selectedExperience.date}</span>
                      <span className="duration">{selectedExperience.duration}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Section */}
              <div className="gallery-section">
                <div className="gallery-main">
                  <img 
                    src={getCurrentImage()} 
                    alt={`${selectedExperience.company} - ${currentImageIndex + 1}`}
                    className="gallery-image"
                  />
                  
                  {/* Gallery Controls */}
                  <div className="gallery-controls">
                    {(selectedExperience.additionalImages.length + 1) > 1 && (
                      <>
                        <button className="gallery-nav gallery-prev" onClick={prevImage}>
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="gallery-nav gallery-next" onClick={nextImage}>
                          <i className="fas fa-chevron-right"></i>
                        </button>
                      </>
                    )}
                    
                    <button className="gallery-fullscreen" onClick={toggleFullScreen}>
                      <i className={`fas ${isFullScreen ? 'fa-compress' : 'fa-expand'}`}></i>
                    </button>

                    {/* Close button for fullscreen mode */}
                    {isFullScreen && (
                      <button className="gallery-close-fullscreen" onClick={toggleFullScreen}>
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                  
                  <div className="gallery-indicator">
                    {currentImageIndex + 1} / {selectedExperience.additionalImages.length + 1}
                  </div>
                </div>
                
                {/* Thumbnails - Hidden in fullscreen */}
                {!isFullScreen && (
                  <div className="gallery-thumbnails">
                    <div 
                      className={`thumbnail ${currentImageIndex === 0 ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(0)}
                    >
                      <img src={selectedExperience.image} alt="Main" />
                    </div>
                    {selectedExperience.additionalImages.map((img, index) => (
                      <div 
                        key={index}
                        className={`thumbnail ${currentImageIndex === index + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index + 1)}
                      >
                        <img src={img} alt={`${index + 2}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Section - Hidden in fullscreen */}
              {!isFullScreen && (
                <div className="content-section">
                  <div className="content-grid">
                    {/* Left Column - Details */}
                    <div className="details-column">
                      <div className="tech-section">
                        <h4>Technologies Used</h4>
                        <div className="tech-stack">
                          {selectedExperience.tech.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="responsibilities-section">
                        <h4>Key Responsibilities</h4>
                        <ul className="responsibilities-list">
                          {selectedExperience.points.map((point, index) => (
                            <li key={index}>
                              <i className="fas fa-check"></i>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Achievements & Code */}
                    <div className="actions-column">
                      <div className="achievements-section">
                        <h4>Achievements</h4>
                        <div className="achievements-grid">
                          {selectedExperience.achievements.map((achievement, index) => (
                            <div key={index} className="achievement-card">
                              <div className="achievement-icon">
                                <i className={achievement.icon}></i>
                              </div>
                              <span>{achievement.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="code-section">
                        <h4>View Source Code</h4>
                        <div className="code-buttons">
                          {/* Frontend Button */}
                          {selectedExperience.github.frontend && (
                            <button 
                              className="code-btn frontend-btn"
                              onClick={() => handleViewCode(selectedExperience.github.frontend)}
                            >
                              <i className="fas fa-laptop-code"></i>
                              <div>
                                <span>Frontend</span>
                                <small>
                                  {selectedExperience.tech.some(tech => 
                                    tech.toLowerCase().includes('angular')) ? 'Angular' : 'React'
                                  }
                                </small>
                              </div>
                            </button>
                          )}
                          
                          {/* Backend Button */}
                          {selectedExperience.github.backend && (
                            <button 
                              className="code-btn backend-btn"
                              onClick={() => handleViewCode(selectedExperience.github.backend)}
                            >
                              <i className="fas fa-server"></i>
                              <div>
                                <span>Backend</span>
                                <small>Spring Boot</small>
                              </div>
                            </button>
                          )}
                          
                          {/* ArgoCD Button */}
                          {selectedExperience.github.ArgoCD && (
                            <button 
                              className="code-btn devops-btn"
                              onClick={() => handleViewCode(selectedExperience.github.ArgoCD)}
                            >
                              <i className="fas fa-cloud"></i>
                              <div>
                                <span>ArgoCD</span>
                                <small>CI/CD & Infra</small>
                              </div>
                            </button>
                          )}
                          
                          {/* Fallback DevOps Button */}
                          {selectedExperience.github.devops && !selectedExperience.github.ArgoCD && (
                            <button 
                              className="code-btn devops-btn"
                              onClick={() => handleViewCode(selectedExperience.github.devops)}
                            >
                              <i className="fas fa-cloud"></i>
                              <div>
                                <span>DevOps</span>
                                <small>CI/CD & Infra</small>
                              </div>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;