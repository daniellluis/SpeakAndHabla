import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../Css/SobreNosotros.css';
import teacherImage from '../img/Logos/persons/Photo8.jpg';

function SobreNosotros() {
  const { language } = useLanguage();
  const texts = {
    ES: {
      welcome: "¡Bienvenidos a Speak&Habla!",
      aboutUsTitle: "Quiénes somos",
      aboutUsText: `
        ¡Hola!
        Mi nombre es <strong>Mary Stratigou</strong>, soy de Grecia y soy la creadora de esta academia online de inglés y español. 
        Soy profesora certificada de inglés y español de las universidades de <strong>Cambridge</strong>, <strong>Michigan</strong>, <strong>Lancashire</strong> y del <strong>Instituto Cervantes</strong> respectivamente. 
        Tengo una experiencia de más de 15 años en el sector de la enseñanza en academias de idiomas, empresas y organizaciones. 
        Esa experiencia y pasión por la enseñanza de idiomas me ha llevado a crear mi propia academia online, Speak&Habla, ¡realizando un sueño de muchos años!
  
        ¡Siempre me han apasionado los idiomas! Os tengo que confesar que hablo seis idiomas: inglés, griego, español, francés, turco y catalán. 
        Siendo alumna yo también, observé que el aprendizaje de un idioma debería ser un placer, sea cual sea el motivo del alumno, sobre todo para los adultos.
        
        Así que mi carrera como profesora comenzó impartiendo clases a profesionales que necesitaban mejorar sus habilidades lingüísticas para avanzar en sus carreras y conseguir sus objetivos profesionales. 
        Esta experiencia inicial me permitió desarrollar un enfoque práctico y orientado a resultados que sigue siendo una piedra angular de mi metodología.
        
        En <strong>Speak&Habla</strong>, ofrezco un ambiente acogedor y estimulante donde aprender inglés y español se convierte en una aventura emocionante. 
        Mi compromiso es ayudarte a alcanzar tus metas lingüísticas y profesionales mientras disfrutas del proceso.
        
        ¡Te invito a unirte a mi comunidad y descubrir cómo aprender un nuevo idioma puede ser divertido y gratificante!
      `,
    },
    EN: {
      welcome: "Welcome to Speak&Habla!",
      aboutUsTitle: "Who we are",
      aboutUsText: `
        Hello!
        My name is <strong>Mary Stratigou</strong>, I am from Greece, and I am the founder of this online academy of English and Spanish. 
        I am a certified teacher of English and Spanish from the universities of <strong>Cambridge</strong>, <strong>Michigan</strong>, <strong>Lancashire</strong>, and <strong>Instituto Cervantes</strong>, respectively. 
        I have more than 15 years of experience in the teaching sector in foreign language schools, companies, and organizations. 
        This experience and passion for language teaching have led me to create my own online academy, Speak&Habla, making a dream of many years come true!
        
        I have always been passionate about languages! I must confess that I speak six languages: English, Greek, Spanish, French, Turkish, and Catalan. 
        As a student myself, I realized that learning a language should be a pleasure, whatever the learner's motive, especially for adults.
        
        Thus, my career as a teacher began by offering classes to professionals who needed to improve their language skills to advance in their careers and achieve their professional goals. 
        This initial experience allowed me to develop a practical and results-oriented approach that remains a cornerstone of my methodology.
        
        At <strong>Speak&Habla</strong>, I offer a welcoming and stimulating environment where learning English and Spanish becomes an exciting adventure. 
        My commitment is to help you achieve your linguistic and professional goals while enjoying the process.
        
        I invite you to join my community and discover how learning a new language can be fun and rewarding!
      `,
    }
  };

  return (
    <div className="sobre-nosotros-container">
      <div className="image-column">
        <img src={teacherImage} alt="Mary Stratigou" />
      </div>
      <div className="text-column">
        <h1>{texts[language].welcome}</h1>
        <h2>{texts[language].aboutUsTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: texts[language].aboutUsText }}></p>
      </div>
    </div>
  );
}

export default SobreNosotros;