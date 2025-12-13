import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { platforms } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { platformId, serviceId } = useParams<{ platformId: string; serviceId: string }>();
  
  const platform = platforms.find(p => p.id === platformId);
  const service = platform?.services.find(s => s.id === serviceId);

  // Find related services (excluding current)
  const relatedServices = platform?.services.filter(s => s.id !== serviceId).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [platformId, serviceId]);

  if (!platform || !service) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Service Not Found</h1>
        <Link to="/services" className="mt-6 inline-block text-blue-600 hover:underline">Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="mb-6 flex items-center text-sm text-slate-500">
            <Link to="/services" className="hover:text-slate-900 underline decoration-slate-300">Platforms</Link>
            <span className="mx-2">/</span>
            <Link to={`/services/${platform.id}`} className="hover:text-slate-900 underline decoration-slate-300">{platform.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{service.title}</span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{service.title}</h1>
          <p className="text-lg text-slate-600 mb-8">{platform.title} Specialist Service</p>

          <div className="space-y-10">
            
            {/* 1. What this service is */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 p-1 rounded mr-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                What this service is
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg border-l-4 border-slate-200 pl-4">
                {service.whatIsIt}
              </p>
            </section>

            {/* 2. What we offer / What we do */}
            {service.whatWeDo && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-green-100 text-green-700 p-1 rounded mr-3">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                What we do
              </h2>
              <ul className="grid gap-3">
                {service.whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 font-bold mr-3">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            )}

            {/* 3. How this helps sellers */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-700 p-1 rounded mr-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </span>
                How this helps sellers
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {service.howItHelps}
              </p>
            </section>

             {/* 4. What changes you can expect */}
             {service.expectedChanges && (
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                   <span className="bg-yellow-100 text-yellow-700 p-1 rounded mr-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </span>
                   What changes you can expect
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                   <p className="text-slate-700">{service.expectedChanges}</p>
                </div>
              </section>
             )}

            {/* 5. Access & Data Usage Disclosure (Mandatory) */}
            <section className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
               <h2 className="text-lg font-bold text-indigo-900 mb-2">Access & Data Usage Disclosure</h2>
               <p className="text-indigo-800 text-sm">
                 We respect your business data privacy. Access to Seller Central or other platform accounts is obtained only after explicit seller authorization via User Permissions. Data is used strictly for service delivery purposes in compliance with platform policies and is never shared or sold to third parties.
                 <Link to="/privacy-policy" className="ml-2 underline text-indigo-900 font-medium">Read Privacy Policy</Link>
               </p>
            </section>

            {/* 6. Pricing Model (Mandatory) */}
            <section className="bg-white p-6 rounded-lg border border-slate-300 shadow-sm">
               <h2 className="text-lg font-bold text-slate-900 mb-2">Pricing Model</h2>
               <p className="text-slate-700 text-sm mb-3">
                 Pricing for this service is quote-based and varies depending on the seller's business size, service scope, and compliance requirements. Customized quotations are provided after a thorough requirement assessment.
               </p>
               <Link to="/pricing" className="text-sm font-bold text-blue-600 hover:underline">View Pricing Policy &rarr;</Link>
            </section>

            {/* 7. Mandatory Specific Disclaimers */}
            {service.disclaimer && (
              <section className="bg-amber-50 p-4 border-l-4 border-amber-400 rounded-r-md">
                <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Important Disclaimer</h3>
                <p className="text-sm text-amber-900">
                  {service.disclaimer}
                </p>
              </section>
            )}

            {/* 8. Interlinking & Related Services */}
            <div className="border-t border-slate-200 pt-8 mt-12">
               <h3 className="text-lg font-bold text-slate-900 mb-6">More Services for {platform.title}</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedServices?.map(s => (
                     <Link key={s.id} to={`/services/${platform.id}/${s.id}`} className="block border border-slate-200 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                        <p className="font-bold text-slate-800">{s.title}</p>
                        <p className="text-xs text-blue-600 mt-1">Learn more &rarr;</p>
                     </Link>
                  ))}
                  <Link to={`/services/${platform.id}`} className="block border border-blue-200 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors text-center flex flex-col justify-center">
                     <p className="text-blue-800 font-bold">View All {platform.title} Services</p>
                  </Link>
               </div>
            </div>

          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:w-1/3">
           <div className="sticky top-24 space-y-6">
              
              {/* Primary Contact Card */}
              <div className="bg-white shadow-lg rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 p-4">
                  <h3 className="text-white font-bold text-lg text-center">Interested in this service?</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-center mb-6 text-sm">
                    Connect with our experts directly to discuss your requirements for {platform.title}.
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="tel:+916200017130" 
                      className="flex items-center justify-center w-full py-3 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-900 rounded-lg font-bold transition-colors"
                    >
                      <span className="mr-2">📞</span> Call Now
                    </a>
                    <a 
                      href="https://wa.me/916200017130" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-colors shadow-sm"
                    >
                      <span className="mr-2">💬</span> Chat on WhatsApp
                    </a>
                    <Link 
                      to="/contact"
                      className="flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors shadow-sm"
                    >
                      Request a Quote
                    </Link>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-500 font-medium">Direct Support Line: +91 62000 17130</p>
                  </div>
                </div>
              </div>

              {/* RESOURCE LINKING: Contextual Help */}
              {platform.category === 'website' && (
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h4 className="font-bold text-purple-900 mb-2">Not sure which website type you need?</h4>
                  <p className="text-sm text-purple-800 mb-4">
                    Learn about Static vs Dynamic websites and Shopify stores in our Knowledge Hub.
                  </p>
                  <Link to="/resources#website-types" className="text-sm font-bold text-purple-700 underline">Read Guide &rarr;</Link>
                </div>
              )}

              {platform.category === 'marketplace' && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-2">Selling on {platform.title}?</h4>
                  <p className="text-sm text-blue-800 mb-4">
                    Check our guide on GST requirements and marketplace rules.
                  </p>
                  <Link to="/resources#indian-marketplaces" className="text-sm font-bold text-blue-700 underline">View Requirements &rarr;</Link>
                </div>
              )}

              {/* Founder/Trust Card */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Leadership</h4>
                
                <div className="flex items-center mb-4">
                   <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-xl">👨‍✈️</div>
                   <div className="ml-3">
                     <p className="text-sm font-bold text-slate-900">Shivam Raj</p>
                     <p className="text-xs text-slate-500">Founder & CEO</p>
                   </div>
                </div>

                <div className="flex items-center mb-4">
                   <div className="h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center text-xl">👩‍💼</div>
                   <div className="ml-3">
                     <p className="text-sm font-bold text-slate-900">Guriya Raj</p>
                     <p className="text-xs text-slate-500">Co-Founder</p>
                   </div>
                </div>

                <p className="text-xs text-slate-600 italic border-t border-slate-200 pt-3">
                  "We ensure every service is delivered with merchant navy-grade discipline and precision."
                </p>
              </div>

              {/* Offer Card (Only for Amazon) */}
              {platform.id === 'amazon' && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">New Seller Offer</h4>
                  <p className="text-sm text-yellow-900 mb-3">
                    Start your journey with us! Create your Amazon account and get <span className="font-bold">2 Months FREE</span> Account Management.
                  </p>
                  <Link to="/contact" className="text-xs font-bold text-yellow-700 underline">Claim Offer &rarr;</Link>
                </div>
              )}

           </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;