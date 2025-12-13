import React, { useEffect, useState } from 'react';
import { 
  indianMarketplaces, 
  internationalPlatforms, 
  quickCommerce, 
  websiteTypes, 
  gstScenarios,
  fssaiMandates,
  trademarkRules,
  otherRegistrationsDetails,
  shopifyRequirements,
  decisionFlows,
  exampleScenarios
} from '../data/knowledgeBase';

const Resources: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const NavItem = ({ id, label }: { id: string, label: string }) => (
    <button 
      onClick={() => scrollTo(id)}
      className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
        activeSection === id 
          ? 'bg-blue-100 text-blue-700 font-bold' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">Seller Knowledge Hub</h1>
          <p className="mt-4 text-lg text-slate-400">
            A structured guide to Indian E-commerce, Compliance, and Strategy.
          </p>
          <div className="mt-6">
             <a href="https://whatsapp.com/channel/0029Vb6mxwN7T8batlLl8G2t" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-green-900 bg-green-100 hover:bg-green-200">
                Join our WhatsApp Channel ✅
             </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* LEFT SIDEBAR - BRANCH NAVIGATION */}
        <div className="lg:w-1/4">
           <div className="sticky top-24 bg-white border border-slate-200 rounded-xl shadow-sm p-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Knowledge Tree</h3>
              
              <div className="space-y-6">
                <div>
                   <h4 className="px-4 text-sm font-bold text-slate-900 mb-2">Branch 1: Selling Platforms</h4>
                   <div className="space-y-1">
                     <NavItem id="indian-marketplaces" label="🇮🇳 Indian Marketplaces" />
                     <NavItem id="global-selling" label="🌍 Global Selling (Exports)" />
                     <NavItem id="quick-commerce" label="⚡ Quick Commerce" />
                   </div>
                </div>

                <div>
                   <h4 className="px-4 text-sm font-bold text-slate-900 mb-2">Branch 2: Digital Presence</h4>
                   <div className="space-y-1">
                     <NavItem id="website-types" label="🌐 Website Types" />
                     <NavItem id="shopify-requirements" label="🛍️ Shopify Requirements" />
                   </div>
                </div>

                <div>
                   <h4 className="px-4 text-sm font-bold text-slate-900 mb-2">Branch 3: Compliance</h4>
                   <div className="space-y-1">
                     <NavItem id="gst-requirements" label="📄 GST Logic" />
                     <NavItem id="fssai" label="🥗 FSSAI Rules" />
                     <NavItem id="trademark" label="®️ Trademark" />
                     <NavItem id="other-registrations" label="📋 Other Registrations" />
                   </div>
                </div>

                <div>
                   <h4 className="px-4 text-sm font-bold text-slate-900 mb-2">Branch 4: Strategy</h4>
                   <div className="space-y-1">
                     <NavItem id="decision-flow" label="🧠 Decision Flow" />
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* RIGHT CONTENT - SUB BRANCHES */}
        <div className="lg:w-3/4 space-y-20">
          
          {/* BRANCH 1: PLATFORMS */}
          <div className="space-y-16">
            
            {/* Indian Marketplaces */}
            <section id="indian-marketplaces" className="scroll-mt-28">
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1.1</span>
                <h2 className="text-2xl font-bold text-slate-900">Indian Marketplaces</h2>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-md">
                 <p className="text-blue-900 text-sm">
                   <strong>Core Logic:</strong> You don't sell <em>to</em> Amazon; you sell <em>through</em> them. GST is mandatory from Day 1 (₹0 exemption) because they are e-commerce operators.
                 </p>
              </div>

              <div className="overflow-hidden border border-slate-200 rounded-lg">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Rank</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Platform</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {indianMarketplaces.map((item) => (
                      <tr key={item.platform}>
                        <td className="px-4 py-3 text-sm font-bold text-slate-900">#{item.rank}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-blue-700">{item.platform}</td>
                        <td className="px-4 py-3 text-sm text-slate-600">{item.category}</td>
                        <td className="px-4 py-3 text-sm text-slate-500">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Global Selling */}
            <section id="global-selling" className="scroll-mt-28">
              <div className="flex items-center mb-6">
                <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1.2</span>
                <h2 className="text-2xl font-bold text-slate-900">Global Selling (Exports)</h2>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-6">
                <h3 className="text-orange-900 font-bold mb-2">Export Rules Simplified</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border border-orange-200">
                     <p className="text-xs text-slate-500 uppercase font-bold">Taxation</p>
                     <p className="text-sm text-slate-800">GST is <strong>Zero-Rated (0%)</strong>. You do not charge tax to foreign customers.</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-orange-200">
                     <p className="text-xs text-slate-500 uppercase font-bold">Mandatory License</p>
                     <p className="text-sm text-slate-800"><strong>IEC (Import Export Code)</strong> is compulsory. Customs will reject shipments without it.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {internationalPlatforms.map((item) => (
                   <div key={item.platform} className="border border-slate-200 p-4 rounded-lg bg-white">
                      <div className="flex justify-between items-start">
                         <h3 className="font-bold text-slate-900">{item.platform}</h3>
                         <span className="text-xs bg-slate-100 px-2 py-1 rounded">{item.regions}</span>
                      </div>
                      <p className="text-xs text-red-600 font-medium mt-2">{item.extra}</p>
                   </div>
                 ))}
              </div>
            </section>

            {/* Quick Commerce */}
            <section id="quick-commerce" className="scroll-mt-28">
              <div className="flex items-center mb-6">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1.3</span>
                <h2 className="text-2xl font-bold text-slate-900">Quick Commerce</h2>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                 <p className="text-green-900 text-sm mb-3">
                   <strong>Definition:</strong> Delivery in 10-30 mins. Requires stock in local "Dark Stores".
                 </p>
                 <div className="grid sm:grid-cols-3 gap-3">
                    <div className="bg-white px-3 py-2 rounded text-center border border-green-200">
                       <span className="block text-xs text-slate-500">Requirement</span>
                       <span className="text-sm font-bold text-slate-800">Local State GST</span>
                    </div>
                    <div className="bg-white px-3 py-2 rounded text-center border border-green-200">
                       <span className="block text-xs text-slate-500">Requirement</span>
                       <span className="text-sm font-bold text-slate-800">FSSAI (Food)</span>
                    </div>
                    <div className="bg-white px-3 py-2 rounded text-center border border-green-200">
                       <span className="block text-xs text-slate-500">Requirement</span>
                       <span className="text-sm font-bold text-slate-800">Barcodes</span>
                    </div>
                 </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickCommerce.map((item) => (
                  <div key={item.platform} className="border border-slate-200 p-4 rounded-lg hover:shadow-sm transition-shadow">
                    <h3 className="font-bold text-slate-900">{item.platform}</h3>
                    <p className="text-xs text-slate-500 mb-2">{item.sellerType}</p>
                    <p className="text-xs bg-slate-50 p-2 rounded text-slate-700 italic">{item.notes}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* BRANCH 2: DIGITAL PRESENCE */}
          <div className="space-y-16">
             <section id="website-types" className="scroll-mt-28">
              <div className="flex items-center mb-6">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2.1</span>
                <h2 className="text-2xl font-bold text-slate-900">Website Types</h2>
              </div>

              <div className="space-y-4">
                {websiteTypes.map((item) => (
                  <div key={item.type} className="flex flex-col sm:flex-row justify-between items-center border border-slate-200 p-4 rounded-lg">
                     <div className="mb-2 sm:mb-0">
                       <h3 className="font-bold text-slate-900">{item.type}</h3>
                       <p className="text-xs text-slate-500">Best for: {item.bestFor}</p>
                     </div>
                     <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.gst.includes('Yes') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                       GST: {item.gst}
                     </span>
                  </div>
                ))}
              </div>
             </section>

             <section id="shopify-requirements" className="scroll-mt-28">
              <div className="flex items-center mb-6">
                <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2.2</span>
                <h2 className="text-2xl font-bold text-slate-900">Shopify Requirements</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border-2 border-green-400 p-5 rounded-lg bg-green-50/50">
                   <h3 className="font-bold text-green-800 mb-3 border-b border-green-200 pb-2">✅ Mandatory</h3>
                   <ul className="space-y-2">
                     {shopifyRequirements.mandatory.map((req, i) => (
                       <li key={i} className="flex items-start text-sm text-slate-800">
                         <span className="text-green-600 mr-2">✓</span> {req}
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="border border-slate-200 p-5 rounded-lg">
                   <h3 className="font-bold text-slate-700 mb-3 border-b border-slate-100 pb-2">❌ Optional</h3>
                   <ul className="space-y-2">
                     {shopifyRequirements.notMandatory.map((req, i) => (
                       <li key={i} className="flex items-start text-sm text-slate-600">
                         <span className="text-slate-400 mr-2">•</span> {req}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
             </section>
          </div>

          {/* BRANCH 3: COMPLIANCE */}
          <div className="space-y-16">
            
            <section id="gst-requirements" className="scroll-mt-28">
              <div className="flex items-center mb-6">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3.1</span>
                <h2 className="text-2xl font-bold text-slate-900">GST Logic</h2>
              </div>
              <div className="overflow-hidden border border-slate-200 rounded-lg mb-6">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-indigo-900 uppercase">Scenario</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-indigo-900 uppercase">Requirement</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-indigo-900 uppercase">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {gstScenarios.map((row, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 text-sm font-bold text-slate-900">{row.scenario}</td>
                        <td className="px-4 py-3 text-sm text-indigo-700 font-bold">{row.requirement}</td>
                        <td className="px-4 py-3 text-xs text-slate-600 italic">{row.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="fssai" className="scroll-mt-28">
              <div className="flex items-center mb-6">
                <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3.2</span>
                <h2 className="text-2xl font-bold text-slate-900">FSSAI Rules</h2>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg mb-4 border border-teal-100">
                <p className="text-sm text-teal-900">
                  <strong>The Rule:</strong> If it goes inside the human body (Food, Drink, Supplement) → <span className="font-bold underline">FSSAI is Mandatory</span>.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {fssaiMandates.map((item, i) => (
                  <div key={i} className={`p-4 rounded border ${item.requirement.includes('Mandatory') ? 'border-teal-200 bg-white' : 'border-slate-200 bg-slate-50'}`}>
                     <div className="flex justify-between mb-1">
                        <span className="font-bold text-slate-900 text-sm">{item.category}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.requirement.includes('Mandatory') ? 'bg-teal-100 text-teal-800' : 'bg-slate-200 text-slate-600'}`}>{item.requirement}</span>
                     </div>
                     <p className="text-xs text-slate-500">{item.notes}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="trademark" className="scroll-mt-28">
              <div className="flex items-center mb-6">
                <span className="bg-slate-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3.3</span>
                <h2 className="text-2xl font-bold text-slate-900">Trademark (™)</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {trademarkRules.map((rule, i) => (
                   <div key={i} className="border border-slate-200 p-4 rounded-lg bg-white">
                      <p className="font-bold text-slate-900 mb-2 text-sm">{rule.context}</p>
                      <p className={`text-xs font-bold mb-2 ${rule.requirement.includes('Mandatory') ? 'text-red-600' : 'text-green-600'}`}>{rule.requirement}</p>
                      <p className="text-xs text-slate-500">{rule.notes}</p>
                   </div>
                ))}
              </div>
            </section>

            <section id="other-registrations" className="scroll-mt-28">
               <div className="flex items-center mb-6">
                <span className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3.4</span>
                <h2 className="text-2xl font-bold text-slate-900">Other Registrations</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {otherRegistrationsDetails.map((reg, i) => (
                   <div key={i} className="border border-slate-200 p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                      <p className="text-xs text-yellow-700 font-bold uppercase mb-1">{reg.usage}</p>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{reg.name}</h4>
                      <p className="text-xs text-slate-500">{reg.notes}</p>
                   </div>
                ))}
              </div>
            </section>
          </div>

          {/* BRANCH 4: STRATEGY */}
          <div className="space-y-16">
             <section id="decision-flow" className="scroll-mt-28">
               <div className="flex items-center mb-6">
                <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">4.1</span>
                <h2 className="text-2xl font-bold text-slate-900">Strategy & Decision Flow</h2>
              </div>
              
              <div className="bg-slate-900 rounded-xl p-6 sm:p-8 text-white shadow-lg">
                 <p className="text-slate-400 mb-6 text-center">
                    Compliance depends on your business model. Follow the logic.
                 </p>
                 <div className="space-y-4">
                    {decisionFlows.map((flow, i) => (
                       <div key={i} className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex flex-col sm:flex-row justify-between items-center">
                          <p className="font-bold text-white mb-2 sm:mb-0">❓ {flow.scenario}</p>
                          <div className="flex items-center gap-4">
                             <span className="text-sm bg-blue-600 px-3 py-1 rounded text-white">{flow.solution}</span>
                             <button onClick={() => scrollTo(flow.link || '')} className="text-xs text-slate-400 hover:text-white underline">Details &rarr;</button>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Example Scenarios */}
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                 {exampleScenarios.map((ex, i) => (
                    <div key={i} className="border border-slate-200 p-5 rounded-lg bg-white">
                       <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">{ex.title}</h4>
                       <ul className="space-y-1">
                          {ex.items.map((item, idx) => (
                             <li key={idx} className={`text-sm ${item.includes('❌') ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
             </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resources;