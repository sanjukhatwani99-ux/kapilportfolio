import { hero } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} {hero.name}. All rights reserved.
      </p>
    </footer>
  );
}
