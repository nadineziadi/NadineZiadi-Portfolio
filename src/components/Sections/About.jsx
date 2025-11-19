import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const animateCounter = (element, target, duration = 1000) => {
      let start = 0;
      const increment = target / (duration / 10); // Faster increment
      const shouldAddPlus = element.classList.contains('add-plus');
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          element.textContent = shouldAddPlus ? target + '+' : target.toString();
          clearInterval(counter);
        } else {
          element.textContent = Math.floor(start);
        }
      }, 10); // Faster interval
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          if (entry.target.classList.contains('stat-number')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
          }
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.fade-in, .stat-number').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>I'm a passionate Software Engineering student at ESPRIT, currently seeking a <strong>PFE opportunity</strong> for January-June 2026. I specialize in full-stack development, DevOps practices, and AI/ML integrations.</p>
            
            <p>My journey began at ESEN where I graduated as <strong>valedictorian</strong> with a Bachelor's in Business Computing. This unique background gives me both technical expertise and business understanding, allowing me to build solutions that are not just functional but also impactful.</p>
            
            <p>Through internships at ZeusLabs, BeeCoders, and Arabsoft, I've gained hands-on experience building real-time monitoring dashboards, implementing CI/CD pipelines, and developing AI-powered applications. I enjoy the challenge of taking complex problems and transforming them into scalable, efficient solutions.</p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number add-plus" data-target="11">0</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number add-plus" data-target="15">0</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="5">0</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="1">0</div>
              <div className="stat-label">Academic Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;