import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ContractingLanding = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConsultant, setShowConsultant] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consultData, setConsultData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
  });

  const services = [
    {
      icon: "🏗️",
      title: "Commercial Construction",
      description: "Complete commercial building solutions from ground up",
    },
    {
      icon: "🏠",
      title: "Residential Remodeling",
      description: "Transform your home with expert renovation services",
    },
    {
      icon: "🔨",
      title: "Renovation & Restoration",
      description: "Breathe new life into existing structures",
    },
    {
      icon: "🏢",
      title: "Office Fit-Outs",
      description: "Modern workspace design and construction",
    },
    {
      icon: "🌳",
      title: "Landscaping",
      description: "Beautiful outdoor spaces that complement your property",
    },
    {
      icon: "⚡",
      title: "Electrical & Plumbing",
      description: "Professional MEP services for all projects",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Downtown Office Complex",
      category: "Commercial",
      image: "🏢",
      description: "50,000 sq ft modern office space",
    },
    {
      id: 2,
      title: "Luxury Villa Renovation",
      category: "Residential",
      image: "🏡",
      description: "Complete home transformation",
    },
    {
      id: 3,
      title: "Shopping Mall Expansion",
      category: "Commercial",
      image: "🏬",
      description: "25,000 sq ft retail addition",
    },
    {
      id: 4,
      title: "Historic Building Restoration",
      category: "Restoration",
      image: "🏛️",
      description: "Preserving architectural heritage",
    },
    {
      id: 5,
      title: "Corporate Headquarters",
      category: "Commercial",
      image: "🏙️",
      description: "State-of-the-art workspace design",
    },
  ];

  const partners = [
    "BuildCorp",
    "TechConstruct",
    "Elite Materials",
    "ProDesign Group",
    "Urban Developers",
    "Summit Holdings",
  ];

  const stats = [
    { icon: <Award size={40} />, number: "500+", label: "Projects Completed" },
    { icon: <Users size={40} />, number: "250+", label: "Happy Clients" },
    { icon: <Briefcase size={40} />, number: "25+", label: "Years Experience" },
    {
      icon: <CheckCircle size={40} />,
      number: "100%",
      label: "Satisfaction Rate",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  const nextProject = () =>
    setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setInterval(nextProject, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleConsultantSubmit = () => {
    if (
      !consultData.name ||
      !consultData.email ||
      !consultData.phone ||
      !consultData.projectType
    ) {
      alert("Please fill in all required fields");
      return;
    }
    alert("Consultation request submitted! We will reach out within 24 hours.");
    setShowConsultant(false);
    setConsultData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-white select-none">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🏗️</div>
              <h1 className="text-2xl font-bold text-gray-800">
                BuildPro Contracting
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 font-medium transition">
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 font-medium transition">
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 font-medium transition">
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 font-medium transition">
                Projects
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="text-gray-700 hover:text-blue-600 font-medium transition">
                Partners
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 font-medium transition">
                Contact
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowConsultant(true)}
                className="hidden lg:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                Free Consultation
              </button>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="lg:hidden">
                {showMenu ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <nav className="lg:hidden mt-4 flex flex-col space-y-2 pb-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-gray-700 hover:text-blue-600">
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-gray-700 hover:text-blue-600">
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2 text-gray-700 hover:text-blue-600">
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left py-2 text-gray-700 hover:text-blue-600">
                Projects
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="text-left py-2 text-gray-700 hover:text-blue-600">
                Partners
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-gray-700 hover:text-blue-600">
                Contact
              </button>
              <button
                onClick={() => {
                  setShowConsultant(true);
                  setShowMenu(false);
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                Free Consultation
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Building Your{" "}
                <span className="text-blue-600">Dream Projects</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Professional contracting services with over 25 years of
                excellence. From concept to completion, we bring your vision to
                life.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowConsultant(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg">
                  Get Free Consultation
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg shadow-lg border-2 border-blue-600">
                  View Projects
                </button>
              </div>
            </div>
            <div className="text-9xl text-center">🏗️</div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About BuildPro Contracting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 25 years of industry leadership, we've built a
              reputation for excellence, reliability, and innovation in
              construction services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-8xl text-center">👷</div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-700 mb-4">
                Founded in 1999, BuildPro Contracting has grown from a small
                local contractor to a leading construction company serving
                commercial and residential clients across the region.
              </p>
              <p className="text-gray-700 mb-4">
                Our commitment to quality craftsmanship, transparent
                communication, and on-time delivery has earned us the trust of
                hundreds of satisfied clients.
              </p>
              <p className="text-gray-700">
                We combine traditional construction expertise with modern
                technology and sustainable practices to deliver projects that
                exceed expectations.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl">
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Past Projects
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in every project we deliver
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-9xl mb-6">
                  {projects[currentProject].image}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {projects[currentProject].title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {projects[currentProject].category}
                </p>
                <p className="text-gray-700 text-lg">
                  {projects[currentProject].description}
                </p>
              </div>

              <div className="flex justify-center space-x-2 mb-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === currentProject ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition">
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition">
                <span className="text-gray-700 font-bold text-center">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@buildpro.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      123 Construction Ave, Building City, BC 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Business Hours</h4>
                <p className="text-gray-700">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {showConsultant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Free Consultation
              </h3>
              <button
                onClick={() => setShowConsultant(false)}
                className="text-gray-500 hover:text-black">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll contact you within 24 hours to
              discuss your project.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={consultData.name}
                onChange={(e) =>
                  setConsultData({ ...consultData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={consultData.email}
                onChange={(e) =>
                  setConsultData({ ...consultData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={consultData.phone}
                onChange={(e) =>
                  setConsultData({ ...consultData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
              <select
                value={consultData.projectType}
                onChange={(e) =>
                  setConsultData({
                    ...consultData,
                    projectType: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600">
                <option value="">Select Project Type</option>
                <option value="commercial">Commercial Construction</option>
                <option value="residential">Residential Remodeling</option>
                <option value="renovation">Renovation & Restoration</option>
                <option value="office">Office Fit-Out</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Brief project description (optional)"
                value={consultData.description}
                onChange={(e) =>
                  setConsultData({
                    ...consultData,
                    description: e.target.value,
                  })
                }
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"></textarea>
              <button
                onClick={handleConsultantSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-3xl">🏗️</div>
                <h3 className="text-xl font-bold">BuildPro Contracting</h3>
              </div>
              <p className="text-gray-400">
                Building excellence since 1999. Your trusted partner in
                construction.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition">
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-400 hover:text-white transition">
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block text-gray-400 hover:text-white transition">
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition">
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-2">Follow us on social media</p>
              <div className="flex space-x-4 text-2xl">
                <span>📘</span>
                <span>📷</span>
                <span>🐦</span>
                <span>💼</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuildPro Contracting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContractingLanding;
