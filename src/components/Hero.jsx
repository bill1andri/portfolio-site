function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <p className="hero-badge">
        <span className="hero-badge-dot" aria-hidden="true" />
        Informatics &amp; Telecommunications · UoA
      </p>
      <p className="eyebrow">Hi, I'm</p>
      <h1>
        <span className="gradient-text">Bill Andrianopoulos</span>
      </h1>
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
