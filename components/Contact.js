import { contact } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-heading">{contact.heading}</h2>
      <p className="contact-message">{contact.message}</p>

      <ul className="contact-list">
        <li>
          <span className="contact-label">Email:</span>{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <span className="contact-label">Phone:</span>{" "}
          <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
            {contact.phone}
          </a>
        </li>
        <li>
          <span className="contact-label">Instagram:</span>{" "}
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
            {contact.instagramHandle}
          </a>
        </li>
      </ul>
    </section>
  );
}
