function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>Bill Andrianopoulos</h1>
      <p className="hero-subtitle">
        Second-year Informatics &amp; Telecommunications student at the
        University of Athens.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="button button-primary">
          View my work
        </a>
        <a href="#contact" className="button button-secondary">
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero