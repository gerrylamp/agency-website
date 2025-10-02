import React from 'react';
import { CheckIcon } from 'lucide-react';
const stats = [{
  number: '10+',
  label: 'Years Experience'
}, {
  number: '250+',
  label: 'Projects Completed'
}, {
  number: '50+',
  label: 'Team Members'
}, {
  number: '98%',
  label: 'Client Satisfaction'
}];
const values = ['Innovation at the core of everything we create', 'Client partnership and transparent communication', 'Quality craftsmanship and attention to detail', 'Results-driven approach to every project'];
export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We're a team of digital experts helping brands thrive
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2013, Nexus Studio has grown from a small team of
              passionate designers and developers to a full-service digital
              agency. We combine strategic thinking, design excellence, and
              technical expertise to create digital solutions that drive real
              business results.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <ul className="space-y-3">
                {values.map((value, index) => <li key={index} className="flex items-start">
                    <CheckIcon className="text-indigo-600 mr-2 mt-1" size={18} />
                    <span className="text-gray-700">{value}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <div key={index} className={`bg-gray-50 p-8 rounded-lg text-center ${index % 2 === 0 ? 'transform lg:translate-y-8' : ''}`}>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>)}
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-indigo-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>;
}