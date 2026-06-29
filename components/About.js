import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section-heading">{about.heading}</h2>
      <p className="about-bio">{about.bio}</p>
    </section>
  );
}
