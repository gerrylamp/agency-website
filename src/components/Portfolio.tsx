import React, { useState } from 'react';
import { Button } from './Button';
import { link } from 'fs';
const categories = ['All', 'Web Design', 'Mobile Apps', 'Branding', 'Marketing'];
const projects = [{
  id: 1,
  title: 'Ecommerce Platform Redesign',
  category: 'Web Design',
  image: '/assets/img/Gerrykoh-Computer-Engineering-10-02-2025_08_39_PM.png',
  description: 'Complete redesign of an ecommerce platform, focusing on user experience and conversion optimization.',
  link: "https://gerrykoh.netlify.app/"
}, {
  id: 2,
  title: 'Financial Services App',
  category: 'Mobile Apps',
  image: '/assets/img/Gerrykoh-10-02-2025_08_42_PM.png',
  description: 'Mobile application for a financial services company, providing users with account management tools.',
  link: "https://gerrykoh.vercel.app/"
}, {
  id: 3,
  title: 'Restaurant Brand Identity',
  category: 'Branding',
  image: '/assets/img/Flora-d-Aura-Cebu-Flower-Bouquets-Crystal-Gifts-10-06-2025_11_18_PM.png',
  description: 'Complete brand identity system for an upscale restaurant chain, including logo, color palette, and marketing materials.',
  link: "https://floradaura.vercel.app/"
}, {
  id: 4,
  title: 'Social Media Campaign',
  category: 'Marketing',
  image: '/assets/img/Ordering-System-10-06-2025_11_21_PM.png',
  description: "Integrated social media campaign that increased engagement by 200% and drove significant traffic to the client's website.",
  link: "https://menulyy.vercel.app/"
}, {
  id: 5,
  title: 'Healthcare Provider Website',
  category: 'Web Design',
  image: '/assets/img/Admin-Ordering-System-10-06-2025_11_26_PM.png',
  description: 'Modern, accessible website for a healthcare provider, focusing on patient experience and information architecture.',
  link: "https://admin-menulyy.vercel.app/"
},
{
  id: 6,
  title: 'Fitness Tracking App',
  category: 'Mobile Apps',
  image: '/assets/img/Prescripto-10-06-2025_11_26_PM.png',
  description: 'Mobile application for fitness tracking with personalized workout plans and progress monitoring.',
  link: "https://prescriptoo-appointment-booking.vercel.app/"
},
{
  id: 7,
  title: 'Fitness Tracking App',
  category: 'Mobile Apps',
  image: '/assets/img/Vite-React-10-06-2025_11_28_PM.png',
  description: 'Mobile application for fitness tracking with personalized workout plans and progress monitoring.',
  link: "https://award-winning-website-gsap.vercel.app/"
},
{
  id: 8,
  title: 'Fitness Tracking App',
  category: 'Mobile Apps',
  image: '/assets/img/vts-training-com-au-10-06-2025_11_31_PM.png',
  description: 'Mobile application for fitness tracking with personalized workout plans and progress monitoring.',
  link: "https://vts-training.com.au/"
},
{
  id: 9,
  title: 'Fitness Tracking App',
  category: 'Mobile Apps',
  image: '/assets/img/Pintsize-Website-Build-10-06-2025_11_32_PM.png',
  description: 'Mobile application for fitness tracking with personalized workout plans and progress monitoring.',
  link: "https://dev.pintsizedesign.com.au/"
},
];
export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
  return <section id="portfolio" className="py-20">
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
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
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
        <div className="text-center mt-12">
          <Button variant="primary">View All Projects</Button>
        </div>
      </div>
    </section>;
}