import DiscussionCard from "../components/DiscussionCard";
import { discussions } from "../data/dummyData";

function FarmerDashboard() {
  return (
    <div className="section">
      <h2>Farmer Discussion Forum</h2>
      {discussions.map((d) => (
        <DiscussionCard key={d.id} {...d} />
      ))}
    </div>
  );
}

export default FarmerDashboard;