import React from 'react';
import './Footer.css';


const Footer: React.FC<{}> = () => {
    return (
    <div className='fm1-body'>
        <div className='footer'>
        <div className='footer_social'>
          <div>
            <img src="public\vester_ai.png" height={"20px"} alt="vester-logo" />
          </div>
          <div style={{textAlign: "justify"}}>Vester AI! AI meets assessment excellence. Elevate your journey with our intuitive platform, offering personalized insights and unparalleled accuracy. Embark on a transformative experience tailored to your success."</div>
          <div>LOGO3</div>
        </div>
        <div className='footer_link'>
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Community</li>
          </ul>
        </div>
        <div className='footer_link'>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Tweet @ us </li>
            <li>Training</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className='footer_link'>
          <h4>Links</h4>
          <ul>
            <li>Courses</li>
            <li>Become a Teacher</li>
            <li>Services</li>
            <li>All in One</li>
          </ul>
        </div>
        <div className='footer_contact'>
        <h4>Contact</h4>
          <ul>
            <li>(91) 12345 45</li>
            <li>support@gmail.com</li>
          </ul>
        </div>
        </div>
    </div>
    );
};

export default Footer;