import React, { useState } from 'react';
import { Calendar, Clock, Camera, Mic, Lightbulb, Video, ChevronDown, ShoppingCart, Check, X } from 'lucide-react';

interface Equipment {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface CartItem extends Equipment {
  quantity: number;
}

const Booking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'studio' | 'equipment'>('studio');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const studios = [
    {
      id: 'studio-a',
      name: 'Studio A - Professional',
      price: 150,
      duration: 'per hour',
      features: ['4K Recording', '360° Camera Setup', 'Professional Lighting', 'Sound Isolation'],
      image: '/images/spaces/studio_a.jpg',
    },
    {
      id: 'studio-b',
      name: 'Studio B - Creative',
      price: 120,
      duration: 'per hour',
      features: ['Green Screen', 'Flexible Lighting', 'Audio Recording', 'Props Available'],
      image: '/images/spaces/studio_b.jpg',
    },
    {
      id: 'studio-c',
      name: 'Studio C - Compact',
      price: 80,
      duration: 'per hour',
      features: ['Podcast Setup', 'Intimate Space', 'Basic Lighting', 'Audio Interface'],
      image: '/images/spaces/studio_c.jpg',
    },
    {
      id: 'greenroom-a',
      name: 'Greenroom A',
      price: 60,
      duration: 'per hour',
      features: ['Comfortable Seating', 'Private Space', 'Refreshments Area', 'WiFi Access'],
      image: '/images/spaces/greenroom_a.jpg',
    },
    {
      id: 'greenroom-b',
      name: 'Greenroom B',
      price: 60,
      duration: 'per hour',
      features: ['Makeup Station', 'Wardrobe Area', 'Mirror Setup', 'Climate Control'],
      image: '/images/spaces/greenroom_b.jpg',
    },
    {
      id: 'greenroom-c',
      name: 'Greenroom C',
      price: 50,
      duration: 'per hour',
      features: ['Quiet Space', 'Reading Area', 'Phone Booth', 'Storage Lockers'],
      image: '/images/spaces/greenroom_c.jpg',
    },
    {
      id: 'voice-studio',
      name: 'Voice Recording Studio',
      price: 100,
      duration: 'per hour',
      features: ['Vocal Booth', 'Professional Microphones', 'Audio Interface', 'Soundproofing'],
      image: '/images/spaces/recording_studio.jpg',
    },
    {
      id: 'editing-bay',
      name: 'Editing Bay/Finishing Suite',
      price: 90,
      duration: 'per hour',
      features: ['High-End Workstation', 'Color Grading Monitor', 'Audio Mixing', 'Fast Storage'],
      image: '/images/spaces/editing_bay.jpg',
    },
    {
      id: 'coworking-a',
      name: 'Co-working Space A',
      price: 40,
      duration: 'per hour',
      features: ['Open Workspace', 'High-Speed Internet', 'Meeting Rooms', 'Coffee Station'],
      image: '/images/spaces/coworkingspace_a.jpg',
    },
    {
      id: 'coworking-b',
      name: 'Co-working Space B',
      price: 25,
      duration: 'per hour',
      features: ['Open Workspace', 'High-Speed Internet', 'Meeting Rooms', 'Coffee Station'],
      image: '/images/spaces/coworkingspace_b.jpg',
    },
    {
      id: 'conference-a',
      name: 'Conference Room A',
      price: 50,
      duration: 'per hour',
      features: ['Comfortable Seating', 'High-Speed Internet', 'Audio-Visual Equipment', 'Coffee Station'],
      image: '/images/spaces/conference_room_a.jpg',
    },
    {
      id: 'conference-b',
      name: 'Conference Room B',
      price: 25,
      duration: 'per hour',
      features: ['Comfortable Seating', 'High-Speed Internet', 'Audio-Visual Equipment', 'Coffee Station'],
      image: '/images/spaces/conference_room_b.jpg',
    },
    {
      id: 'recreation',
      name: 'Recreation Spot',
      price: 0,
      duration: 'Free',
      features: ['Open Access', 'High-Speed Internet', 'Social Spaces', 'Family Friendly'],
      image: '/images/spaces/recreation_spot.jpg',
    },
  ];

