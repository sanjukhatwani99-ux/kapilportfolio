import { hero } from "../data/content";

export default function Hero() {
  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-name">{hero.name}</h1>
        <p className="hero-tagline">{hero.tagline}</p>
      </div>
    </header>
  );
}
