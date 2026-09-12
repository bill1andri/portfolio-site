const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Python', 'SQL', 'Git', 'HTML & CSS',
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill} className="tag">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills