function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <p className="hero-eyebrow">Junior software developer / Pretoria, South Africa</p>

        <h1>
          Ogorogile<br /><span>Amiel Madisa.</span>
        </h1>

        <h2>
          Full-stack developer building thoughtful, practical web applications.
        </h2>

        <p className="hero-description">
          Junior software developer with hands-on full-stack experience building responsive web applications with Vue.js, Python, Django REST Framework, and FastAPI. Skilled in REST API integration, relational databases, and collaborative agile development, with a focus on delivering reliable, user-centred solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a
            href="https://github.com/OgoAmiel"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub <span aria-hidden="true">&#8599;</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;