const Certifications = () => {
  const certifications = [
    { name: "CCNA", issuer: "Cisco", year: "2023", icon: "fas fa-network-wired" },
    { name: "DevOps", issuer: "9antra", year: "2024", icon: "fas fa-cloud" },
    { name: "Full Stack", issuer: "9antra", year: "2022", icon: "fas fa-layer-group" },
    { name: "Marketing Digital", issuer: "Google", year: "2021", icon: "fas fa-chart-line" },
    { name: "Honoris SDG's, Work Ethics & Gender Equity", issuer: "Honoris United Universities", year: "2025", icon: "fas fa-globe" },
    { name: "AWS Cloud Foundations", issuer: "AWS Academy", year: "2025", icon: "fab fa-aws" },
    { name: "Hashgraph Developer", issuer: "Hashgraph Association", year: "2025", icon: "fas fa-link" }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">Certifications</h2>
          <div className="title-line"></div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-header">
                <div className="cert-icon">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-year-badge">
                  {cert.year}
                </div>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              
              <div className="cert-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;