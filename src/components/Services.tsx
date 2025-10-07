import { Wrench, Code, Server, Settings, BarChart, Rocket } from "lucide-react";

const services = [
  {
    title: "WordPress Development",
    description:
      "Custom WordPress themes and Elementor builds tailored to your brand. We create fast, secure, and easy-to-manage websites that convert visitors into clients.",
    icon: Wrench,
  },
  {
    title: "Web Development (React)",
    description:
      "Modern, high-performance web applications built with React, Vite, or Next.js — designed for scalability, speed, and seamless user experience.",
    icon: Code,
  },
  {
    title: "Plugin Development",
    description:
      "Need custom functionality? We develop secure, scalable WordPress plugins to extend your site’s features and integrate with your existing tools.",
    icon: Server,
  },
  {
    title: "Website Maintenance & Hosting",
    description:
      "Keep your website running smoothly with ongoing maintenance, security updates, and reliable hosting setup or migration.",
    icon: Settings,
  },
  {
    title: "SEO Setup & Optimization",
    description:
      "From technical SEO to keyword structure, we set up your site for search engine visibility and help drive more organic traffic.",
    icon: BarChart,
  },
  {
    title: "Performance Optimization",
    description:
      "Boost your website’s loading speed, improve Core Web Vitals, and ensure top performance across all devices and browsers.",
    icon: Rocket,
  },
];


export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <style>
        {`
          .service-card {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(30, 58, 138, 0.05));
            transition: all 0.4s ease;
          }
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 45px rgba(0,0,0,0.1);
          }
          .service-card:hover {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(30, 58, 138, 0.12));
          }
        `}
      </style>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions
            that help brands grow, stand out, and perform in today’s competitive
            online world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="service-card p-8 rounded-xl bg-white shadow-md transition-all fade-in visible hover-lift"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-xl mb-6">
                  <Icon className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-all"
          >
            Let’s Build Something Great
          </a>
        </div>
      </div>
    </section>
  );
}
