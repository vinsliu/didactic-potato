import SplitPanel from "../components/SplitPanel";

export default function Projects() {
  const projects = [
    {
      id: "password-generator",
      label: "Générateur de mot de passe",
      content: (
        <>
          <span>
            Générateur de mot de passe avec la possibilité de choisir la
            longueur de celui-ci.
          </span>
          <a
            href="https://vinsliu.github.io/PasswordGenerator/"
            target="_blank"
          >
            Lien
          </a>
        </>
      ),
    },
  ];

  return (
    <section classlabel="projects-page page-section">
      <h2>Projets</h2>

      <SplitPanel sections={projects} storageKey="projects.active" />
    </section>
  );
}
