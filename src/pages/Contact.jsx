export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>Tu peux me joindre via <a href="mailto:ton@email.com">email</a> ou via les réseaux.
      </p>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gap: "0.5rem", maxWidth: 420 }}>
        <label>
          Nom
          <input name="name" />
        </label>
        <label>
          Message
          <textarea name="message" rows={4} />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
