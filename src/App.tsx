import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Services from './components/Services';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        {/* <About /> */}
        <Contact />
      </main>
      <Footer />
    </div>;
}