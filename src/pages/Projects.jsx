import SplitPanel from "../components/SplitPanel";

export default function Projects() {
  const projects = [
    {
      id: "One",
      label: "Projet 1",
      content: (
        <>
          <p>Projet 1</p>
        </>
      ),
    },
    {
      id: "Two",
      label: "Projet 2",
      content: (
        <>
          <p>Projet 2</p>
        </>
      ),
    },
    {
      id: "Three",
      label: "Projet 3",
      content: (
        <>
          <p>Projet 3</p>
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
