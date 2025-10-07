import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₱8,000+",
    description:
      "Perfect for small businesses or personal brands that need a professional online presence.",
    features: [
      "1–3 Page WordPress Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Free Deployment Guidance",
    ],
  },
  {
    name: "Professional",
    price: "₱18,000+",
    description:
      "Ideal for growing businesses that need advanced features and a custom design.",
    features: [
      "Custom WordPress Theme or React Site",
      "Speed & Performance Optimization",
      "Analytics Setup (GA4, Search Console)",
      "Security & Backup Configuration",
      "Free Domain & Hosting Setup Support",
    ],
    highlight: true, // 👈 highlights the main plan
  },
  {
    name: "Maintenance Plan",
    price: "₱2,000 / mo",
    description:
      "Ongoing support to keep your website secure, updated, and running smoothly.",
    features: [
      "Monthly Backups & Plugin Updates",
      "Security Scans & Fixes",
      "Performance Monitoring",
      "Minor Bug Fixes",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Pricing Overview</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Transparent pricing designed for flexibility — whether you’re just
          starting out or scaling your digital presence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border shadow-sm hover:shadow-lg transition-all ${
                plan.highlight
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-4">
                {plan.price}
              </p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="text-left space-y-2 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-block w-full py-3 rounded-md font-medium transition-colors ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}