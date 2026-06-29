import { videos } from "../data/content";

export default function Videos() {
  return (
    <section id="videos" className="section videos">
      <h2 className="section-heading">Videos</h2>
      <div className="videos-grid">
        {videos.map((video) => (
          <div className="video-item" key={video.id}>
            <div className="video-wrapper">
              {video.type === "youtube" ? (
                <iframe
                  src={video.src}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video controls preload="metadata">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
