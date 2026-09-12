const projects = [
  {
    title: 'Project One',
    description: 'A short description of the project, what it does, and the problem it solves.',
    tags: ['React', 'Node.js'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A short description of the project, what it does, and the problem it solves.',
    tags: ['Python', 'Data'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A short description of the project, what it does, and the problem it solves.',
    tags: ['TypeScript', 'API'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <a href={project.link} className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">{tag}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects