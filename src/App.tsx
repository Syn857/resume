import { ArrowUpRight, Github, Linkedin, Mail, Menu, MessageCircle, X } from "lucide-react";
import { useRef, useState } from "react";

const EMAIL = "josiahpeter29@gmail.com";

const capabilities = [
  { title: "Business websites", text: "WordPress websites with clear enquiry paths, manageable content, and responsive layouts." },
  { title: "Custom applications", text: "Laravel dashboards, customer portals, and integrations built around your team's workflow." },
  { title: "Fixes & performance", text: "Debugging, technical SEO, and deployment support for websites that need attention." },
];

const experience = [
  { period: "2022 — Present", role: "Full-Stack Developer", company: "Tech House Sdn Bhd" },
  { period: "2016 — 2022", role: "Full-Stack Developer", company: "TheJoeCode · Remote" },
  { period: "2015 — 2016", role: "iOS Tech Lead", company: "Storie.Inc · Remote" },
];

const moreProjects = [
  { title: "SkyBay Integrated", text: "Corporate website organising IT, management, and workforce services.", href: "https://skybay.pages.dev" },
  { title: "Atelier Noma", text: "Furniture storefront demo with a product catalog and Supabase admin.", href: "https://furniture-better.pages.dev" },
  { title: "Utaiaku Calculator", text: "Interactive reconstitution calculator with unit conversion and input validation.", href: "https://utaiaku.com" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="site-header"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && menuOpen) {
            closeMenu();
            menuButton.current?.focus();
          }
        }}>
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Josiah Peter James, home" onClick={closeMenu}>
            <span>JPJ</span><small>Josiah Peter James</small>
          </a>
          <button className="menu-button" ref={menuButton} type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen} aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav id="main-navigation" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#expertise" onClick={closeMenu}>Services</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="/agency-support/" onClick={closeMenu}>Agency support</a>
            <a className="nav-cta" href={`mailto:${EMAIL}`} onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="top" tabIndex={-1}>
        <section className="hero">
          <div className="container hero-kicker"><p>Independent full-stack developer</p><p>Kuching, Malaysia · Working worldwide</p></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>WordPress &amp; Laravel.<br /><em>Built for your business.</em></h1>
              <p className="hero-intro">I&apos;m Josiah. I build websites and custom applications for agencies and growing businesses, from the first brief to deployment.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View selected work <ArrowUpRight size={18} /></a>
                <a className="button button-secondary" href={`mailto:${EMAIL}`}>Let&apos;s talk <Mail size={18} /></a>
              </div>
              <p className="hero-note">Building professionally since 2015. Available for freelance projects.</p>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-card">
                <img src="/profile.jpg" alt="Josiah Peter James, full-stack developer" width="1024" height="1024" />
                <div className="portrait-caption"><strong>Josiah Peter James</strong><small>Developer / Kuching, Malaysia</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Websites and systems<br />built around real work.</h2></div>
            <article className="project project-featured">
              <div className="project-copy">
                <p className="project-meta">Business operations · Laravel</p>
                <h3>CRM &amp; Operations Platform</h3>
                <p>I built a Laravel system to bring customer data, reporting, and daily operations into one place, replacing separate processes with a connected workflow.</p>
                <div className="tags"><span>Laravel</span><span>MySQL</span><span>REST APIs</span></div>
              </div>
              <div className="project-scope">
                <h4>What I worked on</h4>
                <ul><li>Customer data management</li><li>Reporting and operational workflows</li><li>Backend and database development</li></ul>
              </div>
            </article>
            <div className="client-project-grid">
              <article className="client-project">
                <a className="client-project-image" href="https://kymdom.josiahpeter29.workers.dev" target="_blank" rel="noreferrer" aria-label="Open Kymdom Wedding Platform">
                  <img src="/kymdom-wedding-rsvp.png" alt="Kymdom wedding RSVP and photo platform" width="1280" height="720" loading="lazy" />
                  <span className="visual-link"><ArrowUpRight /></span>
                </a>
                <div className="client-project-copy">
                  <p className="project-meta">Independent full-stack project</p><h3>Kymdom Wedding Platform</h3>
                  <p>I built a bilingual guest experience with RSVP management and shared photo uploads. English and Iban guests can respond and contribute photos through one website.</p>
                  <div className="tags"><span>React</span><span>TypeScript</span><span>Cloudflare</span></div>
                  <div className="project-links">
                    <a href="https://kymdom.josiahpeter29.workers.dev" target="_blank" rel="noreferrer">View live product <ArrowUpRight size={17} /></a>
                    <a href="https://github.com/Syn857/weddingRsvp" target="_blank" rel="noreferrer"><Github size={17} /> Source code</a>
                  </div>
                </div>
              </article>
              <article className="client-project">
                <a className="client-project-image" href="https://rymba-haven.pages.dev" target="_blank" rel="noreferrer" aria-label="Open the Rymba Haven website">
                  <img src="/rymba-haven-site.png" alt="Rymba Haven website homepage" width="1265" height="712" loading="lazy" />
                  <span className="visual-link"><ArrowUpRight /></span>
                </a>
                <div className="client-project-copy">
                  <p className="project-meta">Venue website and CMS</p><h3>Rymba Haven</h3>
                  <p>I built the venue website, enquiry flow, and publishing tools. Visitors can explore packages and galleries, while the team manages journal content through an admin interface.</p>
                  <div className="tags"><span>JavaScript</span><span>Cloudflare Pages</span><span>D1</span></div>
                  <a className="client-project-link" href="https://rymba-haven.pages.dev" target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={17} /></a>
                </div>
              </article>
            </div>
            <details className="more-work">
              <summary>More work <span>3 additional projects</span></summary>
              <div className="more-work-list">
                {moreProjects.map((project) => (
                  <article key={project.title}><h3><a href={project.href} target="_blank" rel="noreferrer">{project.title} <ArrowUpRight size={18} /></a></h3><p>{project.text}</p></article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Services</p><h2>Where I can help.</h2></div>
            <div className="capability-grid">
              {capabilities.map(({ title, text }) => <article className="capability-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <aside className="agency-note" aria-label="Agency support">
              <p><strong>Need white-label support?</strong> Bring me into your agency&apos;s workflow for a scoped fix, performance sprint, or custom build.</p>
              <a href="/agency-support/">Agency services &amp; pricing <ArrowUpRight size={17} /></a>
            </aside>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container experience-grid">
            <div className="experience-intro">
              <p className="eyebrow">Experience</p><h2>Building since 2015.</h2>
              <p>From mobile development to business-critical web applications. Also open to remote development roles.</p>
              <a href="/Josiah_Peter_James_CV.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17} /></a>
            </div>
            <div className="timeline">
              {experience.map((item) => <article className="timeline-item" key={item.company}><span>{item.period}</span><div><h3>{item.role}</h3><p>{item.company}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">Contact</p><h2>What are you<br />working on?</h2>
            <p>Tell me what you need built or fixed, and your timeline. I&apos;ll reply by email.</p>
            <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight /></a>
            <div className="social-links">
              <a href="https://wa.me/60146262616" target="_blank" rel="noreferrer" aria-label="Message Josiah on WhatsApp"><MessageCircle size={18} /> WhatsApp</a>
              <a href="https://www.linkedin.com/in/josiah-peter-james-4a3118209" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href="https://github.com/Syn857" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container"><span>© {new Date().getFullYear()} Josiah Peter James</span><span>Built with care in Kuching, Malaysia.</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}

export default App;
