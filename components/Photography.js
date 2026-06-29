import { photos } from "../data/content";

export default function Photography() {
  return (
    <section id="photography" className="section photography">
      <h2 className="section-heading">Photography</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div className="gallery-item" key={photo.id}>
            {/* Using plain <img> instead of next/image so this stays
                framework-light and easy to swap for Sanity image URLs later. */}
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
