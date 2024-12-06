import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import '../Css/Footer.css'; // Archivo CSS para estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/people/SpeakHabla/61563814150323/?rdid=4hryOwUdK84YJj26&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15Zobi3eyy%2F" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/speakandhabla_/?igsh=MTN2dng1dDYzNG1icA%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/speakandhabla/?trk=blended-typeahead" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
