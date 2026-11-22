const projects = [
  {
    title: 'Portfolio Site',
    description: 'This site — a personal portfolio built with React and Vite, deployed automatically to GitHub Pages with GitHub Actions.',
    tags: ['React', 'Vite', 'GitHub Actions'],
    link: 'https://github.com/bill1andri/portfolio-site',
  },
  {
    title: 'Command-line puzzles (progintro hw0)',
    description: 'First assignment for Introduction to Programming at DIT UoA: solving a series of puzzles with Linux tools (cd, man, grep, diff, find, gcc, unzip, tar) and publishing the write-up with GitHub Pages.',
    tags: ['Linux', 'Bash', 'C', 'GitHub Pages'],
    link: 'https://github.com/bill1andri/bill1andri.github.io',
  },
  {
    title: 'Hiking Terrain',
    description: 'A hiking app with a C++ backend that loads real SRTM elevation data, computes terrain slope and difficulty, and finds the steepest points on a map — plus a weather module that rates trail safety from wind, gusts, rain and daylight.',
    tags: ['C++', 'CMake', 'Elevation data'],
    link: 'https://github.com/bill1andri/hiking-terrain',
  },
]

function Projects() {
  return (
    <section id="projects" className="section reveal">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <a
            href={project.link}
            className="project-card reveal"
            key={project.title}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-card-head">
              <h3>{project.title}</h3>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
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