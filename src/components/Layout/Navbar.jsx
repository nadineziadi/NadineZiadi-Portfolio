import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={handleNavClick}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Nadine</span>
          <span className="logo-bracket">/&gt;</span>
        </a>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={handleNavClick}>About</a></li>
          <li><a href="#work" className="nav-link" onClick={handleNavClick}>Experience</a></li>
          <li><a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#tech" className="nav-link" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#certifications" className="nav-link" onClick={handleNavClick}>Certifications</a></li>
          <li><a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="nadine-ziadi-cv.pdf" download className="btn-cv">
            <i className="fas fa-download"></i> CV
          </a>
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;