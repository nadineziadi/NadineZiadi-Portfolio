const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-line"></div>
        </div>
        
        <div className="contact-content">
         <p className="contact-text">
            I'm currently seeking a 6-month graduation project internship (PFE) starting soon. 
            I'm excited to apply my skills in real-world projects and contribute to your team's success. 
            Whether you have an opportunity or just want to connect, I'd love to hear from you!
          </p>
          
          <div className="contact-cards">
            <a href="mailto:ziadinadine5@gmail.com" className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>ziadinadine5@gmail.com</p>
            </a>
            
            <a href="tel:+21695131097" className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h4>Phone</h4>
              <p>(+216) 95 131 097</p>
            </a>
            
            <a href="https://linkedin.com/in/nadine-ziadi-a29104229" target="_blank" className="contact-card">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <h4>LinkedIn</h4>
              <p>Connect with me</p>
            </a>
            
            <a href="https://github.com/nadineziadi" target="_blank" className="contact-card">
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <h4>GitHub</h4>
              <p>Check my code</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;