const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      items: [
        { name: "React", icon: "fab fa-react" },
        { name: "Angular", icon: "fab fa-angular" },
        { name: "Flutter", icon: "fas fa-mobile" },
        { name: "TypeScript", icon: "fab fa-js" }
      ]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      items: [
        { name: "Spring Boot", icon: "fas fa-leaf" },
        { name: "Java", icon: "fas fa-coffee" },
        { name: "Python", icon: "fab fa-python" },
        { name: "FastAPI", icon: "fas fa-bolt" }
      ]
    },
    {
      title: "DevOps",
      icon: "fas fa-cloud",
      items: [
        { name: "Kubernetes", icon: "fas fa-cubes" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Jenkins", icon: "fas fa-cog" },
        { name: "Ansible", icon: "fas fa-robot" },
        { name: "ArgoCD", icon: "fas fa-sync-alt" },
        { name: "Prometheus", icon: "fas fa-chart-line" }
      ]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      items: [
        { name: "MySQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "PostgreSQL", icon: "fas fa-database" }
      ]
    }
  ];

  return (
    <section className="tech-section" id="tech">
      <div className="section-header">
        <div className="section-number">04.</div>
        <h2 className="section-title">Tech Stack</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="tech-grid">
        {techCategories.map((category, index) => (
          <div key={index} className="tech-category">
            <div className="category-header">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
            </div>
            
            <div className="tech-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="tech-item">
                  <div className="tech-icon">
                    <i className={item.icon}></i>
                  </div>
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;