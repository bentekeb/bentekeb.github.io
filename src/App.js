import { useEffect } from 'react';
import './App.css';
import salonInterior from './assets/salon-interior.png';
import hairStyling from './assets/hair-styling.png';
import hairPortrait from './assets/hair-portrait.png';
import logo from './assets/logo.png';
import {
  aboutContent,
  actions,
  heroContent,
  navItems,
  services,
} from './data/content';
import { hairLengths, pricingRows } from './data/pricing';

function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <img className="brand-logo" src={logo} alt="HAIR by Falke logo" />
        {/*<a className="brand" href="#home" aria-label="HAIR by Falke home">*/}
        {/*  <span className="brand-mark">HF</span>*/}
        {/*  <span>*/}
        {/*    <strong>HAIR</strong>*/}
        {/*    <small>by Falke</small>*/}
        {/*  </span>*/}
        {/*</a>*/}

        <nav className="nav" aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="nav-cta" type="button" onClick={() => scrollToSection('acties')}>
          Boek afspraak
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src={salonInterior} alt="Warm en modern saloninterieur" />
          <div className="hero-overlay" />
          <div className="hero-content reveal">
            <p className="eyebrow">{heroContent.eyebrow}</p>
            <h1>{heroContent.title}</h1>
            <p>{heroContent.text}</p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={() => scrollToSection('acties')}>
                {heroContent.primaryCta}
              </button>
              <a className="text-link" href="#diensten">
                {heroContent.secondaryCta}
              </a>
            </div>
            <span className="cta-note">{heroContent.note}</span>
          </div>
        </section>

        <section className="section services-section" id="diensten">
          <div className="section-heading reveal">
            <p className="eyebrow">Diensten</p>
            <h2>Verzorging, kleur en snit met aandacht voor jouw stijl.</h2>
          </div>
          <div className="services-layout">
            <div className="image-panel reveal">
              <img src={hairStyling} alt="Haar wordt professioneel gebrusht in het salon" />
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.name}>
                  <span>{service.name}</span>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="prijzen">
          <div className="section-heading reveal">
            <p className="eyebrow">Prijzen</p>
            <h2>Duidelijke richtprijzen per haarlengte.</h2>
          </div>
          <div className="pricing-card reveal">
            <div className="pricing-scroll" aria-label="Prijzentabel">
              <table>
                <thead>
                  <tr>
                    <th>Dienst</th>
                    {hairLengths.map((length) => (
                      <th key={length}>{length}</th>
                    ))}
                    <th>Opmerking</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row) => (
                    <tr key={row.service}>
                      <th scope="row">{row.service}</th>
                      {hairLengths.map((length) => (
                        <td key={length}>{row.prices[length] ? `€ ${row.prices[length]}` : '-'}</td>
                      ))}
                      <td>{row.note || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section about-section" id="over-falke">
          <div className="about-copy reveal">
            <p className="eyebrow">Over Falke</p>
            <h2>{aboutContent.title}</h2>
            <p>{aboutContent.intro}</p>
            <div className="about-statements">
              <article>
                <h3>{aboutContent.mission.title}</h3>
                <p>{aboutContent.mission.text}</p>
              </article>
              <article>
                <h3>{aboutContent.vision.title}</h3>
                <p>{aboutContent.vision.text}</p>
              </article>
            </div>
          </div>
          <div className="portrait-panel reveal">
            <img src={hairPortrait} alt="Glanzend verzorgd haar na een salonbehandeling" />
          </div>
        </section>

        <section className="section actions-section" id="acties">
          <div className="section-heading reveal">
            <p className="eyebrow">Acties</p>
            <h2>Warme extra's voor klanten.</h2>
          </div>
          <div className="action-grid">
            {actions.map((action) => (
              <article className="action-card reveal" key={action.name}>
                <h3>{action.name}</h3>
                <p>{action.description}</p>
              </article>
            ))}
          </div>
          <div className="booking-strip reveal">
            <div>
              <p className="eyebrow">Laat je verwennen</p>
              <h2>Boek afspraak</h2>
              <p>Boek je afspraak en geef je haar de verzorging die het verdient.</p>
            </div>
            <button className="primary-button" type="button">
              Boek afspraak
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
