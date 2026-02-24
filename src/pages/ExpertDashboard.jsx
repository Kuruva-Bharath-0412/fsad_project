import { useNavigate } from "react-router-dom";

function ExpertDashboard() {
  const navigate = useNavigate();

  return (
    <div className="expert-dashboard">

      {/* TOP SECTION */}
      <div className="expert-top">
        <h2 className="expert-title">👩‍🔬 Expert Panel</h2>
        <p className="expert-subtitle">
          Provide guidance and support to farmers
        </p>
      </div>

      {/* BOTTOM SECTION */}
      <div className="expert-content">
        <div className="expert-grid">

          <div
            className="expert-card"
            onClick={() => navigate("/view-queries")}
          >
            <h3>📥 View Farmer Queries</h3>
            <p>See all the questions asked by farmers.</p>
          </div>

          <div
            className="expert-card"
            onClick={() => navigate("/answer-questions")}
          >
            <h3>✍ Answer Questions</h3>
            <p>Provide expert guidance and solutions.</p>
          </div>

          <div
            className="expert-card"
            onClick={() => navigate("/upload-guides")}
          >
            <h3>📚 Upload Farming Guides</h3>
            <p>Share educational materials and best practices.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ExpertDashboard;