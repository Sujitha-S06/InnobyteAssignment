import Navbar from '../Navbar';
import About from '../About';
import Rooms from '../Rooms';
import KingsukhServices from '../KingsukhServices';
import Gallery from '../Gallery';
import Contact from '../Contact';
import "./index.css"

const Home=()=>{
  return(
  <div className="bg-container">
    <Navbar />
    <div className="home-container">
      <p className="home-text">Simple - Unique - Friendly</p>
      <h1 className="home-heading">Make Yourself At Home <br /> In Our <span className="highlighted-text">Guest House</span></h1>
    </div>
    <div className="home-box"><button className="book-btn">BOOK NOW</button></div>
    <About />
    <Rooms />
    <KingsukhServices />
    <Gallery />
    <Contact />
  </div>
);
};
export default Home;
