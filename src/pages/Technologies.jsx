import { useState, useEffect } from "react";

export default function Technologies() {
  const technologies = [
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

  const [active, setActive] = useState(null);

  useEffect(() => {
    // Read persisted selection from localStorage (if any) on mount.
    try {
      const stored = localStorage.getItem("technologies.active");
      if (stored && technologies.some((t) => t.id === stored)) {
        setActive(stored);
      }
    } catch {
      // ignore (no localStorage available)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle(id) {
    setActive((cur) => {
      const next = cur === id ? null : id;

      try {
        if (next) {
          localStorage.setItem("technologies.active", next);
        } else {
          localStorage.removeItem("technologies.active");
        }
      } catch {
        // ignore
      }

      return next;
    });
  }

  const effectiveActive = active ?? technologies[0]?.id ?? null;

  return (
    <section className="technologies page-section">
      <h2>Technologies</h2>

      <div className="tech-grid">
        {technologies.map((s) => (
          <h3 key={s.id}>
            <button
              type="button"
              className={
                "nav-link tech-toggle" +
                (effectiveActive === s.id ? " active" : "")
              }
              onClick={() => toggle(s.id)}
              aria-expanded={effectiveActive === s.id}
              aria-controls={s.id}
            >
              {s.label}
            </button>
          </h3>
        ))}
      </div>

      <div className="tech-panels">
        {technologies.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className={
              "tech-panel" + (effectiveActive === s.id ? " is-active" : "")
            }
            aria-hidden={effectiveActive !== s.id}
          >
            {s.content}
          </section>
        ))}
      </div>
    </section>
  );
}
