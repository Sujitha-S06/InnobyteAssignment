import './index.css'

const About=()=>{
    return(
        <div className="about-section" id="about">
        <img src="out.jpg" alt="about img" className="about-img"/>
        <div className="about-contents">
          <div className="title"><p className="about-title">ABOUT US</p><hr className="styling-line"/></div>
          <h1 className="about-heading">The Best Holidays Start <br/> Here!</h1>
          <p className="about-text">Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
          <a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=tts" className="address-link">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
          <a href= "tel:+91 9007062180" className="address-link">Contact us: +91 9007062180</a>
          <button className="book-btn">BOOK NOW</button>
        </div>
      </div>
    )
}

export default About