function Videos() {
  const videoLinks = [
    "https://www.youtube.com/embed/7nQ2oiVqKHw",
   
    "https://www.youtube.com/embed/zgdIQyM__w4",
    "https://www.youtube.com/embed/ccL-IHin8iU",
    "https://www.youtube.com/embed/JeU_EYFH1Jk"
  ];

  return (
    <div className="content-page">
      <h2 className="video-title">🎥 Farming Educational Videos</h2>

      <div className="video-grid">
        {videoLinks.map((link, index) => (
          <div key={index} className="video-card">
            <iframe
              src={link}
              title={`Video ${index}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;