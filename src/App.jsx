import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import FarmerDashboard from "./pages/FarmerDashboard";
import ExpertDashboard from "./pages/ExpertDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PublicDashboard from "./pages/PublicDashboard";

import Explore from "./pages/Explore";
import Benefits from "./pages/Benefits";
import Sustainable from "./pages/Sustainable";
import Videos from "./pages/Videos";
import Schemes from "./pages/Schemes";
import AskExpert from "./pages/AskExpert";
import MarketPrice from "./pages/MarketPrice";
import Marketplace from "./pages/Marketplace";
import Connect from "./pages/Connect";
import ViewQueries from "./pages/ViewQueries";
import UploadGuides from "./pages/UploadGuides";
import AnswerQuestions from "./pages/AnswerQuestions";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/public" element={<PublicDashboard />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/expert" element={<ExpertDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/explore" element={<Explore />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/sustainable" element={<Sustainable />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/schemes" element={<Schemes />} />
<Route path="/ask-expert" element={<AskExpert />} />
<Route path="/market-price" element={<MarketPrice />} />
<Route path="/market-price" element={<MarketPrice />} />
<Route path="/marketplace" element={<Marketplace />} />
<Route path="/connect" element={<Connect />} />
<Route path="/view-queries" element={<ViewQueries />} />
<Route path="/upload-guides" element={<UploadGuides />} />
<Route path="/answer-questions" element={<AnswerQuestions />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;