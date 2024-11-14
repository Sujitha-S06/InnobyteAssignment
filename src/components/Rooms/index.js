import "./index.css";

const roomList = [
  {
    id: 1,
    imgPath:"small.jpg",
    title: "Cozy Haven Room",
    text_one:
      "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    text_two: "Starting from Rs. 1000/night",
  },
  {
    id:2,
    imgPath:"large.jpg",
    title:"Spacious Serenity Suite",
    text_one:"Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    text_two:"Starting from Rs. 1500/night",
  }
];

const Rooms = () => {
  return (
    <div className="rooms-section" id="rooms">
      <div className="title">
        <p className="rooms-title">OUR LIVING ROOM</p>
        <hr className="styling-line" />
      </div>
      <h1 className="rooms-heading">
        The Most Memorable Rest <br />
        Time Starts Here.
      </h1>
      <ul className="room-cards-container">
        {roomList.map((eachRoom) => (
          <li className="room-card" key={eachRoom.id}>
            <img src={eachRoom.imgPath} alt="room-img-1" className="room-img" />
            <div className="card-contents">
              <p className="card-title">{eachRoom.title}</p>
              <p className="card-text">{eachRoom.text_one}</p>
              <p className="card-text">{eachRoom.text_two}</p>
              <button className="book-btn">BOOK NOW</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Rooms;
