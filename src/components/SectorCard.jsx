function SectorCard({ name, info }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{info}</p>
    </div>
  );
}

export default SectorCard;