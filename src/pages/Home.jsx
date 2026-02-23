import Hero from "../components/Hero";
import SchemeCard from "../components/SchemeCard";
import SectorCard from "../components/SectorCard";
import { schemes, sectors } from "../data/dummyData";

function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <h2>Government Schemes</h2>
        <div className="grid">
          {schemes.map((s) => (
            <SchemeCard key={s.id} {...s} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Connect With Sectors</h2>
        <div className="grid">
          {sectors.map((s) => (
            <SectorCard key={s.id} {...s} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;