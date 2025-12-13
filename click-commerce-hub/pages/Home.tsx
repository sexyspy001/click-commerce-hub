import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      
      {/* Hero Section - Documentation Style */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight sm:text-5xl mb-6">
              E-commerce Services & <br/>Marketplace Enablement
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Structured, compliant, and execution-focused support for Indian sellers across marketplaces and D2C platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections - Grid Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Section 1: Get Started */}
            <div className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Get Started</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-slate-400">•</span>
                  Seller Onboarding Overview
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-400">•</span>
                  Marketplace Registration Guide
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-400">•</span>
                  Compliance & Documentation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-400">•</span>
                  Website & Store Setup
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link to="/resources" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  View documentation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 2: Service Directories */}
            <div className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Service Directories</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <Link to="/services/amazon/account-management" className="hover:text-blue-600 transition-colors flex items-start">
                    <span className="mr-2 text-slate-400">•</span>
                    Account Management
                  </Link>
                </li>
                <li className="flex items-start">
                  <Link to="/services/amazon/cataloging" className="hover:text-blue-600 transition-colors flex items-start">
                    <span className="mr-2 text-slate-400">•</span>
                    Cataloging & Listings
                  </Link>
                </li>
                <li className="flex items-start">
                  <Link to="/services/amazon/advertising-optimization" className="hover:text-blue-600 transition-colors flex items-start">
                    <span className="mr-2 text-slate-400">•</span>
                    Advertising Optimization
                  </Link>
                </li>
                <li className="flex items-start">
                  <Link to="/services/amazon/taxes" className="hover:text-blue-600 transition-colors flex items-start">
                    <span className="mr-2 text-slate-400">•</span>
                    GST & Taxation
                  </Link>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link to="/services" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  View all services &rarr;
                </Link>
              </div>
            </div>

            {/* Section 3: Platforms Supported (Visual Logos) */}
            <div className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Platforms Supported</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                {/* Amazon */}
                <Link to="/services/amazon" className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200 bg-white hover:shadow-md hover:border-orange-300 transition-all cursor-pointer group">
                   <div className="flex items-baseline">
                     <span className="font-bold text-slate-900 text-xl tracking-tight">amazon</span>
                     <span className="text-slate-900 text-sm">.in</span>
                   </div>
                   {/* Smile arrow */}
                   <svg className="w-12 h-4 text-orange-500 mt-1" viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 8.5C10 16 35 16 48 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M48 3L45 8M48 3L42 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                   </svg>
                </Link>

                {/* Flipkart */}
                <Link to="/services/flipkart" className="flex items-center justify-center p-4 rounded-lg border border-slate-200 bg-white hover:shadow-md hover:border-blue-300 transition-all cursor-pointer">
                   <span className="font-bold text-[#2874f0] text-xl italic tracking-tighter mr-1">Flipkart</span>
                   <div className="w-2 h-2 bg-[#f0e14a] rounded-full mt-1"></div>
                </Link>

                {/* Meesho */}
                <Link to="/services/meesho" className="flex items-center justify-center p-4 rounded-lg border border-slate-200 bg-white hover:shadow-md hover:border-pink-300 transition-all cursor-pointer">
                   <span className="font-bold text-[#f43397] text-2xl tracking-tight">meesho</span>
                </Link>

                {/* JioMart */}
                <Link to="/services/jiomart" className="flex items-center justify-center p-4 rounded-lg border border-slate-200 bg-[#008ecc] hover:shadow-md hover:bg-[#007bb5] transition-all cursor-pointer">
                   <span className="font-bold text-white text-xl">JioMart</span>
                </Link>

                {/* AJIO */}
                <Link to="/services/ajio" className="flex items-center justify-center p-4 rounded-lg border border-slate-200 bg-[#2c4152] hover:shadow-md hover:bg-[#1f2d3a] transition-all cursor-pointer">
                   <span className="font-bold text-white text-xl tracking-widest">AJIO</span>
                </Link>

                {/* Shopify */}
                <Link to="/services/website-shopify" className="flex items-center justify-center p-4 rounded-lg border border-slate-200 bg-white hover:shadow-md hover:border-green-300 transition-all cursor-pointer">
                   <svg className="w-6 h-6 text-[#95bf47] mr-2" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2L2 6L4 16L12 22L20 16L22 6L12 2Z" fillOpacity="0.2"/>
                     <path d="M19 6L12 2L5 6V16L12 22L19 16V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                     <path d="M14.5 10C14.5 10 13.5 9 12 9C10.5 9 9.5 10 9.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                   <span className="font-bold text-[#202e3b] text-xl">shopify</span>
                </Link>

              </div>

              <p className="text-sm text-slate-600 mb-4">
                We provide specialized support for both domestic marketplaces and international export platforms.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link to="/services" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  Explore platforms &rarr;
                </Link>
              </div>
            </div>

            {/* Section 4: Integrations & Tools */}
            <div className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Integrations & Tools</h2>
              <p className="text-sm text-slate-600 mb-4">
                Leverage our structured processes for seamless marketplace operations.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-slate-400">•</span>
                  Seller Central workflows
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-400">•</span>
                  Reporting & analytics support
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-400">•</span>
                  Documentation-based processes
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link to="/contact" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  Contact support &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Compliance & Policies */}
            <div className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Compliance & Policies</h2>
              <p className="text-sm text-slate-600 mb-4">
                Our services are built on a foundation of strict policy adherence.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  Data privacy & seller consent
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  Platform policy adherence
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  No guaranteed results disclaimer
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  Ethical service standards
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link to="/privacy-policy" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  Read policies &rarr;
                </Link>
              </div>
            </div>

             {/* Corporate Profile Card with Secondary Logo */}
             <div className="border border-slate-200 bg-slate-50 rounded-lg p-6 relative overflow-hidden">
               <div className="flex flex-col sm:flex-row items-start gap-6">
                 <div className="flex-shrink-0">
                    <img 
                      src="https://github.com/sexyspy001/clickcommercehub_logo/blob/main/Gemini_Generated_Image_8pn42m8pn42m8pn4.png?raw=true" 
                      alt="CCH Brand Icon" 
                      className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                    />
                 </div>
                 <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2">About Click Commerce Hub</h2>
                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                      Led by <span className="font-semibold">Shivam Raj (Founder & CEO)</span> and <span className="font-semibold">Guriya Raj (Co-Founder)</span>, Click Commerce Hub is built to support Indian sellers with compliance-first, execution-driven e-commerce services. We operate as a neutral third-party service provider focused on operational excellence.
                    </p>
                    <p className="text-xs text-slate-500 italic">"Navigating E-commerce Success"</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Disclaimer Strip */}
      <div className="bg-slate-50 border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-500 max-w-3xl mx-auto">
            This website serves as an informational portal for services provided by Click Commerce Hub. 
            All marketplace logos and trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;