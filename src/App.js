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
            <Route path="/" element={<AboutMe />}/>
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

