import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../Css/metodologia.css';

function Metodologia() {
  const { language } = useLanguage();
  const texts = {
    ES: {
      methodologyTitle: "Metodología",
      methodologyText: `
        En <strong>Speak&Habla</strong>, creemos que aprender un nuevo idioma debe ser una experiencia divertida y enriquecedora. 
        Por eso, hemos desarrollado una metodología única basada en actividades dinámicas y vídeos que hacen que cada clase sea amena y efectiva. 
        Todo eso adaptado al nivel y perfil de cada persona y teniendo en cuenta el objetivo profesional y la transformación que quiere conseguir a través de las clases.
        
        Nuestros valores fundamentales son el respeto, el profesionalismo, y la pasión por la enseñanza. 
        En concreto, la pasión por la enseñanza nos impulsa a buscar continuamente nuevas formas de hacer las clases más interesantes y efectivas. 
        A la vez, a través de formaciones y seminarios siempre buscamos la manera de mejorar y ofrecer a nuestros clientes un servicio y enseñanza incomparable.
        
        Por lo tanto, nuestra misión es proporcionar una educación de alta calidad que no solo fomente el aprendizaje, sino que también despierte el interés y la curiosidad por los idiomas. 
        Sabemos que cada persona es única, por lo que adaptamos nuestras clases para satisfacer las necesidades individuales de cada alumno, asegurándose de que todos progresen a su propio ritmo.
      `,
      onlineClassesTitle: "Cursos en Línea",
      onlineClassesText: `
        Entendiendo la importancia de la flexibilidad, especialmente en el mundo de hoy, ofrecemos clases en línea que te permiten aprender desde la comodidad de tu hogar, tu despacho o cualquier lugar que elijas. 
        Nuestros cursos en línea están diseñados para ser interactivos y dinámicos, utilizando las últimas tecnologías para crear una experiencia de aprendizaje inmersiva y efectiva.
      `,
      benefits: [
        "<strong>Flexibilidad:</strong> Aprende a tu propio ritmo y en tus horarios preferidos",
        "<strong>Acceso Global:</strong> Únete a nuestras clases desde cualquier lugar del mundo",
        "<strong>Interactividad:</strong> Participa en actividades en vivo, juegos y cursos en grupo con otros estudiantes",
        "<strong>Materiales Digitales:</strong> Acceso a una amplia gama de recursos y materiales de aprendizaje en línea"
      ]
    },
    EN: {
      methodologyTitle: "Methodology",
      methodologyText: `
        At <strong>Speak&Habla</strong>, we believe that learning a new language should be a fun and enriching experience. 
        That is why we have developed a unique methodology based on dynamic activities and videos that make each class enjoyable and effective. 
        All of this is adapted to the level and profile of each person and taking into account the professional objective and the transformation that they want to achieve through the classes.
        
        Our core values are respect, professionalism, and passion for teaching. 
        Specifically, the passion for teaching drives us to continually look for new ways to make classes more interesting and effective. 
        At the same time, through training and seminars, we always look for ways to improve and offer our clients unparalleled service and teaching.
        
        Therefore, our mission is to provide high-quality education that not only encourages learning but also sparks interest and curiosity about languages. 
        We know that each person is unique, so we adapt our classes to meet the individual needs of each student, ensuring that everyone progresses at their own pace.
      `,
      onlineClassesTitle: "Online Courses",
      onlineClassesText: `
        Understanding the importance of flexibility and convenience, especially in today's world, we offer online classes that allow you to learn from the comfort of your home, your office, or any location you choose. 
        Our online courses are designed to be interactive and dynamic, using the latest technologies to create an immersive and effective learning experience.
      `,
      benefits: [
        "<strong>Flexibility:</strong> Learn at your own pace and at your preferred times",
        "<strong>Global Access:</strong> Join our classes from anywhere in the world",
        "<strong>Interactivity:</strong> Participate in live activities, games, and group courses with other students",
        "<strong>Digital Materials:</strong> Access to a wide range of online learning resources and materials"
      ]
    }
  };

  return (
    <div className="metodologia-container">
      <h2 className="metodologia-title">{texts[language].methodologyTitle}</h2>
      <p className="metodologia-text" dangerouslySetInnerHTML={{ __html: texts[language].methodologyText }}></p>
      <h2 className="metodologia-title">{texts[language].onlineClassesTitle}</h2>
      <p className="metodologia-text" dangerouslySetInnerHTML={{ __html: texts[language].onlineClassesText }}></p>
      <ul className="metodologia-benefits">
        {texts[language].benefits.map((benefit, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: benefit }} />
        ))}
      </ul>
    </div>
  );
}

export default Metodologia;