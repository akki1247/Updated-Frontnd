import "./Teacher.css";
import Coordinators from "../Coordinators/Coordinators";
import CardsGrid from "../CardsGrid/CardsGrid";


/* Brain Battle, media splash, wisdomwar, hack in the dark, spark the idea, gold rush*/

const Teacher = () => {
  const events = [
    {
      name: "Spark The Idea",
      teachers: [
        {
          name: "Dr. Shubhangi Bhatambrekar (HOD)",
          image: '',
          contact: "",
        },
        {
          name: "Dr.Deepak Kumbhar",
          image:'',
          contact: "",
        },
        {
          name: "Coord.1",
          image: '',
          contact: "+91 ",
        },
        {
          name: "Coord.2",
          image: '',
          contact: "+91 9766115881",
        },
      ],
    },
    {
      name: "Wisdom War",
      teachers: [
        {
          name: "Dr. Satish Ambike",
          image: '',
          contact: "",
        },
        {
          name: "Prof. Meenal Jabde",
          image: '',
          contact: "",
        },
        {
          name: "Coord. Pratiksha Jangam",
          image: "",
          contact: "+91 7701990217",
        },
        {
          name: "Coord. Avantika Sahane",
          image: "",
          contact: "+91 8975774225",
        },
      ],
    },
    {
      name: "Gamer Strike",
      teachers: [
        {
          name: "Dr. Shubhangi Bhatambrekar (HOD)",
          image: '',
          contact: "",
        },
        {
          name: "Prof. Ranjana Shevkar",
          image: '',
          contact: "",
        },
        {
          name: "Coord. Prasad Deshpande",
          image: "path/to/image3.jpg",
          contact: "+91 8788088130",
        },
        {
          name: "Coord. Dhananjay Kakade",
          image: "path/to/image4.jpg",
          contact: "+91 9766115881",
        },
      ],
    },
    {
      name: "Gamer Strike",
      teachers: [
        {
          name: "Dr. Shubhangi Bhatambrekar (HOD)",
          image: '',
          contact: "",
        },
        {
          name: "Prof. Ranjana Shevkar",
          image: '',
          contact: "",
        },
        {
          name: "Coord. Prasad Deshpande",
          image: "path/to/image3.jpg",
          contact: "+91 8788088130",
        },
        {
          name: "Coord. Dhananjay Kakade",
          image: "path/to/image4.jpg",
          contact: "+91 9766115881",
        },
      ],
    },
    {
      name: "Gamer Strike",
      teachers: [
        {
          name: "Dr. Shubhangi Bhatambrekar (HOD)",
          image: '',
          contact: "",
        },
        {
          name: "Prof. Ranjana Shevkar",
          image: '',
          contact: "",
        },
        {
          name: "Coord. Prasad Deshpande",
          image: "path/to/image3.jpg",
          contact: "+91 8788088130",
        },
        {
          name: "Coord. Dhananjay Kakade",
          image: "path/to/image4.jpg",
          contact: "+91 9766115881",
        },
      ],
    },
    {
      name: "Gamer Strike",
      teachers: [
        {
          name: "Dr. Shubhangi Bhatambrekar (HOD)",
          image: '',
          contact: "",
        },
        {
          name: "Prof. Ranjana Shevkar",
          image: '',
          contact: "",
        },
        {
          name: "Coord. Prasad Deshpande",
          image: "",
          contact: "+91 ",
        },
        {
          name: "Coord. Dhananjay Kakade",
          image: "",
          contact: "+91",
        },
      ],
    },
    // Add more events as needed
  ];

  return (
    <>
    <Coordinators />
    <CardsGrid/>
      <div className="teacher-container">
      <h1 className="header1">INTERACTION COORDINATORS 2025</h1>
      <div className="event-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h2 className="event-title">{event.name}</h2>
            <div className="teachers">
              {event.teachers.map((teacher, i) => (
                <div className="teacher" key={i}>
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="teacher-image"
                  />
                  <p className="teacher-name">{teacher.name}</p>
                  {teacher.contact && (
                    <p className="teacher-contact">{teacher.contact}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Teacher;