import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Pricing Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-8 font-medium">
            Pricing is quote-based and depends on service scope, business size, platform requirements, and compliance complexity. Final pricing is shared after requirement assessment.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Pricing Factors</h2>
            <p className="text-slate-600 mb-4">
              We do not offer fixed price packages as every business has unique needs. Our quotes are determined by:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
              <li>The seller's business volume (GMV/Orders).</li>
              <li>The specific scope of work (e.g., Account Management vs. One-time Setup).</li>
              <li>Number of SKUs/ASINs requiring management.</li>
              <li>Operational complexity and platform choice.</li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">Transparency Statement</h2>
          <p className="text-slate-700 mb-4">
            We believe in full transparency. Customized quotations are provided after a thorough requirement assessment. There are no hidden fees. Any additional work outside the original scope will require a separate agreement and authorization.
          </p>

          <div className="mt-8 p-4 border-t border-slate-200">
            <p className="text-slate-600 mb-4">
              To receive a quote tailored to your business needs, please contact our support team.
            </p>
            <Link to="/contact" className="inline-block px-6 py-2 border border-slate-300 rounded-md text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              Contact Us for a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
