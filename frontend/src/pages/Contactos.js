import React from 'react';
import ContactFormContact from '../components/ContactFormContact';
import { useLanguage } from '../contexts/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../Css/Contacto.css'; // Importar el archivo CSS

function Contacto() {
  const { language } = useLanguage();
  const texts = {
    ES: {
      title: "Contacta con nosotros",
      text: "Para cualquier consulta sobre nuestros cursos, ofertas e inscripciones, estaremos encantados de ayudarte.",
      email: "info@speakandhabla.com",
      whatsapp: "+34 612 25 85 41",
    },
    EN: {
      title: "Contact Us",
      text: "For any inquiries about our courses, offers and registrations, we will be more than happy to help you.",
      email: "info@speakandhabla.com",
      whatsapp: "+34 612 25 85 41",
    }
  };

  return (
    <div className="contacto-container">
      <h3 className="contacto-title">{texts[language].title}</h3>
      <p className="contacto-text">{texts[language].text}</p>
      <p className="contacto-text">
        <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
        <a href={`mailto:${texts[language].email}`} className="contact-link">
          <strong>Email:</strong> <strong>{texts[language].email}</strong>
        </a>
      </p>
      <p className="contacto-text">
        <FontAwesomeIcon icon={faWhatsapp} className="icon" /> 
        <a href={`https://wa.me/${texts[language].whatsapp.replace(/\D/g, '')}`} className="contact-link" target="_blank" rel="noopener noreferrer">
          <strong>WhatsApp:</strong> <strong>{texts[language].whatsapp}</strong>
        </a>
      </p>
      <ContactFormContact />
    </div>
  );
}

export default Contacto;