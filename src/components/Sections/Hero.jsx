import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Floating cards animation
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
      setInterval(() => {
        const randomY = Math.random() * 20 - 10;
        const randomX = Math.random() * 10 - 5;
        card.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }, 3000 + index * 1000);
    });

    // Add ripple effect to buttons
    const addRippleEffect = (button) => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    };

    document.querySelectorAll('.btn, .btn-cv, .contact-card').forEach(addRippleEffect);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Seeking PFE Opportunity (Jan - Jun 2025)
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Nadine Ziadi</span>
          </h1>
          
          <p className="hero-subtitle">Software Engineering Student</p>
          
          <p className="hero-description">
            Passionate software engineering student crafting innovative solutions with modern technologies. 
            Specialized in building scalable web applications, implementing DevOps practices, and exploring 
            AI/ML integrations. Currently looking for a challenging PFE opportunity to apply my skills.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
            </a>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/nadineziadi" target="_blank" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/nadine-ziadi-a29104229" target="_blank" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:ziadinadine5@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <img src="nadineziadi.jpg" alt="Nadine Ziadi" className="profile-img" />
            <div className="image-border"></div>
          </div>
          
          <div className="floating-card card-1">
            <i className="fas fa-code"></i>
            <span>Web Dev</span>
          </div>
          <div className="floating-card card-2">
            <i className="fas fa-server"></i>
            <span>DevOps</span>
          </div>
          <div className="floating-card card-3">
            <i className="fas fa-brain"></i>
            <span>AI/ML</span>
          </div>
          <div className="floating-card card-4">
            <i className="fas fa-graduation-cap"></i>
            <span>ESPRIT</span>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;