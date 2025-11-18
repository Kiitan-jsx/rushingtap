import React from 'react';
import { Award, Users, Zap, Target, Heart, Lightbulb, User } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion',
      description: 'We live and breathe creativity, bringing genuine enthusiasm to every project.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Uncompromising quality in everything we deliver, from equipment to service.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technology and creative solutions.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Building strong partnerships with our clients to achieve shared success.',
    },
  ];

  const team = [
    {
      name: 'Ayo Soyombo',
      role: 'Co-Founder/Chief Business Officer',
      image: '/images/employees/chief_business_officer.jpg',
      bio: 'Strategic business leader with expertise in client relations, partnership development, and revenue growth. Drives business expansion and operational excellence.',
    },
    {
      name: 'Soji Ogunnaike',
      role: 'Co-Founder/Chief Executive Officer',
      image: '/images/chief_executive officer.jpg',
      bio: 'Visionary leader overseeing company strategy, creative direction, and overall operations. 15+ years experience in media production and business management.',
    },
    {
      name: 'Kunle Adekugbe',
      role: 'Equipment/Rental Manager',
      image: '/images/rental_manager.jpg',
      bio: 'Technical expert managing our extensive equipment inventory. Ensures optimal equipment performance and provides technical consultation for complex productions.',
    },
    {
      name: 'Ebi Attah',
      role: 'Film/Video Editor',
      image: null,
      bio: 'Creative post-production specialist with expertise in color grading, sound design, and visual effects. Transforms raw footage into compelling narratives.',
    },
    {
      name: 'Esther Oyebode',
      role: 'Administrative Officer',
      image: null,
      bio: 'Operations coordinator ensuring smooth daily operations, client communications, and administrative excellence. Keeps everything running seamlessly.',
    },
    {
      name: 'Temisan Danner',
      role: 'Logistics Coordinator',
      image: null,
      bio: 'Project logistics expert managing equipment transportation, setup coordination, and on-location support. Ensures productions run on time and on budget.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-[#bc0200] to-[#02f2f3] bg-clip-text text-transparent">Rushing Tap</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded on the principle that great content flows from great creativity, 
              Rushing Tap has been at the forefront of production excellence for over a decade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
                <p className="text-gray-300 leading-relaxed">
                  What started as a small creative collective has evolved into a premier production facility. 
                  We believe in the power of flowing creativity - just like water finds its way, 
                  great ideas need the right environment and tools to flourish.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our state-of-the-art studios and equipment rental services have supported hundreds of projects, 
                  from independent films to major commercial productions. We're not just a facility - 
                  we're your creative partners.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">370+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">210+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-red-500/20 to-cyan-500/20 p-8">
                <img
                  src="/images/spaces/building.jpg"
                  alt="Studio Interior"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-red-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-cyan-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">The creative minds behind Rushing Tap</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-square overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <User className="w-24 h-24 text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-red-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Mission</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              To empower creators with world-class facilities, cutting-edge equipment, and unparalleled support, 
              enabling them to bring their boldest visions to life. We believe great content flows from great creativity, 
              and we're here to make that flow as powerful as possible.
            </p>
            <div className="flex justify-center space-x-12 pt-8">
              <div className="text-center">
                <Target className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">Our Goal</h3>
                <p className="text-white/80 text-sm">Excellence in every project</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">Our Drive</h3>
                <p className="text-white/80 text-sm">Innovation and creativity</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">Our Focus</h3>
                <p className="text-white/80 text-sm">Client success and satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;