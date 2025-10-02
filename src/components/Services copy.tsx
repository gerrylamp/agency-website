import React from 'react';
import { CodeIcon, PaintbrushIcon, LineChartIcon, SearchIcon, GlobeIcon, ZapIcon, CloudIcon, LayersIcon } from 'lucide-react';

const services = [
  {
    category: "Development",
    items: [
      {
        icon: <CodeIcon size={40} className="text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        title: 'Web Development',
        description: 'Custom websites, eCommerce, and web applications built with modern technologies for speed, security, and scalability.'
      },
      {
        icon: <LayersIcon size={40} className="text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        title: 'SaaS Development',
        description: 'End-to-end SaaS solutions, from MVPs to full-scale platforms, including payments, subscriptions, and user dashboards.'
      },
      {
        icon: <CloudIcon size={40} className="text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        title: 'Cloud & DevOps',
        description: 'AWS setup, CI/CD pipelines, and database management that keep your apps running smoothly at scale.'
      }
    ]
  },
  {
    category: "Design & Branding",
    items: [
      {
        icon: <PaintbrushIcon size={40} className="text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        title: 'UI/UX Design',
        description: 'User-centered interfaces that balance beauty and functionality, delivering seamless digital experiences.'
      },
      {
        icon: <ZapIcon size={40} className="text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        title: 'Brand Identity',
        description: 'Distinctive branding that communicates your story and makes you stand out from competitors.'
      }
    ]
  },
  {
    category: "Growth",
    items: [
      {
        icon: <LineChartIcon size={40} className="text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        title: 'Digital Marketing',
        description: 'Campaigns and strategies that expand reach, generate leads, and drive measurable growth.'
      },
      {
        icon: <SearchIcon size={40} className="text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        title: 'SEO Optimization',
        description: 'Boost search visibility and attract organic traffic with our proven SEO practices.'
      },
      {
        icon: <GlobeIcon size={40} className="text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
        title: 'Content Strategy',
        description: 'Strategic storytelling and content planning that connects with your audience and supports your business goals.'
      }
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We craft digital solutions that combine design, technology, and strategy to help your business grow and thrive.
          </p>
        </div>

        {services.map((group, gIndex) => (
          <div key={gIndex} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center md:text-left">{group.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-white border border-gray-100 p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
