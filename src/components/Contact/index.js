import './index.css'

const Contact = () => {
    return (
        <div className="contact-form">
            <div className="contact-info">
                <h1 className="contact-title">Contact Info</h1>
                <p className="contact-text">Beside Barshal Water Tank, Manpur, Barhanti,
                    West Bengal 723156</p>
                <p className="contact-text">kkghosh0099@gmail.com</p>
                <p className="contact-text">+91 9007062180</p>
            </div>
            <form className="my-form">
                <h1 className="form-title">Send a Message</h1>
                <div className="input-section">
                    <input type="text" className="input-box" placeholder="First Name" />
                    <input type="text" className='input-box' placeholder='Last Name' />
                </div>
                <div className="input-section">
                    <input type="email" className='input-box' placeholder='Email Address' />
                    <input type="text" className='input-box' placeholder='Mobile Number' />
                </div>
                <button type="button" className='book-btn'>Send</button>
            </form>
        </div>
    )
}
export default Contact