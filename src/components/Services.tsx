// Services.tsx
import { Code, Palette, Server, Rocket, BarChart, Cloud } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and modern web applications built with React, WordPress, or Next.js.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Crafting engaging designs and intuitive interfaces for great user experiences.",
    icon: Palette,
  },
  {
    title: "Backend Development",
    description: "Robust APIs, databases, and integrations for scalable platforms.",
    icon: Server,
  },
  {
    title: "DevOps & Infrastructure",
    description: "Cloud setup, automation, CI/CD pipelines, and deployment solutions.",
    icon: Rocket,
  },
  {
    title: "Analytics & SEO",
    description: "Data dashboards, insights, and SEO optimization to grow your business.",
    icon: BarChart,
  },
  {
    title: "SaaS Solutions",
    description: "Custom SaaS applications tailored for your business needs.",
    icon: Cloud,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <style>
        {`
          .service-card {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(30, 58, 138, 0.05));
            transition: all 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          .service-card:hover {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(30, 58, 138, 0.1));
            transform: translateY(-2px);
          }
        `}
      </style>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon; // ✅ declare here, outside JSX
            return (
              <div
                key={i}
                className="service-card p-8 rounded-xl bg-white shadow-md transition-all fade-in visible hover-lift"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-xl mb-6">
                  <Icon className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
