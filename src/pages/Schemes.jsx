function Schemes() {
  const schemes = [
    {
      name: "PM-KISAN",
      desc: "Provides financial assistance to farmers."
    },
    {
      name: "Crop Insurance",
      desc: "Protects farmers against crop loss."
    },
    {
      name: "eNAM",
      desc: "National Agriculture Market for better pricing."
    }
  ];

  return (
    <div className="content-page">
      <h2>🏛 Government Schemes</h2>

      {schemes.map((scheme, index) => (
        <div key={index} className="scheme-card">
          <h3>{scheme.name}</h3>
          <p>{scheme.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Schemes;