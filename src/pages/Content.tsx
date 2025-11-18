import React from 'react';
import { Play, Award, Eye, Calendar } from 'lucide-react';

const Content: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Deadtide',
      category: 'Feature Film',
      year: '2025',
      description: 'A gripping thriller produced by Rushing Tap, showing in all cinemas nationwide',
      image: '/images/content/deadtide.jpg',
      views: '2.5M',
      awards: ['Best Cinematography', 'Technical Excellence Award'],
      role: 'Full Production',
    },
    {
      id: 2,
      title: 'Bluechip Data and AI Summit',
      category: 'Events',
      year: '2024',
      description: 'High-energy music video featuring dynamic camera work and creative lighting solutions.',
      image: '/images/content/bluechip.jpg',
      views: '8.2M',
      awards: ['MTV Video Music Award Nominee'],
      role: 'Full Production',
    },
    {
      id: 3,
      title: 'Epe Idile',
      category: 'Feature Film',
      year: '2024',
      description: 'High-impact commercial campaign for a major tech brand, featuring cutting-edge visual effects.',
      image: '/images/content/epe_idile.jpg',
      views: '12M',
      awards: ['Cannes Lions Bronze'],
      role: 'Full Production',
    },
    {
      id: 4,
      title: 'TechTalk Podcast Series',
      category: 'Podcast',
      year: '2023-2024',
      description: 'Weekly podcast series recorded in Studio C, featuring industry leaders and innovators.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg',
      views: '500K',
      awards: ['Podcast Excellence Award'],
      role: 'Studio Rental & Post-Production',
    },
    
    {
      id: 5,
      title: 'The Art of Flow',
      category: 'Documentary',
      year: '2023',
      description: 'Award-winning documentary exploring creativity in the digital age, produced using our full facility.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      views: '1.8M',
      awards: ['Sundance Official Selection', 'Best Documentary Feature'],
      role: 'Co-Production',
    },
    {
      id: 6,
      title: 'Virtual Horizons',
      category: 'Web Series',
      year: '2023',
      description: 'Sci-fi web series that pushed the boundaries of virtual production techniques.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg',
      views: '3.2M',
      awards: ['Webby Award Winner'],
      role: 'Equipment Rental & Consultation',
    },
  ];

  const categories = ['All', 'Feature Film', 'Music Video', 'Commercial', 'Documentary', 'Web Series', 'Podcast', 'Events'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the award-winning content produced and co-produced at Rushing Studio. 
            From feature films to commercials, our facilities have been part of countless success stories.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">370+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">10+</div>
              <div className="text-gray-400">Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">10M+</div>
              <div className="text-gray-400">Total Views</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">40+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </button>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Views Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Eye className="w-3 h-3 text-gray-300" />
                    <span className="text-gray-300 text-xs">{item.views}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.year}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Role */}
                  <div className="mb-4">
                    <span className="text-cyan-400 text-sm font-medium">
                      Role: {item.role}
                    </span>
                  </div>

                  {/* Awards */}
                  {item.awards.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center text-yellow-400 text-sm font-medium">
                        <Award className="w-4 h-4 mr-2" />
                        Awards & Recognition
                      </div>
                      <div className="space-y-1">
                        {item.awards.map((award, index) => (
                          <div
                            key={index}
                            className="text-gray-300 text-xs bg-gray-800 px-3 py-1 rounded-full inline-block mr-2"
                          >
                            {award}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-red-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Next Masterpiece?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join the ranks of award-winning creators who have brought their visions to life at Rushing Studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Book Your Project
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Discuss Your Vision
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;