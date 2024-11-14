import { RiShieldStarLine,Ri24HoursFill,RiRestaurant2Fill,RiMap2Line } from "react-icons/ri";
import "./index.css";

const KingsukhServices = () => {
  return (
    <div className="services-section">
    <div className="services-container" id="services">
      <div className="services-contents">
        <div className="title">
          <p className="services-title">SERVICES</p>
          <hr className="styling-line" />
        </div>
        <h1 className="services-heading">
          Strive Only For The <br />
          Best.
        </h1>
        <ul className="services-list">
            <li className="services-item">
            <div className="service-icon security">
                <RiShieldStarLine  color="#34abeb" size={25}/>
            </div>
            <p className="service-text">High Class Security</p>
            </li>
            <li className="services-item">
                <div className="service-icon hours">
                    <Ri24HoursFill color="#ed55b2" size={25}/>
                </div>
                <p className="service-text">24 Hours Room Service</p>
            </li>
            <li className="services-item">
                <div className="service-icon restaurant">
                    <RiRestaurant2Fill color="#b954f0" size={25}/>
                </div>
                <p className="service-text">Restaurant</p>
            </li>
            <li className="services-item">
                <div className="service-icon tourist">
                    <RiMap2Line color="#f0546e" size={25}/>
                </div>
                <p className="service-text">Tourist Guide Support</p>
            </li>
        </ul>
      </div>
    </div>
    <div className="services-box">
        <div className="service-box-contents">
            <h1>100+</h1>
            <p className="service-box-text">Bookings Completed</p>
        </div>
        <div className="service-box-contents">
            <h1>150+</h1>
            <p className="service-box-text">Happy Customers</p>
        </div>
        
    </div>
    <div className="title"><p className="gallery-title">GALLERY</p><hr className="styling-line"/></div>
    </div>
  );
};
export default KingsukhServices;
