import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './pages/HomePage';
import SobreNosotros from './pages/SobreNosotros';
import MaterialDidactico from './pages/MaterialDidactico';
import Metodologia from './pages/Metodologia';
import Juegos from './pages/Juegos';
import Contacto from './pages/Contactos';
import Navbar from './components/navbar'; // Importa tu Navbar
import { LanguageProvider } from './contexts/LanguageContext';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navbar /> {/* Usa el componente Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobreNosotros" element={<SobreNosotros />} />
            <Route path="/metodologia" element={<Metodologia />} />
            <Route path="/material-didactico" element={<MaterialDidactico />} />
            <Route path="/juegos" element={<Juegos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
