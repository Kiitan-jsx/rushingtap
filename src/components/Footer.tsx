import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* Logo - Image link */}
            <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo.jpeg"  // Replace with your logo image path
              alt="Rushing Tap Logo"
              className="w-10 h-10 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Rushing Tap
              </h1>
              <p className="text-xs text-gray-400 -mt-1 hidden sm:block">Production Company</p>
            </div>
          </Link>
            <p className="text-gray-400 leading-relaxed">
              Premier studio and production facility providing world-class equipment rental, content production, and bespoke solutions for creative professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Booking', 'Content', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Studio Rental</li>
              <li>Equipment Rental</li>
              <li>Content Production</li>
              <li>Post-Production</li>
              <li>Consultancy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+2348181777726</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@rushingtap.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Km22 Lekki-Epe expressway, General paints bus stop, Ajah, Lagos (beside Bowine schools), Lagos, Nigeria 100001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {[Instagram, Twitter, Youtube].map((Icon, index) => (
               <a
  key={index}
  href={index === 0 ? "https://www.instagram.com/rushingtapstudios/" : index === 1 ? "YOUR_TWITTER_URL" : "YOUR_YOUTUBE_URL"}
  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
>
  <Icon className="w-5 h-5" />
</a>

              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400">&copy; 2024 Rushing Tap. All rights reserved.</p>
            
            {/* POV Company Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">A</span>
              <div className="bg-gradient-to-r from-[#bc0200] to-[#02f2f3] text-white px-3 py-1 rounded font-bold text-sm">
                POV
              </div>
              <span className="text-gray-400 text-sm">company</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;