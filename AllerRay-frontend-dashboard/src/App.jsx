import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import SkinCancer from './pages/skincancer/SkinCancer';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import PollenAndHayFever from './pages/pollen/Pollen';
import Activity from './pages/activity/Activity';
import PasswordPage from './pages/password/Password';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleAuthenticate = () => setIsAuthenticated(true);
  /*
  return (

    <div className='app-container'>
      {isAuthenticated ? (
        <>
          <Header />
          <main className='main-content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/skincancer' element={<SkinCancer />} />
              <Route path='/pollenandhayfever' element={<PollenAndHayFever />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/activity' element={<Activity />} />
            </Routes>
          </main>
          <Footer />
        </>
      ) : (
        <PasswordPage onAuthenticate={handleAuthenticate} />
      )}
    </div>
  );*/
  return (
    <>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/skincancer' element={<SkinCancer />} />
          <Route path='/pollenandhayfever' element={<PollenAndHayFever />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/activity' element={<Activity />} />
        </Routes>
      </main>
      <Footer />
    </>
  );

}

export default App;