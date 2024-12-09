import React from 'react';
import '../Css/Home.css';
import ContactForm from '../components/ContactForm';
import Carouse1 from '../img/Logos/persons/slide-2.png';
import Carouse2 from '../img/Logos/persons/slide-3.png';
import Carouse4 from '../img/Logos/persons/slide-1.png';
import Card1 from '../img/Logos/persons/teacher-3.jpg';
import Card2 from '../img/Logos/persons/games.jpg';
import Card3 from '../img/Logos/persons/clases-en-grupo.jpg';
import Card4 from '../img/Logos/persons/teacher-2.jpg';
import Card5 from '../img/Logos/persons/manos.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Logo from '../img/Logos/Isologo · Sin Espacio.png';

function Home() {
  const { language } = useLanguage();
  const texts = {
     ES: { 
      welcomeTitle1: "Cursos de inglés y español",
      welcomeTitle2: "Dos idiomas, infinitas oportunidades",
      card1Title: "Clases online",
      card1Desc: "Tu comodidad es muy importante para nosotros. Clases online en grupos o individuales con flexibilidad de horarios que te permiten organizar tu tiempo sin necesidad de desplazarte. No importa dónde vivas, nuestras clases online están diseñadas para que todos puedan aprender sin barreras geográficas.",
      card2Title: "Método dinámico",
      card2Desc: "¡Aprender nunca ha sido tan divertido! El método innovador de Speak&Habla se basa en clases interactivas y amenas con actividades divertidas especialmente diseñadas y adaptadas a tu nivel y perfil. Nuestras clases online incluyen herramientas digitales innovadoras que convierten el aprendizaje en una experiencia única.",
      card3Title: "Clases en grupos",
      card3Desc: "Disfruta de las ventajas de tener clases en grupos. Interactuar con otras personas e intercambiar ideas fomenta el desarrollo de la comunicación y un ambiente agradable donde todos pueden mejorar sus habilidades lingüísticas a través del apoyo de sus compañeros.",
      card4Title: "Atención personalizada",
      card4Desc: "¡Aunque estés en línea, nunca estarás solo! Nuestras clases incluyen interacción directa con la profesora y compañeros a través de chats, videollamadas y eventos con actividades. Además, puedes disfrutar de una atención más personalizada uno a uno para resolver todas tus dudas.",
      card5Title: "Certificados oficiales",
      card5Desc: "El éxito está en tus manos. En Speak&Habla te preparamos para asistir a los exámenes oficiales y obtener los certificados tanto de inglés como de español de todos los niveles con mucho éxito. También nos encargamos de la preparación para cualquier examen dentro de tu empresa para que puedas conseguir tus metas profesionales."
     },
     EN: { 
      welcomeTitle1: "English and Spanish Courses",
      welcomeTitle2: "Two languages, endless opportunities",
      card1Title: "Online classes",
      card1Desc: "Your convenience is very important to us. Online classes in groups or individually with flexible schedules that allow you to manage your time without having to commute. No matter where you live, our online classes are designed so that everyone can learn without geographical barriers.",
      card2Title: "Dynamic method",
      card2Desc: "Learning has never been so much fun! Speak&Habla´s innovative method is based on interactive and enjoyable classes with fun activities specially designed and adapted to your level and profile. Our online classes include innovative digital tools which make learning a unique experience.",
      card3Title: "Group classes",
      card3Desc: "Enjoy the advantages of having group classes. Interacting with other people and exchanging ideas encourages the development of communication and creates a pleasant environment where everyone can improve their language skills through the support of their peers.",
      card4Title: "Personalized attention",
      card4Desc: "Even if you are online, you will never be alone! Our classes include direct interaction with the teacher and classmates through chats, video calls and events with activities. In addition, you can enjoy more personalized one-to-one attention to resolve all your doubts.",
      card5Title: "Official certificates",
      card5Desc: "Success is in your hands. At Speak&Habla we prepare you to attend the official exams and obtain certificates in both English and Spanish at all levels with great success. We also take care of the preparation for any exam within your company so that you can achieve your professional goals."

      }
   };

  return (
    <>
    <div className='container'>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
        className="carousel-top"
      >
        <div>
          <img src={Carouse1} alt="Slide 1" />
        </div>
        <div>
          <img src={Carouse2} alt="Slide 2" />
        </div>
        <div>
          <img src={Carouse4} alt="Slide 3" />
        </div>
      </Carousel>
       {/* Sección de bienvenida con texto a la izquierda y logo a la derecha */}
       <div className="welcome-section">
          <div className="welcome-text">
            <h2 class="welcome-1">{texts[language].welcomeTitle1}</h2>
            <h2 class="welcome-2">{texts[language].welcomeTitle2}</h2>
          </div>
          <div className="welcome-logo">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
        </div>
      <div className="cards-section">
          <div className="card">
            <img src={Card1} alt="Card 1" />
            <div className="card-content">
              <h2>{texts[language].card1Title}</h2>
              <p>{texts[language].card1Desc}</p>
            </div>
          </div>
          <div className="card">
            <img src={Card2} alt="Card 2" />
            <div className="card-content">
              <h2>{texts[language].card2Title}</h2>
              <p>{texts[language].card2Desc}</p>
            </div>
          </div>
         
          <div className="card">
            <img src={Card3} alt="Card 3" />
            <div className="card-content">
              <h2>{texts[language].card3Title}</h2>
              <p>{texts[language].card3Desc}</p>
            </div>
          </div>
          <div className="card">
            <img src={Card4} alt="Card 4" />
            <div className="card-content">
              <h2>{texts[language].card4Title}</h2>
              <p>{texts[language].card4Desc}</p>
            </div>
          </div>
          <div className="card">
            <img src={Card5} alt="Card 5" />
            <div className="card-content">
              <h2>{texts[language].card5Title}</h2>
              <p>{texts[language].card5Desc}</p>
            </div>
          </div>
        </div>
          <ContactForm />
    </div>
    </>
  );
}

export default Home;
