import {
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  ServerCog,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const EMAIL = "josiahpeter29@gmail.com";

const capabilities = [
  {
    icon: Code2,
    title: "Web apps & dashboards",
    text: "Practical internal tools, booking flows, customer portals and admin systems built around real business workflows.",
    tools: "Laravel · PHP · MySQL · React · Vue",
  },
  {
    icon: Globe2,
    title: "Business websites",
    text: "Fast, polished websites that are easy to manage and designed to turn attention into enquiries.",
    tools: "WordPress · Elementor · JavaScript · SEO",
  },
  {
    icon: ServerCog,
    title: "Performance & delivery",
    text: "Careful debugging, API integrations, cloud deployment and performance work that keeps products dependable.",
    tools: "Cloudflare · REST APIs · Git · CI/CD",
  },
];

const experience = [
  {
    period: "2022 — Present",
    role: "Full-Stack Developer",
    company: "Tech House Sdn Bhd",
    detail: "Building and maintaining business-critical web applications with Laravel, PHP, MySQL and modern JavaScript.",
  },
  {
    period: "2016 — 2022",
    role: "Full-Stack Developer",
    company: "TheJoeCode · Remote",
    detail: "Delivered client applications, responsive interfaces, integrations and performance improvements across the full stack.",
  },
  {
    period: "2015 — 2016",
    role: "iOS Tech Lead",
    company: "Storie.Inc · Remote",
    detail: "Led mobile product development and coordinated closely with backend teams on application architecture and APIs.",
  },
];

const agencyOffers = [
  {
    number: "01",
    title: "Paid technical diagnosis",
    price: "RM350 / US$80",
    text: "A focused review of the issue, its likely cause, priority, and a clear recommendation before either side commits to a larger scope.",
  },
  {
    number: "02",
    title: "48-hour website rescue",
    price: "RM800 - RM1,200",
    text: "Targeted help for broken forms, checkout issues, deployment failures, inherited WordPress problems, and high-priority bugs.",
  },
  {
    number: "03",
    title: "Speed or Laravel sprint",
    price: "RM1,800 - RM3,000",
    text: "A tightly scoped performance, technical SEO, integration, stability, or custom-feature sprint with an agreed outcome.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Josiah Peter James, home" onClick={closeMenu}>
            <span>JPJ</span>
            <small>Full-stack developer</small>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="/agency-support/" onClick={closeMenu}>Agency support</a>
            <a href="#expertise" onClick={closeMenu}>Expertise</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a className="nav-cta" href={`mailto:${EMAIL}`} onClick={closeMenu}>
              Let&apos;s talk <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span /> Open to freelance projects and remote roles</div>
              <p className="eyebrow">Full-stack developer · Kuching, Malaysia</p>
              <h1>Full-stack developer building software for <em>real business work.</em></h1>
              <p className="hero-intro">
                I work mainly with Laravel, WordPress and JavaScript. I can take a project from the initial brief through development, deployment and ongoing support.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View selected work <ArrowUpRight size={18} /></a>
                <a className="button button-secondary" href={`mailto:${EMAIL}`}>Email me <Mail size={18} /></a>
              </div>
              <div className="proof-strip" aria-label="Professional highlights">
                <div><strong>Since 2015</strong><span>Working professionally</span></div>
                <div><strong>Kuching</strong><span>Sarawak, Malaysia</span></div>
                <div><strong>Remote</strong><span>Available worldwide</span></div>
              </div>
            </div>

            <div className="portrait-wrap" aria-label="Portrait of Josiah Peter James">
              <div className="portrait-card">
                <img src="/profile.jpg" alt="Josiah Peter James, full-stack developer" width="600" height="720" />
                <div className="portrait-caption"><strong>Josiah Peter James</strong><small>Full-stack developer</small></div>
              </div>
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">Recent work</p><h2>Projects I&apos;ve built.</h2></div>
              <p>Recent client websites and products across hospitality, corporate services and business operations.</p>
            </div>

            <article className="project project-featured">
              <a className="project-visual" href="https://kymdom.josiahpeter29.workers.dev" target="_blank" rel="noreferrer" aria-label="Open Kymdom Wedding Platform">
                <img src="/kymdom-wedding-rsvp.png" alt="Kymdom wedding RSVP and photo platform" width="1200" height="675" />
                <span className="visual-link"><ArrowUpRight /></span>
              </a>
              <div className="project-copy">
                <div className="project-meta"><span>01</span><span>Independent full-stack project</span></div>
                <h3>Kymdom Wedding Platform</h3>
                <p>A bilingual wedding website with RSVP management, guest photo uploads, admin tools and face grouping.</p>
                <ul className="outcomes">
                  <li><Check /> English and Iban guest experience</li>
                  <li><Check /> Cloud-native uploads and gallery delivery</li>
                  <li><Check /> RSVP dashboard and face-assisted grouping</li>
                </ul>
                <div className="tags"><span>React</span><span>TypeScript</span><span>Cloudflare Workers</span><span>R2 + KV</span></div>
                <div className="project-links">
                  <a href="https://kymdom.josiahpeter29.workers.dev" target="_blank" rel="noreferrer">View live product <ArrowUpRight size={17} /></a>
                  <a href="https://github.com/Syn857/weddingRsvp" target="_blank" rel="noreferrer"><Github size={17} /> Source code</a>
                </div>
              </div>
            </article>

            <div className="client-project-grid">
              <article className="client-project">
                <a className="client-project-image" href="https://rymba-haven.pages.dev" target="_blank" rel="noreferrer" aria-label="Open the Rymba Haven website">
                  <img src="/rymba-haven-site.png" alt="Rymba Haven website homepage" width="1440" height="900" loading="lazy" />
                  <span className="visual-link"><ArrowUpRight /></span>
                </a>
                <div className="client-project-copy">
                  <div className="project-meta"><span>02</span><span>Venue website and CMS</span></div>
                  <h3>Rymba Haven</h3>
                  <p>A multi-page website for a garden event venue in Nilai. It includes venue information, packages, galleries, an enquiry flow, journal publishing and admin tools.</p>
                  <div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Cloudflare Pages</span><span>D1</span></div>
                  <a className="client-project-link" href="https://rymba-haven.pages.dev" target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={17} /></a>
                </div>
              </article>

              <article className="client-project">
                <a className="client-project-image" href="https://skybay.pages.dev" target="_blank" rel="noreferrer" aria-label="Open the SkyBay Integrated website">
                  <img src="/skybay-site.png" alt="SkyBay Integrated website homepage" width="1440" height="900" loading="lazy" />
                  <span className="visual-link"><ArrowUpRight /></span>
                </a>
                <div className="client-project-copy">
                  <div className="project-meta"><span>03</span><span>Corporate website</span></div>
                  <h3>SkyBay Integrated</h3>
                  <p>A responsive corporate website that organises SkyBay&apos;s IT, management and workforce services into clear service pages with a direct contact path.</p>
                  <div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Responsive Design</span><span>Cloudflare Pages</span></div>
                  <a className="client-project-link" href="https://skybay.pages.dev" target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={17} /></a>
                </div>
              </article>

              <article className="client-project">
                <a className="client-project-image" href="https://furniture-better.pages.dev" target="_blank" rel="noreferrer" aria-label="Open the Atelier Noma storefront">
                  <img src="/atelier-noma-site.png" alt="Atelier Noma furniture storefront homepage" width="1280" height="720" loading="lazy" />
                  <span className="visual-link"><ArrowUpRight /></span>
                </a>
                <div className="client-project-copy">
                  <div className="project-meta"><span>04</span><span>Commerce and catalog demo</span></div>
                  <h3>Atelier Noma</h3>
                  <p>A modern furniture storefront with an interactive product catalog and authenticated Supabase admin for creating, editing, publishing and removing products.</p>
                  <div className="tags"><span>Next.js</span><span>TypeScript</span><span>Supabase</span><span>Cloudflare Pages</span></div>
                  <a className="client-project-link" href="https://furniture-better.pages.dev" target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={17} /></a>
                </div>
              </article>

              <article className="client-project">
                <a className="client-project-image" href="https://utaiaku.com" target="_blank" rel="noreferrer" aria-label="Open the Utaiaku reconstitution calculator">
                  <img src="/utaiaku-site.png" alt="Utaiaku interactive peptide reconstitution calculator" width="1280" height="720" loading="lazy" />
                  <span className="visual-link"><ArrowUpRight /></span>
                </a>
                <div className="client-project-copy">
                  <div className="project-meta"><span>05</span><span>Interactive web calculator</span></div>
                  <h3>Utaiaku Calculator</h3>
                  <p>An interactive reconstitution calculator with unit conversion, input validation, syringe visualisation, responsive behavior and search-optimised content.</p>
                  <div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Technical SEO</span><span>Cloudflare</span></div>
                  <a className="client-project-link" href="https://utaiaku.com" target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={17} /></a>
                </div>
              </article>
            </div>

            <article className="project project-secondary">
              <div className="project-copy">
                <div className="project-meta"><span>06</span><span>Enterprise application</span></div>
                <h3>CRM & Operations Platform</h3>
                <p>A Laravel system for customer data, reporting and day-to-day operations. It gives the team one place to manage work that previously lived across separate processes.</p>
                <div className="tags"><span>Laravel</span><span>PHP</span><span>MySQL</span><span>JavaScript</span><span>REST APIs</span></div>
              </div>
              <div className="system-preview" aria-hidden="true">
                <div className="preview-top"><i /><i /><i /><span>Operations overview</span></div>
                <div className="preview-body">
                  <div className="preview-nav"><b /><b /><b /><b /></div>
                  <div className="preview-content"><span /><div className="preview-stats"><i /><i /><i /></div><b /><b /><b /></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Services</p><h2>What I work on.</h2></div>
            <div className="capability-grid">
              {capabilities.map(({ icon: Icon, title, text, tools }, index) => (
                <article className="capability-card" key={title}>
                  <div className="capability-top"><span>0{index + 1}</span><Icon /></div>
                  <h3>{title}</h3><p>{text}</p><small>{tools}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section agency-section" id="agency-support">
          <div className="container">
            <div className="agency-intro">
              <div>
                <p className="eyebrow">For agencies</p>
                <h2>A delivery partner for the work that cannot wait.</h2>
              </div>
              <p>
                I support agencies that need reliable WordPress and Laravel delivery without adding a full-time hire. Bring me in for a contained rescue, a performance sprint, or a defined build block.
              </p>
            </div>

            <div className="agency-grid">
              <div className="agency-promise">
                <p className="agency-label">How I work</p>
                <h3>Clear scope. Calm delivery. No unlimited-support promise.</h3>
                <ul>
                  <li><Check /> I start with the issue, the desired outcome, and the quickest safe path forward.</li>
                  <li><Check /> You get a written scope, delivery checkpoints, and clear handover notes.</li>
                  <li><Check /> I can work white-label and communicate through your existing project process.</li>
                </ul>
                <a className="button button-primary" href={`mailto:${EMAIL}?subject=Agency%20delivery%20support`}>
                  Discuss a project <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="agency-offer-list">
                {agencyOffers.map((offer) => (
                  <article className="agency-offer" key={offer.number}>
                    <div><span>{offer.number}</span><strong>{offer.price}</strong></div>
                    <h3>{offer.title}</h3>
                    <p>{offer.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="agency-footer-note">
              <span>White-label delivery blocks available for WordPress, Laravel, custom workflows, integrations, performance, and technical SEO.</span>
              <a href="/agency-support/">View agency delivery overview <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container experience-grid">
            <div className="experience-intro">
              <p className="eyebrow">Experience</p>
              <h2>More than eight years building for clients and product teams.</h2>
              <p>My work covers frontend development, backend systems, databases, integrations and deployment.</p>
              <a href="/Josiah_Peter_James_CV.pdf" target="_blank" rel="noreferrer">Download résumé <ArrowUpRight size={17} /></a>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.period}`}>
                  <time>{item.period}</time>
                  <div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">Contact</p>
            <h2>Need a developer?</h2>
            <p>Send me a short note about the project or role. I&apos;ll reply by email.</p>
            <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight /></a>
            <div className="social-links">
              <a href="https://wa.me/60146262616" target="_blank" rel="noreferrer" aria-label="Message Josiah on WhatsApp"><MessageCircle size={18} /> WhatsApp</a>
              <a href="https://www.linkedin.com/in/josiah-peter-james-4a3118209" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href="https://github.com/Syn857" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container"><span>© {new Date().getFullYear()} Josiah Peter James</span><span>Kuching, Malaysia</span></div></footer>
    </div>
  );
}

export default App;
