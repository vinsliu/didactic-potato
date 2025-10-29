import SplitPanel from "../components/SplitPanel";

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
          <div className="style">
            <h4>Style</h4>
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

  return (
    <section className="technologies page-section">
      <h2>Technologies</h2>
      <SplitPanel
        sections={technologies}
        storageKey="technologies.active"
      />
    </section>
  );
}
