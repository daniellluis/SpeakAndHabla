import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logos/Blanco · Izquierda · Espacio.png'; // Ajusta la ruta según sea necesario
import { useLanguage } from '../contexts/LanguageContext';
import '../Css/Navbar.css';

function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const texts = {
    ES: {
      home: "Inicio",
      sobreNosotros: "Sobre Nosotros",
      metodologia: "Metodología",
      //materialDidactico: "Material Didáctico",
      //juegos: "Juegos",
      contacto: "Contacto",
    },
    EN: {
      home: "Home",
      sobreNosotros: "About Us",
      metodologia: "Methodology",
      //materialDidactico: "Educational Material",
      //juegos: "Games",
      contacto: "Contact",
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          {Object.keys(texts[language]).map((key) => (
            <li key={key}>
              <Link to={`/${key === 'home' ? '' : key}`} onClick={() => setIsMenuOpen(false)}>
                {texts[language][key]}
              </Link>
            </li>
          ))}
        <li className="language-switcher">
          <button className="lang-button" onClick={() => setLanguage('ES')}>ES</button>
          <button className="lang-button" onClick={() => setLanguage('EN')}>EN</button>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
