import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';



export default function App() {
  return (
    <BrowserRouter>
      <div className='background'>
        <Header />
        <main>
          <Routes>
            <Route path="/my-portfolio-react" element={<AboutMe />}/>
            <Route path='/' element={<AboutMe />}/>
            <Route path="Projects" element={<Projects />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

