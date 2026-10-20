const skills = [
  'C', 'C++', 'Python', 'Go',
  'JavaScript', 'React', 'HTML & CSS', 'Git', 'Linux',
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