  const equipment: Equipment[] = [
    // Cameras
    { id: 'cam1', name: 'Sony FX9 Cinema Camera', price: 200, category: 'Cameras', description: 'Professional cinema camera with full-frame sensor', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' },
    { id: 'cam2', name: 'RED Komodo 6K', price: 300, category: 'Cameras', description: 'Compact 6K cinema camera', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' },
    { id: 'cam3', name: 'Canon C300 Mark III', price: 180, category: 'Cameras', description: 'Professional video camera', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' },
    
    // Lighting
    { id: 'light1', name: 'ARRI SkyPanel S60-C', price: 120, category: 'Lighting', description: 'LED panel with full color spectrum', image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg' },
    { id: 'light2', name: 'Godox VL300 LED Light', price: 60, category: 'Lighting', description: 'Powerful LED video light', image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg' },
    { id: 'light3', name: 'Light Kit - 3 Point Setup', price: 80, category: 'Lighting', description: 'Complete 3-point lighting kit', image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg' },
    
    // Audio
    { id: 'audio1', name: 'Rode Wireless Pro', price: 80, category: 'Audio', description: 'Professional wireless microphone system', image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg' },
    { id: 'audio2', name: 'Sound Devices MixPre-6 II', price: 100, category: 'Audio', description: 'Professional audio recorder/mixer', image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg' },
    { id: 'audio3', name: 'Sennheiser MKH 416', price: 60, category: 'Audio', description: 'Industry standard shotgun microphone', image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg' },
    
    // Accessories
    { id: 'acc1', name: 'DJI Ronin 4D Gimbal', price: 150, category: 'Accessories', description: 'Professional camera gimbal system', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg' },
    { id: 'acc2', name: 'Tripod Kit - Heavy Duty', price: 40, category: 'Accessories', description: 'Professional camera support system', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg' },
    { id: 'acc3', name: 'Monitor - 24" 4K HDR', price: 70, category: 'Accessories', description: 'Professional field monitor', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg' },
  ];

  const addToCart = (item: Equipment) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const addStudioToCart = (studio: any) => {
    const studioAsEquipment: Equipment = {
      id: studio.id,
      name: studio.name,
      price: studio.price,
      category: 'Studio',
      description: studio.features.join(', '),
      image: studio.image,
    };
    addToCart(studioAsEquipment);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const categories = [...new Set(equipment.map(item => item.category))];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your <span className="bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">Session</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reserve our premium studios, workspaces or rent professional equipment for your next project
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('studio')}
            className={`flex-1 py-4 px-6 text-center rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'studio'
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Studio/Space Rental
          </button>
          <button
            onClick={() => setActiveTab('equipment')}
            className={`flex-1 py-4 px-6 text-center rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'equipment'
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Equipment Rental
          </button>
        </div>
      </div>

      {/* Cart Button - Fixed position, always visible */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 relative"
        >
          {showCart ? <X className="w-6 h-6" /> : <ShoppingCart className="w-6 h-6" />}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-cyan-400 text-black text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl z-40 transform transition-transform duration-300 border-l border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-center">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold text-sm mb-2">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-700 text-white rounded text-xs hover:bg-gray-600"
                      >
                        -
                      </button>
                      <span className="text-white text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-700 text-white rounded text-xs hover:bg-gray-600"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 font-bold text-sm">${item.price * item.quantity}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold">Total:</span>
                <span className="text-cyan-400 font-bold text-xl">${getTotalPrice()}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Studio Booking */}
      {activeTab === 'studio' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studios.map((studio) => (
              <div
                key={studio.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={studio.image}
                    alt={studio.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{studio.name}</h3>
                  <div className="flex items-center text-cyan-400 font-bold text-lg mb-4">
                    <span>${studio.price}</span>
                    <span className="text-gray-400 text-sm ml-2">/{studio.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {studio.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => addStudioToCart(studio)}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Equipment Rental */}
      {activeTab === 'equipment' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Equipment Grid */}
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  {category === 'Cameras' && <Camera className="w-6 h-6 mr-3 text-cyan-400" />}
                  {category === 'Lighting' && <Lightbulb className="w-6 h-6 mr-3 text-cyan-400" />}
                  {category === 'Audio' && <Mic className="w-6 h-6 mr-3 text-cyan-400" />}
                  {category === 'Accessories' && <Video className="w-6 h-6 mr-3 text-cyan-400" />}
                  {category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {equipment
                    .filter(item => item.category === category)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                          <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-400 font-bold text-lg">${item.price}/day</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Booking;