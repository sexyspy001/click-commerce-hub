import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Data Collection & Authorization</h2>
            <p className="font-medium bg-slate-50 p-3 border-l-4 border-blue-500 mb-4 rounded-r text-sm">
              <span className="font-bold">SPN Compliance Statement:</span> Seller data is accessed only after explicit authorization.
            </p>
            <p className="leading-relaxed">
              Click Commerce Hub accesses seller data solely for the purpose of providing agreed-upon services. Access to your Amazon Seller Central, Flipkart Seller Hub, or other platform accounts is obtained only after you explicitly authorize us via "User Permissions" (or the platform's equivalent delegation mechanism). We limit our access strictly to the specific modules necessary to perform the service (e.g., Reports, Inventory, Advertising).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Data Usage</h2>
             <p className="font-medium bg-slate-50 p-3 border-l-4 border-green-500 mb-4 rounded-r text-sm">
              <span className="font-bold">Usage Limitation:</span> Data is used only for service delivery. No resale or marketing use.
            </p>
            <p className="leading-relaxed">
              Your proprietary business data (including sales figures, customer details, and pricing strategies) is used exclusively for service delivery. We do not use your data for our own marketing, product development, or competitive analysis. We do not aggregate your data with other sellers' data for resale or external reporting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Data Sharing & Disclosure</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information or business data to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Data Retention</h2>
            <p className="leading-relaxed">
              We retain seller data only for as long as is necessary to fulfill the purposes for which it was collected (service delivery) or as required by law (e.g., tax and accounting obligations). Upon termination of services, we securely delete or anonymize your business data within 30 days, retaining only what is legally mandated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Amazon Data Protection Policy Alignment</h2>
            <p className="leading-relaxed">
              For services related to Amazon, we strictly adhere to the Amazon Data Protection Policy (DPP). We do not store Personally Identifiable Information (PII) of Amazon customers outside of the Amazon environment unless absolutely necessary for tax/shipping compliance and allowed by Amazon's terms. Any such data is handled with encryption and strict access controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Contact Us</h2>
            <p className="leading-relaxed">
              If there are any questions regarding this privacy policy or if you wish to revoke data access, you may contact us using the information below:
            </p>
            <div className="mt-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="font-bold text-slate-900">Click Commerce Hub</p>
              <p>Email: <a href="mailto:info@clickcommercehub.in" className="text-blue-600 hover:underline">info@clickcommercehub.in</a></p>
              <p>Phone: +91 62000 17130</p>
            </div>
          </section>
          
          <div className="pt-8 border-t border-slate-200 text-sm text-slate-500">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
