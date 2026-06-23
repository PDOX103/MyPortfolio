import { useRef } from 'react'
import './App.css'

const profile = {
  name: 'Zeb Covella',
  role: 'Creative Frontend Developer',
  intro:
    'I design and build fast, modern, immersive web experiences with clean UI, smooth motion, and production-ready frontend architecture.',
  location: 'Bangladesh · Available Worldwide',
  email: 'hello@yourdomain.com',
  resume: '#',
}

const navItems = ['Home', 'Work', 'Skills', 'Process', 'Contact']

const stats = [
  ['12+', 'Featured builds'],
  ['98%', 'Performance focus'],
  ['3D', 'Interactive identity'],
]

const projects = [
  {
    title: 'CampusGuard',
    type: 'AI Safety Platform',
    description:
      'A campus safety command center with incident reporting, smart alerts, live status panels, and role-based dashboards.',
    tags: ['React', 'Node', 'MongoDB', 'Maps'],
  },
  {
    title: 'DGame Bangladesh',
    type: 'Research Game System',
    description:
      'A behavioral data collection platform using game-based tasks, structured CSV exports, and responsive child-friendly UI.',
    tags: ['MERN', 'Research', 'UX', 'CSV'],
  },
  {
    title: 'Brand Motion Lab',
    type: 'Visual Identity Studio',
    description:
      'A premium portfolio system for logo presentation, product mockups, motion-ready assets, and commercial visuals.',
    tags: ['Design', '3D UI', 'Branding', 'Motion'],
  },
]

const skills = [
  'React',
  'Vite',
  'JavaScript',
  'UI/UX',
  'CSS 3D',
  'Responsive Design',
  'Node.js',
  'MongoDB',
  'Product Thinking',
  'Performance',
]

const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'Define audience, goals, content structure, and the main conversion path.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'Create a visual system with color, typography, spacing, motion, and 3D depth.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'Develop reusable components, responsive layouts, and clean frontend logic.',
  },
  {
    step: '04',
    title: 'Launch',
    text: 'Polish performance, accessibility, SEO basics, and deployment readiness.',
  },
]

const services = [
  'Portfolio websites',
  'Landing pages',
  'Dashboard UI',
  'Product mockups',
  'Interactive prototypes',
  'Frontend polish',
]

function App() {
  const sceneRef = useRef(null)

  const handlePointerMove = (event) => {
    const scene = sceneRef.current
    if (!scene) return

    const bounds = scene.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5

    scene.style.setProperty('--rotate-x', `${(-y * 18).toFixed(2)}deg`)
    scene.style.setProperty('--rotate-y', `${(x * 22).toFixed(2)}deg`)
  }

  const resetScene = () => {
    const scene = sceneRef.current
    if (!scene) return
    scene.style.setProperty('--rotate-x', '0deg')
    scene.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">ZC</span>
          <span>Portfolio</span>
        </a>

        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section section" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow">{profile.location}</p>
            <h1>
              Building polished digital products with a cinematic 3D edge.
            </h1>
            <p className="hero-text">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button primary" href="#work">
                View Projects
              </a>
              <a className="button ghost" href={`mailto:${profile.email}`}>
                Start a Project
              </a>
            </div>

            <div className="stats-grid" aria-label="Portfolio highlights">
              {stats.map(([value, label]) => (
                <div className="stat-card" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="scene-wrap reveal delay-one"
            ref={sceneRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetScene}
          >
            <div className="scene-depth" aria-label="Interactive 3D portfolio visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="floating-name-card panel-3d">
                <span>Creative System</span>
                <strong>{profile.name}</strong>
                <small>React · UI · Motion</small>
              </div>

              <div className="device-3d panel-3d">
                <div className="device-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="device-grid">
                  <div className="device-hero" />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>

              <div className="cube-3d" aria-hidden="true">
                <span className="cube-face cube-front">UI</span>
                <span className="cube-face cube-back">UX</span>
                <span className="cube-face cube-right">JS</span>
                <span className="cube-face cube-left">3D</span>
                <span className="cube-face cube-top">AI</span>
                <span className="cube-face cube-bottom">WEB</span>
              </div>

              <span className="skill-bubble bubble-one">React</span>
              <span className="skill-bubble bubble-two">CSS 3D</span>
              <span className="skill-bubble bubble-three">Motion</span>
            </div>
          </div>
        </section>

        <section className="section section-heading" id="work">
          <p className="eyebrow">Selected work</p>
          <h2>Projects designed to feel premium, useful, and memorable.</h2>
        </section>

        <section className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="section split-section" id="skills">
          <div className="section-heading compact reveal">
            <p className="eyebrow">Skill stack</p>
            <h2>A frontend toolkit shaped for modern products.</h2>
            <p>
              The interface uses CSS-based 3D transforms, glass panels, depth layers,
              responsive grids, and motion effects without heavy 3D libraries.
            </p>
          </div>

          <div className="skills-stage reveal delay-one">
            <div className="skills-ring" aria-hidden="true" />
            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading reveal">
            <p className="eyebrow">Working process</p>
            <h2>From rough idea to finished digital experience.</h2>
          </div>

          <div className="timeline">
            {process.map((item) => (
              <article className="timeline-item reveal" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section">
          <div className="marquee" aria-label="Services">
            <div>
              {[...services, ...services].map((service, index) => (
                <span key={`${service}-${index}`}>{service}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card reveal">
            <p className="eyebrow">Let’s collaborate</p>
            <h2>Need a portfolio, product UI, or premium web experience?</h2>
            <p>
              Replace the profile data in <code>src/App.jsx</code> with your real
              details, project links, and email address. The layout is already
              prepared for deployment.
            </p>
            <div className="hero-actions centered">
              <a className="button primary" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
              <a className="button ghost" href={profile.resume}>
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>3D integrated portfolio · React + Vite</span>
      </footer>
    </div>
  )
}

export default App
