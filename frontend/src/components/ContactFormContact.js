import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../img/Logos/Azul · Isologo · Sin Espacio.png';
import '../Css/ContactFormContact.css'; // Importar el nuevo archivo CSS



function ContactFormContact() {
  const [status, setStatus] = useState('');
  const { language } = useLanguage();
  const texts = {
    ES: {
      FormTitle1: "Escríbenos",
      Name: "Nombre:",
      Email: "Correo electrónico:",
      Message: "Mensaje:",
      Submit: "Enviar",
      Success: "Correo enviado correctamente",
      Error: "Error al enviar el correo"
    },
    EN: {
      FormTitle1: "Contact",
      Name: "Name:",
      Email: "Email:",
      Message: "Message:",
      Submit: "Send",
      Success: "Email sent successfully",
      Error: "Error sending email"
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    //const response = await fetch('/send-email', {
    const response = await fetch('https://speakandhabla-api.netlify.app/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus({ message: texts[language].Success, type: 'success' });
      console.log('Correo enviado exitosamente'); 
    } else {
      setStatus({ message: texts[language].Error, type: 'error' });
      console.error('Error al enviar el correo'); 
    }
    // Clear status after 3 seconds
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="form-container">
      <div className='header'>
        <img src={Logo} alt='Logo' className='logoForm'/>
        <h2 className='h2-form'>{texts[language].FormTitle1}</h2>
      </div>
      <h3>{texts[language].FormTitle2}</h3>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="name" className='title'>{texts[language].Name}</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email" className='title'>{texts[language].Email}</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message" className='title'>{texts[language].Message}</label>
        <textarea id="message" name="message" required />

        <button type="submit">{texts[language].Submit}</button>
        {/* Pop-up status notification */}
        {status && (
          <div className={`status-popup ${status.type}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactFormContact;
