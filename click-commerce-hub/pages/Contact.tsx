import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
        <p className="text-slate-600 mb-8">
          Get in touch for service inquiries, onboarding assistance, or support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Business Information</h2>
              <p className="font-medium text-slate-900">Click Commerce Hub</p>
              <p className="text-slate-600 mb-4">Multi-Platform E-commerce Partner</p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-900">Support Purpose:</p>
                <p className="text-sm text-slate-600">
                  Service quotes, general inquiries, and client support.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-900">Phone & WhatsApp:</p>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+916200017130" className="text-slate-600 hover:text-slate-900 flex items-center">
                    <span className="mr-2">📞</span> +91 62000 17130
                  </a>
                  <a href="https://wa.me/916200017130" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 flex items-center">
                    <span className="mr-2">💬</span> Chat on WhatsApp
                  </a>
                  <a href="https://whatsapp.com/channel/0029Vb6mxwN7T8batlLl8G2t" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-900 flex items-center text-sm mt-1">
                     <span className="mr-2">📢</span> Join WhatsApp Channel
                  </a>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-900">Email:</p>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@clickcommercehub.in" className="text-blue-600 hover:underline">info@clickcommercehub.in</a>
                  <a href="mailto:sellersupport@clickcommercehub.in" className="text-blue-600 hover:underline">sellersupport@clickcommercehub.in</a>
                </div>
              </div>

              {/* Social Media List */}
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-3">Connect With Us:</p>
                <div className="space-y-2">
                  <a href="https://in.linkedin.com/in/shivam-raj-66b658377" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-700">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/clickcommercehub_/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-pink-600">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/people/Click-Commerce-hub/61582980849948/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-600">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    Facebook
                  </a>
                  <a href="https://www.youtube.com/@ClickCommerceHub" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-red-600">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    YouTube
                  </a>
                  <a href="https://share.google/Lr7Wnvasnm3YtjYYm" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-red-500">
                     <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
                    Google Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border" placeholder="Your Name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border" placeholder="you@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service Interest</label>
                <select id="service" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border">
                  <option>General Inquiry</option>
                  <option>Account Management</option>
                  <option>Advertising</option>
                  <option>Quick Commerce</option>
                  <option>Digital Marketing</option>
                  <option>Logistics/Shipping</option>
                  <option>GST & Registration</option>
                  <option>Website/Store Creation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border" placeholder="How can we help?"></textarea>
              </div>

              <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;