import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const projects = [
  {
    number: "01",
    name: "Leave Management System",
    description:
      "A full-stack employee leave portal for checking balances, requesting leave, tracking history, and cancelling applications.",
    stack: ["Vue.js", "Django REST", "PostgreSQL"],
    links: [
      ["Frontend", "https://github.com/OgoAmiel/Ogorogile-Frontend-Leave-System"],
      ["Backend", "https://github.com/OgoAmiel/Ogorogile-Backend-Leave-System"],
    ],
  },
  {
    number: "02",
    name: "Task Tracker",
    description:
      "A task-management application built around practical CRUD workflows, dynamic task data, and structured status tracking.",
    stack: ["Vue.js", "Django REST", "REST APIs"],
    links: [
      ["Frontend", "https://github.com/OgoAmiel/Ogorogile-Frontend-Task-Tracker"],
      ["Backend", "https://github.com/OgoAmiel/Ogorogile-Backend-Task-Tracker"],
    ],
  },
  {
    number: "03",
    name: "1:27 Tuckshop",
    description:
      "A responsive e-commerce website designed around approachable ordering, clear interaction, and everyday usability.",
    stack: ["JavaScript", "HTML", "CSS"],
    links: [["View repository", "https://github.com/OgoAmiel/1-27-Tuckshop"]],
  },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="about section">
          <div className="section-label">01 / About</div>
          <div className="about-copy">
            <p className="display-copy">
              Good software should make the next step feel obvious.
            </p>
            <p>
              That is the standard I bring to every project: whether someone is submitting a leave request, organising their work, or placing an order, the experience should be clear, dependable, and easy to use. I enjoy taking a real-world problem, breaking it into thoughtful details, and shaping those details into software that people can trust.
            </p>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="section-label">02 / Capabilities</div>
          <div className="skills-grid">
            <article><h3>Frontend</h3><p>Vue.js, JavaScript, HTML, CSS</p></article>
            <article><h3>Backend</h3><p>Python, Django REST Framework, FastAPI</p></article>
            <article><h3>Data</h3><p>PostgreSQL, MySQL, Oracle SQL, Supabase</p></article>
            <article><h3>Workflow</h3><p>Git, Postman, Swagger UI, pgAdmin 4, Agile</p></article>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="projects-heading">
            <div className="section-label">03 / Selected work</div>
            <p>Projects built for the practical work people need to get done.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="project-links">
                  {project.links.map(([label, url]) => (
                    <a key={label} href={url} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">&#8599;</span></a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience section">
          <div className="section-label">04 / Experience</div>
          <div className="experience-list">
            <article>
              <div><p className="date">2026 - Present</p><h3>Backend Development Intern</h3><p className="company">FlyRank / International Internship</p></div>
              <p>Currently contributing to FlyRank, a backend-focused application. Developing and maintaining backend functionality while strengthening practical experience in API development, data handling, and collaborative software delivery. <a href="https://github.com/OgoAmiel/FlyRank_Backend-AI" target="_blank" rel="noreferrer">View repository &#8599;</a></p>
            </article>
            <article>
              <div><p className="date">Jun 2025 - Mar 2026</p><h3>Software Development Intern</h3><p className="company">AI Campus</p></div>
              <p>Developed Vue.js components integrated with Python and Django REST APIs, tested authentication flows in Postman, and helped maintain accurate PostgreSQL data.</p>
            </article>
            <article>
              <div><p className="date">Aug 2022 - Dec 2023</p><h3>Student / Intern</h3><p className="company">Hatfield Christian Church Tuckshop</p></div>
              <p>Created user interfaces with HTML, JavaScript, and CSS, with a focus on usability and efficient day-to-day customer workflows.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="section-label">05 / Contact</p>
          <h2>Let&apos;s build something useful.</h2>
          <a className="email" href="mailto:amielmadisa@gmail.com">amielmadisa@gmail.com <span aria-hidden="true">&#8599;</span></a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/ogorogile-madisa-29a56a246" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/OgoAmiel" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+27764647235">076 464 7235</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;