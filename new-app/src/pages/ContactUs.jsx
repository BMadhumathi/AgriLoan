import '../assets/css/ContactUs.css'
import ButtonAppBar from '../components/Navbar';
import back from'../assets/images/contact.jpg';
const ContactUs = () => {
    const handleSendClick = () => {
        // Handle sending logic here (you can add an API call or other actions if needed)
        // For now, let's just display an alert
        alert('Thank you for the feedback');
    };

    return (
        <>
        <div>
        <ButtonAppBar/>
        <div id="img" style={{ backgroundColor:"palegreen", backgroundImage: `url(${back})` }} data-overlay="5"></div>
        <div className='vasa777'>
        <div className="wrapper">
            <div className="title33">
                <h1>Contact Us Form</h1>
            </div>
            <div className="contact-form">
                <div className="input-fields">
                    <input type="text" className="input" placeholder="Name" />
                    <input type="text" className="input" placeholder="Email Address" />
                    <input type="text" className="input" placeholder="Phone" />
                    <input type="text" className="input" placeholder="Subject" />
                </div>
                <div className="msg">
                    <textarea placeholder="Message"></textarea>
                    <div className="btn" onClick={handleSendClick}>Send</div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default ContactUs;