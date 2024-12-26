import "./CardsGrid.css";

const CardsGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Prerana Sarode",
      description: "Interaction Coordinator",
      img: "https://res.cloudinary.com/delnxjp38/image/upload/v1735146780/Prerana_Sarode_EventCoordinator_lhg0ul.jpg",
    },
    {
      id: 2,
      title: "Atharva Gujar",
      description: "NCI Coordinator",
      img: "https://res.cloudinary.com/delnxjp38/image/upload/v1735146725/Atharva_Gujar_EventCoordinator_fnsct2.jpg",
    },
    {
      id: 3,
      title: "Atharva Fude",
      description: "Interaction Student Coordinator",
      img: "https://res.cloudinary.com/delnxjp38/image/upload/v1735146706/Atharva_Funde_vz97y8.png",
    },
    {
      id: 4,
      title: "Himani Thombre",
      description: "Interaction Student Coordinator",
      img: "https://res.cloudinary.com/delnxjp38/image/upload/v1735146708/Himani_Thombre_m6i0uj.png",
    },
  ];

  return (
    <div className="container">
      <h2 className="title">Event Coordinators</h2>
      <div className="grid-container">
        {cards.map((card) => (
          <div key={card.id} className="card1">
            <img src={card.img} alt="" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
