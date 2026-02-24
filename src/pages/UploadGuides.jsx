import React, { useState } from "react";

function UploadGuides() {
  const [guide, setGuide] = useState("");
  const [guides, setGuides] = useState([]);

  const handleUpload = () => {
    if (guide.trim() === "") return;
    setGuides([...guides, guide]);
    setGuide("");
  };

  return (
    <div className="content-page">
      <h1>📚 Upload Farming Guides</h1>

      <div className="upload-box">
        <textarea
          placeholder="Write your farming guide here..."
          value={guide}
          onChange={(e) => setGuide(e.target.value)}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>

      <div className="guide-list">
        {guides.map((item, index) => (
          <div key={index} className="guide-card">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadGuides;