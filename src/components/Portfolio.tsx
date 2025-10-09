import React, { useState } from 'react';
import { Button } from './Button';
import { link } from 'fs';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
const categories = ['All', 'Personal', 'Landing Page', 'React App', 'WordPress'];
const projects = [{
  id: 1,
  title: 'Gerrykoh Portfolio (Static)',
  category: 'Personal',
  image: '/assets/img/Gerrykoh-Computer-Engineering-10-02-2025_08_39_PM.png',
  description: 'My first personal portfolio built using HTML and CSS to showcase projects and basic front-end skills.',
  link: "https://gerrykoh.netlify.app/"
}, {
  id: 2,
  title: 'React Portfolio',
  category: 'Personal',
  image: '/assets/img/Gerrykoh-10-02-2025_08_42_PM.png',
  description: 'A modern React-based portfolio showcasing my web development projects and UI experiments.',
  link: "https://gerrykoh.vercel.app/"
}, {
  id: 3,
  title: 'Flora d’Aura',
  category: 'Landing Page',
  image: '/assets/img/Flora-d-Aura-Cebu-Flower-Bouquets-Crystal-Gifts-10-06-2025_11_18_PM.png',
  description: 'A landing page for a flower and crystal gift shop, designed with a clean and elegant aesthetic.',
  link: "https://floradaura.vercel.app/"
}, {
  id: 4,
  title: 'Menulyy',
  category: 'React App',
  image: '/assets/img/Ordering-System-10-06-2025_11_21_PM.png',
  description: "A food ordering system built with React and Vite, featuring menu browsing, cart management, and Stripe integration.",
  link: "https://menulyy.vercel.app/"
}, {
  id: 5,
  title: 'Menulyy Admin Dashboard',
  category: 'React App',
  image: '/assets/img/Admin-Ordering-System-10-06-2025_11_26_PM.png',
  description: 'An admin dashboard for managing orders, menus, and users for the Menulyy food ordering system.',
  link: "https://admin-menulyy.vercel.app/"
},
{
  id: 6,
  title: 'Prescriptoo Appointment System',
  category: 'React App',
  image: '/assets/img/Prescripto-10-06-2025_11_26_PM.png',
  description: 'A healthcare appointment booking app that allows users to schedule and manage doctor consultations online.',
  link: "https://prescriptoo-appointment-booking.vercel.app/"
},
{
  id: 7,
  title: 'GSAP Animation Test Site',
  category: 'Landing Page',
  image: '/assets/img/Vite-React-10-06-2025_11_28_PM.png',
  description: 'A creative GSAP animation experiment testing motion effects and modern UI transitions.',
  link: "https://award-winning-website-gsap.vercel.app/"
},
{
  id: 8,
  title: 'VTS Training',
  category: 'WordPress',
  image: '/assets/img/vts-training-com-au-10-06-2025_11_31_PM.png',
  description: 'A custom WordPress theme built with ACF, CPT, and custom Gutenberg blocks for a vocational training company.',
  link: "https://vts-training.com.au/"
},
{
  id: 9,
  title: 'Pintsizedesign',
  category: 'WordPress',
  image: '/assets/img/Pintsize-Website-Build-10-06-2025_11_32_PM.png',
  description: 'A WordPress site using a fully custom theme with CPTs, ACFs, and reusable block-based layouts for a design agency.',
  link: "https://dev.pintsizedesign.com.au/"
},
{
  id: 10,
  title: 'Pintsizedesign',
  category: 'WordPress',
  image: '/assets/img/Affiliate-Area-Micah-Finance-Solutions-10-08-2025_04_32_PM.png',
  description: 'A WordPress site using a fully custom theme with CPTs, ACFs, and reusable block-based layouts for a design agency.',
  link: "https://micah.com.au/affiliate-area/"
},
{
  id: 11,
  title: 'Pintsizedesign',
  category: 'WordPress',
  image: '/assets/img/mmgmodels-test-gt-tc-i-1-10-08-2025_04_50_PM.png',
  description: 'A WordPress site using a fully custom theme with CPTs, ACFs, and reusable block-based layouts for a design agency.',
  link: "https://mmgmodels-test.gt.tc/?i=1"
},
];
export function Portfolio() {
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio';
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
  const displayedPortfolio = isPortfolioPage ? filteredProjects : filteredProjects.slice(0, 6);
  
  const content = (
   <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have helped our
            clients achieve their business goals.
          </p>
        </div>
        <div className="flex justify-center mb-10 space-x-2 flex-wrap">
          {categories.map((category, index) => <button key={index} className={`px-4 py-2 rounded-md mb-2 transition-colors ${activeCategory === category ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`} onClick={() => setActiveCategory(category)}>
              {category}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPortfolio.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="outline" size="sm">
                  View Project
                </Button>
              </div>
            </div>)}
        </div>
        {!isPortfolioPage && (
          <div className="text-center mt-12">
            <Button href='/portfolio' variant="primary">View All Projects</Button>
          </div>
        )}
      </div>
    </section>
  );

  // On /products, wrap with Header & Footer
  return isPortfolioPage ? (
    <>
      <Header />
      {content}
      <Footer />
    </>
  ) : (
    content
  );
}