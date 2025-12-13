import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { platforms } from '../data/services';

const PlatformDetail: React.FC = () => {
  const { platformId } = useParams<{ platformId: string }>();
  const platform = platforms.find(p => p.id === platformId);

  // Get other major platforms for cross-linking (excluding current)
  const otherPlatforms = platforms.filter(p => p.id !== platformId && ['amazon', 'flipkart', 'website-shopify', 'digital-marketing'].includes(p.id)).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [platformId]);

  if (!platform) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Platform Not Found</h1>
        <Link to="/services" className="mt-6 inline-block text-blue-600 hover:underline">Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Platform Header */}
      <div className={`${platform.color} border-b border-slate-200`}>
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
           <div className="mb-4">
            <Link to="/services" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              &larr; Back to Platforms
            </Link>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900">{platform.title}</h1>
          <p className="mt-4 text-xl text-slate-700 max-w-3xl">{platform.description}</p>
          
          {platform.id === 'amazon' && (
             <div className="mt-6 inline-block bg-white/80 border border-slate-300 p-4 rounded-lg backdrop-blur-sm">
                <span className="text-yellow-600 font-bold">🎁 Special Offer:</span> Create your Amazon Seller Account with us and get <span className="font-bold underline">2 Months FREE</span> Account Management!
             </div>
          )}
        </div>
      </div>

      {/* About Platform & Benefits Section */}
      {(platform.aboutPlatform || platform.whySellHere) && (
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 -mb-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Sell on {platform.title}?</h2>
              <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                      <p className="text-slate-700 leading-relaxed mb-6">{platform.aboutPlatform}</p>
                       {platform.registrationLink && (
                          <a 
                              href={platform.registrationLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                          >
                              Register on {platform.title} &rarr;
                          </a>
                      )}
                  </div>
                  {platform.whySellHere && (
                  <div className="md:w-1/2">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-3">
                          {platform.whySellHere.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                  <span className="text-green-500 mr-2 mt-1">✓</span>
                                  <span className="text-slate-700">{benefit}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
                  )}
              </div>
          </div>
        </div>
      )}

      {/* Services List */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 px-1">Services We Offer for {platform.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platform.services.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${platform.id}/${service.id}`}
              className="group block border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">{service.title}</h3>
                <span className="text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                {service.whatIsIt}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-blue-600">
                Learn More
              </div>
            </Link>
          ))}
        </div>
      </div>

       {/* Cross Linking - Other Ecosystems */}
       <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200 pt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Explore Other Ecosystems</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {otherPlatforms.map(p => (
                 <Link key={p.id} to={`/services/${p.id}`} className="block p-4 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors">
                    <span className="text-xs uppercase font-bold text-slate-500">{p.category}</span>
                    <h4 className="text-lg font-bold text-slate-900">{p.title}</h4>
                    <p className="text-blue-600 text-sm mt-2">View services &rarr;</p>
                 </Link>
               ))}
               <Link to="/resources" className="block p-4 rounded-lg bg-slate-800 border border-slate-900 hover:bg-slate-700 transition-colors">
                    <span className="text-xs uppercase font-bold text-slate-400">Knowledge Base</span>
                    <h4 className="text-lg font-bold text-white">Seller Resources</h4>
                    <p className="text-slate-300 text-sm mt-2">Read guides &rarr;</p>
               </Link>
            </div>
          </div>
       </div>

       {/* Bottom CTA */}
       <div className="bg-slate-900 py-12 mt-12">
         <div className="container mx-auto px-4 text-center text-white">
           <h2 className="text-2xl font-bold mb-4">Not sure which service you need?</h2>
           <p className="text-slate-400 mb-8">Our team can audit your business and recommend the best path forward.</p>
           <a 
             href="https://wa.me/916200017130" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md font-bold transition-colors"
           >
             <span className="mr-2">💬</span> Chat on WhatsApp
           </a>
         </div>
       </div>
    </div>
  );
};

export default PlatformDetail;