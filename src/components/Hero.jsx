
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <p className="hero-eyebrow">
          Junior Software Engineer / South Africa
        </p>

        <h1>
          Ogorogile<br />
          <span>Amiel Madisa.</span>
        </h1>

        <h2>
          Backend & Full-Stack Engineer building reliable,
          scalable and practical software solutions.
        </h2>

        <p className="hero-description">
          I'm a Software Engineer specialising in backend and
          full-stack development, with a growing focus on AI-powered
          applications. I build REST APIs, data-driven systems,
          and practical web solutions using Python and modern
          development technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explore My Projects
          </a>

          <a
            href="https://github.com/OgoAmiel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub <span aria-hidden="true">&#8599;</span>
          </a>

          <a
            href="/Ogorogile Amiel Madisa Junior Developer CV.pdf"
            download
            className="btn btn-secondary"
          >
            Download CV <span aria-hidden="true">&#8595;</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;