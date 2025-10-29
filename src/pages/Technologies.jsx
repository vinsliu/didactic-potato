import { useState } from "react";

export default function Technologies() {
  const [active, setActive] = useState(null);

  const sections = [
    { id: "langages", label: "Langages" },
    { id: "frameworks", label: "Frameworks & Librairies" },
    { id: "bdd", label: "Base de données" },
    { id: "outils", label: "Outils & Environnement" },
    { id: "hebergements", label: "Hébergement" },
    { id: "design", label: "Design & UI" },
    { id: "autres", label: "Autres" },
  ];

  function toggle(id) {
    setActive((cur) => (cur === id ? null : id));
  }

  return (
    <section className="technologies">
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
        <section
          id="langages"
          className={"tech-panel" + (active === "langages" ? " is-active" : "")}
        >
          <ul>
            <li>HTML5</li>
            <li>CSS3 / Sass</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>SQL / NoSQL</li>
          </ul>
        </section>

        <section
          id="frameworks"
          className={
            "tech-panel" + (active === "frameworks" ? " is-active" : "")
          }
        >
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
        </section>

        <section
          id="bdd"
          className={"tech-panel" + (active === "bdd" ? " is-active" : "")}
        >
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </section>

        <section
          id="outils"
          className={"tech-panel" + (active === "outils" ? " is-active" : "")}
        >
          <ul>
            <li>Git / GitHub</li>
            <li>VS Code</li>
            <li>Vite</li>
            <li>Postman</li>
            <li>NPM</li>
          </ul>
        </section>

        <section
          id="hebergements"
          className={
            "tech-panel" + (active === "hebergements" ? " is-active" : "")
          }
        >
          <ul>
            <li>GitHub Pages</li>
            <li>Vercel</li>
            <li>Ubuntu Server</li>
          </ul>
        </section>

        <section
          id="design"
          className={"tech-panel" + (active === "design" ? " is-active" : "")}
        >
          <ul>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </section>

        <section
          id="autres"
          className={"tech-panel" + (active === "autres" ? " is-active" : "")}
        >
          <ul>
            <li>SEO</li>
            <li>API Rest</li>
            <li>CI/CD</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
