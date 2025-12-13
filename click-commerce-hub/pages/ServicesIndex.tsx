import React from 'react';
import { Link } from 'react-router-dom';
import { platforms } from '../data/services';
import { PlatformData } from '../types';

const ServicesIndex: React.FC = () => {
  
  // Group platforms by category
  const marketplaces = platforms.filter(p => p.category === 'marketplace');
  const websites = platforms.filter(p => p.category === 'website');
  const marketing = platforms.filter(p => p.category === 'marketing');
  const compliance = platforms.filter(p => p.category === 'compliance');

  const PlatformCard: React.FC<{ platform: PlatformData }> = ({ platform }) => (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
      <div className={`p-6 ${platform.color} border-b border-slate-100`}>
        <h2 className="text-2xl font-bold text-slate-900">{platform.title}</h2>
        <p className="text-slate-700 mt-2 text-sm">{platform.description}</p>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Core Services</h3>
        <ul className="space-y-2 mb-6 flex-grow">
          {platform.services.slice(0, 5).map(s => (
            <li key={s.id} className="text-slate-600 text-sm flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              {s.title}
            </li>
          ))}
          {platform.services.length > 5 && (
            <li className="text-slate-400 text-xs italic pl-4">+ {platform.services.length - 5} more</li>
          )}
        </ul>
        <Link 
          to={`/services/${platform.id}`}
          className="block w-full text-center py-2.5 border border-slate-300 rounded-md text-slate-700 font-medium hover:bg-slate-800 hover:text-white transition-all"
        >
          View All {platform.title}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Our Services & Platforms</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From Amazon to your own D2C website, we have the specialized expertise to help you scale.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: E-commerce Marketplaces */}
        <section id="marketplaces">
          <div className="flex items-center mb-8">
            <span className="bg-blue-600 w-1.5 h-8 mr-4 rounded-full"></span>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">E-commerce Marketplaces</h2>
              <p className="text-slate-500 text-sm">Grow on India's biggest selling platforms.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaces.map(p => <PlatformCard key={p.id} platform={p} />)}
          </div>
        </section>

        {/* Section 2: Website & D2C */}
        <section id="website">
          <div className="flex items-center mb-8">
            <span className="bg-purple-600 w-1.5 h-8 mr-4 rounded-full"></span>
             <div>
              <h2 className="text-2xl font-bold text-slate-900">Website & D2C Solutions</h2>
              <p className="text-slate-500 text-sm">Build your independent brand identity.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websites.map(p => <PlatformCard key={p.id} platform={p} />)}
          </div>
        </section>

        {/* Section 3: Digital Marketing */}
        <section id="marketing">
          <div className="flex items-center mb-8">
            <span className="bg-pink-600 w-1.5 h-8 mr-4 rounded-full"></span>
             <div>
              <h2 className="text-2xl font-bold text-slate-900">Digital Marketing</h2>
              <p className="text-slate-500 text-sm">Performance marketing to drive traffic and sales.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketing.map(p => <PlatformCard key={p.id} platform={p} />)}
          </div>
        </section>

         {/* Section 4: Compliance */}
         <section id="compliance">
          <div className="flex items-center mb-8">
            <span className="bg-green-600 w-1.5 h-8 mr-4 rounded-full"></span>
             <div>
              <h2 className="text-2xl font-bold text-slate-900">Business Compliance</h2>
              <p className="text-slate-500 text-sm">Essential registrations to keep your business running smoothly.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compliance.map(p => <PlatformCard key={p.id} platform={p} />)}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesIndex;