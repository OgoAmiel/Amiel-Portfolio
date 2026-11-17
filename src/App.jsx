
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const projects = [
  {
    number: "01",
    name: "FlyRank Backend AI Engineering",
    description:
      "A backend engineering project featuring REST APIs, AI-powered support-message triage, event-driven background processing, and database integration. Built with a focus on reliability, automated testing, and containerised development.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Inngest",
      "Docker",
      "LLM APIs",
      "pytest",
    ],
    links: [
      [
        "View repository",
        "https://github.com/OgoAmiel/FlyRank_Backend-AI",
      ],
    ],
  },
  {
    number: "02",
    name: "JobHunter AI",
    description:
      "An AI-powered graduate job-search assistant designed to help graduates across different fields discover relevant opportunities and evaluate job requirements. Integrates external job-search APIs with AI-assisted candidate matching. Currently under development.",
    stack: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "Adzuna API",
      "pytest",
    ],
    links: [],
  },
  {
    number: "03",
    name: "Leave Management System",
    description:
      "A full-stack employee leave management application that enables users to request leave, view balances, track application history, and manage leave requests through a responsive interface and RESTful backend.",
    stack: [
      "Python",
      "Django REST Framework",
      "Vue.js",
      "PostgreSQL",
      "REST APIs",
    ],
    links: [
      [
        "Frontend",
        "https://github.com/OgoAmiel/Ogorogile-Frontend-Leave-System",
      ],
      [
        "Backend",
        "https://github.com/OgoAmiel/Ogorogile-Backend-Leave-System",
      ],
    ],
  },
  {
    number: "04",
    name: "PDF Report Generator",
    description:
      "A backend application that generates downloadable PDF reports from structured database records. Implements data retrieval, HTML-based report rendering, PDF generation, and API endpoints for accessing generated reports.",
    stack: [
      "Python",
      "FastAPI",
      "SQLite",
      "Playwright",
      "REST APIs",
    ],
    links: [
      [
        "View repository",
        "https://github.com/OgoAmiel/PDF-report-generator",
      ],
    ],
  },
  {
    number: "05",
    name: "Task Tracker",
    description:
      "A full-stack task management application supporting task creation, updates, status tracking, and structured workflows through a Vue.js frontend and Django REST Framework backend.",
    stack: [
      "Python",
      "Django REST Framework",
      "Vue.js",
      "REST APIs",
    ],
    links: [
      [
        "Frontend",
        "https://github.com/OgoAmiel/Ogorogile-Frontend-Task-Tracker",
      ],
      [
        "Backend",
        "https://github.com/OgoAmiel/Ogorogile-Backend-Task-Tracker",
      ],
    ],
  },
  {
    number: "06",
    name: "1:27 Tuckshop",
    description:
      "A responsive e-commerce website designed to simplify product browsing and ordering, with an emphasis on usability, intuitive navigation, and practical customer workflows.",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    links: [
      [
        "View repository",
        "https://github.com/OgoAmiel/1-27-Tuckshop",
      ],
    ],
  },
];

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* ABOUT */}
        <section id="about" className="about section">
          <div className="section-label">
            01 / About
          </div>


          <div className="about-copy">
            <p className="display-copy">
              From solving problems to engineering solutions.
            </p>

            <p>
              My journey in software engineering has been driven by
              curiosity about how applications work behind the scenes.
              What started with building user interfaces has evolved
              into a stronger interest in backend systems, application
              architecture, and the technologies that power modern
              software.
            </p>

            <p>
              Through my internships at AI Campus and FlyRank AI,
              I've gained experience working across the software
              development lifecycle. From developing frontend
              components and integrating APIs to implementing
              background processing, database operations, and
              automated testing, these experiences have strengthened
              my understanding of building and maintaining software.
            </p>

            <p>
              Beyond my professional experience, I enjoy exploring
              new technologies and building independent projects
              that challenge me to think critically and improve
              my engineering skills. I'm particularly interested
              in backend engineering, distributed systems, and
              the practical application of artificial intelligence
              in solving real-world problems.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills section">
          <div className="section-label">
            02 / Technical Expertise
          </div>

          <div className="skills-grid">
            <article>
              <h3>Backend Engineering</h3>
              <p>
                Python, FastAPI, Django,
                Django REST Framework,
                RESTful APIs, SQLAlchemy, SQLModel
              </p>
            </article>

            <article>
              <h3>Frontend Development</h3>
              <p>
                Vue.js, React, JavaScript,
                HTML5, CSS3, Bootstrap
              </p>
            </article>

            <article>
              <h3>Databases</h3>
              <p>
                PostgreSQL, SQLite, MySQL,
                SQL, pgAdmin 4
              </p>
            </article>

            <article>
              <h3>AI & Automation</h3>
              <p>
                OpenAI API, LLM Integration,
                Ollama, AI-Assisted Workflows,
                Inngest, Background Processing
              </p>
            </article>

            <article>
              <h3>DevOps & Development Tools</h3>
              <p>
                Docker, Docker Compose,
                Git, GitHub, Postman,
                Swagger UI, VS Code, PyCharm
              </p>
            </article>

            <article>
              <h3>Testing & Engineering Practices</h3>
              <p>
                pytest, Playwright,
                API Testing, Debugging,
                Agile Development,
                Version Control
              </p>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects section">
          <div className="projects-heading">
            <div className="section-label">
              03 / Selected Work
            </div>

            <p>
              A collection of backend systems,
              full-stack applications, and AI-powered
              projects developed through practical
              engineering experience.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className="project"
                key={project.name}
              >
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-main">
                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.links.map(([label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                      <span aria-hidden="true">
                        {" "}&#8599;
                      </span>
                    </a>
                  ))}

                  {project.links.length === 0 && (
                    <span className="project-status">
                      In Development
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="experience section"
        >
          <div className="section-label">
            04 / Professional Experience
          </div>

          <div className="experience-list">
            <article>
              <div>
                <p className="date">
                  July 2026 - Sept 2026
                </p>

                <h3>
                  Backend AI Engineering Intern
                </h3>

                <p className="company">
                  FlyRank AI
                </p>
              </div>

              <p>
                Developed backend functionality using
                Python and FastAPI, including REST API
                endpoints, database integration, and
                automated tests. Implemented event-driven
                background processing with Inngest and
                AI-powered support-message workflows
                using LLM APIs and local models.
                Worked with PostgreSQL, SQLAlchemy,
                Docker, and pytest to support reliable
                application development.
                {" "}
                <a
                  href="https://github.com/OgoAmiel/FlyRank_Backend-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository &#8599;
                </a>
              </p>
            </article>

            <article>
              <div>
                <p className="date">
                  Jun 2025 - Mar 2026
                </p>

                <h3>
                  Software Engineering Intern
                </h3>

                <p className="company">
                  AI Campus
                </p>
              </div>

              <p>
                Contributed to full-stack application
                development using Vue.js, Python,
                Django REST Framework, and PostgreSQL.
                Developed frontend components,
                integrated REST APIs, debugged
                application issues, and tested
                authentication and backend endpoints
                using Postman. Collaborated in an
                Agile development environment.
              </p>
            </article>

            <article>
              <div>
                <p className="date">
                  Aug 2022 - Dec 2023
                </p>

                <h3>
                  Student / Intern
                </h3>

                <p className="company">
                  Hatfield Christian Church Tuckshop
                </p>
              </div>

              <p>
                Developed web interfaces using
                HTML, CSS, and JavaScript,
                focusing on responsive layouts,
                usability, and practical
                customer-facing functionality.
              </p>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <p className="section-label">
            05 / Contact
          </p>

          <h2>
            Let's engineer something meaningful.
          </h2>

          <a
            className="email"
            href="mailto:amielmadisa@gmail.com"
          >
            amielmadisa@gmail.com
            <span aria-hidden="true">
              {" "}&#8599;
            </span>
          </a>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/ogorogile-madisa-29a56a246"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/OgoAmiel"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a href="tel:+27764647235">
              076 464 7235
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;