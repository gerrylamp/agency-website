import React, { useState } from "react";
import {
  MailIcon,
  PhoneIcon,
  ClockIcon,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! This is a demo, so no actual email was sent.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div className="slide-in-left visible">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Ready to transform your digital presence? Let's discuss your project
              and create a custom solution that drives results.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                  <MailIcon className="text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto: gerrykoh.lampaug@gmail.com" className="text-gray-600 dark:text-gray-300">
                    gerrykoh.lampaug@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                  <PhoneIcon className="text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel: 0927-874-0256" className="text-gray-600 dark:text-gray-300">
                    0927-874-0256
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
                  <ClockIcon className="text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-800 rounded-lg text-white px-8 py-4 !rounded-button font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap">
                Schedule a Call
              </button>
            </div> */}
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="slide-in-right visible">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

              {/* NAME */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary text-sm"
                  placeholder="john@example.com"
                />
              </div>

              {/* PROJECT TYPE */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="">Select project type</option>
                  <option>Custom Theme Development</option>
                  <option>Plugin Development</option>
                  <option>Website Maintenance</option>
                  <option>Performance Optimization</option>
                  <option>E-commerce Solution</option>
                  <option>Other</option>
                </select>
              </div>

              {/* BUDGET */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {["$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"].map(
                    (budget) => (
                      <label key={budget} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          checked={formData.budget === budget}
                          onChange={handleChange}
                          className="form-radio text-primary"
                        />
                        <span className="text-sm">{budget}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white py-4 !rounded-button font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}