const email = 'spijan69@gmail.com'

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p>
        Interested in working together, or just want to say hi? Reach out.
      </p>
      <a href={`mailto:${email}`} className="button button-primary contact-email">
        {email}
      </a>
      <ul className="social-list">
        <li><a href="#" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </section>
  )
}

export default Contact