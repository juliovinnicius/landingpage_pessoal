import SectionHeading from "./components/SectionHeading";
import { profile } from "./data/profile";

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark">JM</span>
          <span>{profile.name}</span>
        </a>

        <nav className="nav">
          <a href="#about">Sobre</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experiência</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy panel reveal">
            <span className="eyebrow">Software Engineer</span>
            <h1>{profile.name}</h1>
            <p className="hero-headline">{profile.headline}</p>
            <p className="hero-summary">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Ver experiência
              </a>
              <a className="button button-secondary" href="#contact">
                Entrar em contato
              </a>
            </div>

            <ul className="inline-highlights">
              {profile.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-side reveal">
            <div className="signal-card panel">
              <span className="eyebrow">Posicionamento</span>
              <p>
                Mobile, backend e arquitetura com abordagem prática, foco em
                produto e uso responsável de IA para ganhar velocidade sem
                perder critério técnico.
              </p>
            </div>

            <div className="stats-grid">
              {profile.stats.map((stat) => (
                <article className="stat-card panel" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading
            eyebrow="Sobre"
            title="Engenharia orientada por produto, arquitetura e execução"
            description="Uma apresentação direta do perfil profissional, com ênfase em construção de produto, backend, mobile e uso pragmático de IA."
          />

          <div className="about-grid">
            <article className="panel prose-card reveal">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <aside className="panel note-card reveal">
              <span className="eyebrow">Base técnica</span>
              <h3>Stack principal e formação sólida</h3>
              <p>
                Atuação concentrada em Flutter, Dart, Node.js e APIs, com base
                em Clean Architecture, TDD e evolução contínua de produto.
              </p>
              <p>{profile.education}</p>
            </aside>
          </div>
        </section>

        <section className="section" id="stack">
          <SectionHeading
            eyebrow="Stack"
            title="Tecnologias e práticas que sustentam entregas reais"
            description="Ferramentas e fundamentos usados na construção de aplicações modernas, com leitura clara para recrutadores e times técnicos."
          />

          <div className="chip-grid reveal">
            {profile.technologies.map((technology) => (
              <span className="tech-chip" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading
            eyebrow="Experiência"
            title="Trajetória em engenharia de software"
            description="Empresas e contextos em que atuei, com mais clareza sobre tipo de contribuição técnica, construção de produto e responsabilidades recorrentes."
          />

          <div className="timeline reveal">
            {profile.experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.title}`}>
                <div className="timeline-marker" />
                <div className="panel timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-intro">
                      <span className="eyebrow">Empresa</span>
                      <h3 className="timeline-company">{item.company}</h3>
                      <p className="timeline-role">{item.title}</p>
                    </div>
                    <span className="company-pill">Experiência profissional</span>
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="timeline-details">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="areas">
          <SectionHeading
            eyebrow="Atuação"
            title="Áreas em que concentro valor técnico"
            description="Blocos que reforçam amplitude de atuação sem diluir o posicionamento principal."
          />

          <div className="areas-grid">
            {profile.areas.map((area) => (
              <article className="panel area-card reveal" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <SectionHeading
            eyebrow="Contato"
            title="Canais para conversa profissional"
            description="A estrutura já está pronta para LinkedIn, GitHub e e-mail. Como esses dados não vieram na solicitação, deixei os campos sinalizados para substituição rápida."
          />

          <div className="contact-grid">
            {profile.contact.map((item) => (
              <a
                className={`panel contact-card reveal${item.href === "#" ? " is-placeholder" : ""}`}
                href={item.href}
                key={item.label}
                target={item.href === "#" ? undefined : "_blank"}
                rel={item.href === "#" ? undefined : "noreferrer"}
              >
                <span className="eyebrow">{item.label}</span>
                <strong>{item.value}</strong>
                <span className="contact-action">
                  {item.href === "#" ? "Atualizar este campo" : "Abrir"}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{profile.name}</p>
        <span>Software Engineer | Flutter & Node.js | Mobile & Backend</span>
      </footer>
    </div>
  );
}

export default App;
