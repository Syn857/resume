import { ArrowDown, ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
const EMAIL = "josiahpeter29@gmail.com";
const CV = "/Josiah_Peter_James_CV.pdf";
const capabilities = [
  { title: "WordPress websites", text: "Business websites, content management and enquiry flows. New builds, ongoing maintenance, or finishing a site that needs a steady hand.", stack: "WordPress · PHP · HTML / CSS" },
  { title: "Laravel applications", text: "Business systems, dashboards, customer portals and API integrations. Development grounded in how your team actually works.", stack: "Laravel · MySQL · REST APIs" },
  { title: "Technical problem-solving", text: "Finding and fixing bugs, improving website performance, and supporting deployments. Clear scope, careful changes and testing before handover.", stack: "Debugging · Performance · Technical SEO" },
];
const experience = [
  { period: "2022 — Present", role: "Full-Stack Developer", company: "Tech House Sdn Bhd" },
  { period: "2016 — 2022", role: "Full-Stack Developer", company: "TheJoeCode · Remote" },
  { period: "2015 — 2016", role: "iOS Tech Lead", company: "Storie.Inc · Remote" },
];
const projects = [
  { title: "Rymba Haven", category: "Venue website & content management", description: "A venue website bringing packages, galleries and enquiries into one place, with publishing tools for the team behind it.", contribution: "Website, enquiry flow and journal admin", stack: "JavaScript · Cloudflare Pages · D1", image: "/rymba-haven-site.png", alt: "Rymba Haven venue website, with venue photography and enquiry information", width: 1265, height: 712, href: "https://rymba-haven.pages.dev", link: "Visit website" },
  { title: "Kymdom Wedding Platform", category: "Independent full-stack project", description: "A bilingual guest experience for wedding RSVPs and shared photo uploads. English and Iban guests can respond and contribute through one website.", contribution: "Guest experience, RSVP management and uploads", stack: "React · TypeScript · Cloudflare", image: "/kymdom-wedding-rsvp.png", alt: "Kymdom wedding platform with guest RSVP and photo sharing", width: 1280, height: 720, href: "https://kymdom.josiahpeter29.workers.dev", link: "View live product" },
];
const moreProjects = [
  { title: "SkyBay Integrated", text: "Corporate website for IT, management and workforce services.", href: "https://skybay.pages.dev" },
  { title: "Atelier Noma", text: "Furniture storefront demo with a product catalog and Supabase admin.", href: "https://furniture-better.pages.dev" },
  { title: "Utaiaku Calculator", text: "Interactive calculator with unit conversion and input validation.", href: "https://utaiaku.com" },
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="site-header" onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
      }} onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) { closeMenu(); menuButton.current?.focus(); }
      }}>
        <div className="container header-inner">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">jpj.</span><span>Josiah Peter James<small>Full-stack developer</small></span>
          </a>
          <button className="menu-button" ref={menuButton} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav id="main-navigation" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#experience" onClick={closeMenu}>Experience</a>
            <a href={CV} target="_blank" rel="noreferrer" onClick={closeMenu}>Résumé <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
          </nav>
        </div>
      </header>
      <main id="top" tabIndex={-1}>
        <section className="hero" aria-label="Introduction">
          <div className="container">
            <div className="hero-kicker"><p>Independent developer</p><p>Kuching, Malaysia <span aria-hidden="true">/</span> GMT+8</p></div>
            <div className="hero-grid">
              <div className="hero-copy">
                <h1>Josiah Peter James<span>Websites &amp; software,<br /><em>built to work.</em></span></h1>
                <p className="hero-summary">WordPress. Laravel. Full-stack development.<br />From a new website to the system behind your business.</p>
                <a className="button button-primary" href="#work">Explore my work <ArrowDown size={17} aria-hidden="true" /></a>
              </div>
              <aside className="hero-context" aria-label="Introduction and availability">
                <p>I build and maintain websites and custom applications for businesses and agencies. My work spans frontend development, backend systems and the details that keep them running.</p>
                <dl className="availability"><div><dt>Open to</dt><dd>Freelance, contract &amp; remote roles</dd></div><div><dt>Experience</dt><dd>Building professionally since 2015</dd></div><div><dt>Based in</dt><dd>Kuching, Sarawak · Working worldwide</dd></div></dl>
                <a className="text-link" href={`mailto:${EMAIL}`}>Discuss an opportunity <ArrowUpRight size={17} aria-hidden="true" /></a>
              </aside>
            </div>
            <div className="stack-strip"><span className="eyebrow">Core technologies</span><p>PHP / Laravel <span>WordPress</span><span>React / TypeScript</span><span>MySQL / PostgreSQL</span><span>Cloudflare</span></p></div>
          </div>
        </section>
        <section className="section work-section" id="work" aria-labelledby="work-heading">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-heading">A look at the work.</h2></div><p>Public projects and business systems.<br />What I built, and what it does.</p></div>
            {projects.map(project => <article className="case-study" key={project.title}>
              <a className="project-image" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} / Live website — Open project`}>
                <div className="browser-bar" aria-hidden="true"><span>{project.title} / Live website</span><ArrowUpRight size={14} /></div>
                <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading="lazy" />
              </a>
              <div className="project-copy"><p className="project-meta">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p>
                <dl className="project-details"><div><dt>My contribution</dt><dd>{project.contribution}</dd></div><div><dt>Built with</dt><dd>{project.stack}</dd></div></dl>
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.link} <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
            </article>)}
            <article className="systems-project"><div><p className="project-meta">Business operations / Laravel</p><h3>CRM &amp; Operations Platform</h3></div><div><p>A connected workflow for customer data, reporting and daily operations. My work covered backend development, databases and the interfaces that bring those processes together.</p><p className="technology-note">Laravel · MySQL · REST APIs</p></div></article>
            <details className="more-work"><summary>More projects <span>3 additional projects</span></summary><div className="more-work-list">{moreProjects.map(project => <article key={project.title}><h3><a href={project.href} target="_blank" rel="noreferrer">{project.title} <ArrowUpRight size={17} aria-hidden="true" /></a></h3><p>{project.text}</p></article>)}</div></details>
          </div>
        </section>
        <section className="section expertise-section" id="expertise" aria-labelledby="expertise-heading"><div className="container split-section">
          <div className="section-intro"><p className="eyebrow">02 / Expertise</p><h2 id="expertise-heading">How I can help.</h2><p>Focused technical support, or a build from the ground up.</p><a className="text-link" href="/agency-support/">Agency support &amp; pricing <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="capability-list">{capabilities.map(({ title, text, stack }, i) => <article className="capability-row" key={title}><span className="row-number" aria-hidden="true">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p><p className="technology-note">{stack}</p></div></article>)}</div>
        </div></section>
        <section className="section experience-section" id="experience" aria-labelledby="experience-heading"><div className="container split-section">
          <div className="section-intro"><p className="eyebrow">03 / Experience</p><h2 id="experience-heading">A decade of building.</h2><p>From mobile applications to business systems, with years of remote collaboration.</p><a className="text-link" href={CV} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="timeline">{experience.map(item => <article className="timeline-item" key={item.company}><span>{item.period}</span><div><h3>{item.role}</h3><p>{item.company}</p></div></article>)}</div>
        </div></section>
        <section className="contact-section" id="contact" aria-labelledby="contact-heading"><div className="container contact-grid">
          <div><p className="eyebrow">04 / Contact</p><h2 id="contact-heading">Good work starts<br />with a conversation.</h2><p>Have a project, a technical problem or a development role?<br />Send me the details and we can discuss the next step.</p></div>
          <div className="contact-options"><a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}<ArrowUpRight size={22} aria-hidden="true" /></a><p>Freelance projects · Agency support · Contract &amp; remote roles</p><div className="social-links"><a href="https://www.linkedin.com/in/josiahpeterjames/" target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a><a href="https://github.com/Syn857" target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a><a href={CV} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14} aria-hidden="true" /></a></div></div>
        </div></section>
      </main>
      <footer><div className="container"><span>© {new Date().getFullYear()} Josiah Peter James</span><span>Kuching, Sarawak · Malaysia</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
export default App;
