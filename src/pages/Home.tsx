import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Zap, Award, Users, Star } from 'lucide-react';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: '370+', label: 'Projects Completed' },
    { number: '210+', label: 'Happy Clients' },
    { number: '40+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Studio Production',
      description: 'State-of-the-art facilities with professional lighting, sound, and recording equipment.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Equipment Rental',
      description: 'Premium cameras, lighting, audio gear, and accessories available for rent.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Content Creation',
      description: 'Full-service content production from concept to final delivery.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className={`text-left transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white mb-4">Creative</span>
                <span className="block text-white mb-4">flow</span>
                <span className="block bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
                  unleashed
                </span>
              </h1>
              <div className="mt-8 space-y-6">
                <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                  Where innovation meets production. Premium studio facilities, cutting-edge equipment, and creative expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/booking"
                    className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    Book Studio Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/content"
                    className="group border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Tap */}
            <div className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                {/* Tap Illustration */}
                <div className="relative z-10">
                  {/* Main Tap Body */}
                  <div className="w-40 h-24 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-3xl shadow-2xl relative">
                    {/* Tap Handle */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gradient-to-r from-[#bc0200] to-red-600 rounded-lg shadow-lg"></div>
                    {/* Spout */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-lg"></div>
                  </div>
                  {/* Tap Neck */}
                  <div className="w-6 h-12 bg-gradient-to-b from-gray-400 to-gray-600 mx-auto shadow-lg"></div>
                </div>

                {/* Water Stream */}
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-40 bg-gradient-to-b from-[#02f2f3] via-cyan-500 to-cyan-600 opacity-80 animate-pulse shadow-lg shadow-cyan-500/50 rounded-full"></div>
                </div>

                {/* Water Droplets */}
                <div className="absolute top-76 left-1/2 transform -translate-x-1/2 space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-gradient-to-br from-[#02f2f3] to-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
                      style={{
                        animation: `droplet 2s ease-in-out infinite ${i * 0.3}s`,
                        marginLeft: `${(i % 2 === 0 ? -1 : 1) * Math.random() * 20}px`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Splash Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-4 bg-gradient-to-r from-[#02f2f3] to-cyan-600 rounded-full opacity-50 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Text */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 hidden lg:block">
          <p className="text-gray-500 text-sm tracking-widest uppercase">Scroll Down</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive production solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-red-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's bring your vision to life with our state-of-the-art facilities and expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Book Your Session
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-gray-700 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay In The <span className="bg-gradient-to-r from-[#bc0200] to-[#02f2f3] bg-clip-text text-transparent">Flow</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest updates on new equipment, studio availability, 
              and exclusive behind-the-scenes content from our productions.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#02f2f3] focus:border-transparent transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#bc0200] to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4">
              Join 5,000+ creators who trust Rushing Tap for their production needs.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes droplet {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;