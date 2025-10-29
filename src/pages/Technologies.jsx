import { useState } from "react";

export default function Technologies() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      id: "langages",
      label: "Langages",
      content: (
        <ul>
          <li>HTML5</li>
          <li>CSS3 / Sass</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>SQL / NoSQL</li>
        </ul>
      ),
    },
    {
      id: "frameworks",
      label: "Frameworks & Librairies",
      content: (
        <>
          <div className="frontend">
            <h4>Frontend</h4>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="backend">
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Symfony</li>
            </ul>
          </div>
          <div className="styling">
            <h4>Styling</h4>
            <ul>
              <li>Bootstrap</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "bdd",
      label: "Base de données",
      content: (
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      ),
    },
    {
      id: "outils",
      label: "Outils & Environnement",
      content: (
        <ul>
          <li>Git / GitHub</li>
          <li>VS Code</li>
          <li>Vite</li>
          <li>Postman</li>
          <li>NPM</li>
        </ul>
      ),
    },
    {
      id: "hebergements",
      label: "Hébergement",
      content: (
        <ul>
          <li>GitHub Pages</li>
          <li>Vercel</li>
          <li>Ubuntu Server</li>
        </ul>
      ),
    },
    {
      id: "design",
      label: "Design & UI",
      content: (
        <ul>
          <li>Figma</li>
          <li>Canva</li>
        </ul>
      ),
    },
    {
      id: "autres",
      label: "Autres",
      content: (
        <ul>
          <li>SEO</li>
          <li>API Rest</li>
          <li>CI/CD</li>
        </ul>
      ),
    },
  ];

  function toggle(id) {
    setActive((cur) => (cur === id ? null : id));
  }

  return (
    <section className="technologies page-section">
      <h2>Technologies</h2>

      <div className="tech-grid">
        {sections.map((s) => (
          <h3 key={s.id}>
            <button
              type="button"
              className={
                "nav-link tech-toggle" + (active === s.id ? " active" : "")
              }
              onClick={() => toggle(s.id)}
              aria-expanded={active === s.id}
              aria-controls={s.id}
            >
              {s.label}
            </button>
          </h3>
        ))}
      </div>

      <div className="tech-panels">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className={"tech-panel" + (active === s.id ? " is-active" : "")}
            aria-hidden={active !== s.id}
          >
            {s.content}
          </section>
        ))}
      </div>
    </section>
  );
}
