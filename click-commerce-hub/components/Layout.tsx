import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Documentation style link classes
  const linkClass = (path: string) => 
    location.pathname === path 
      ? "text-slate-900 font-bold text-sm border-b-2 border-slate-900 pb-4 -mb-4" 
      : "text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      {/* Top Navigation Bar - Documentation Style */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Area */}
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <img 
                src="https://github.com/sexyspy001/clickcommercehub_logo/blob/main/logo-type1.png?raw=true" 
                alt="Click Commerce Hub" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 h-16 items-center">
              <Link to="/" className={linkClass('/')}>Home</Link>
              <Link to="/resources" className={linkClass('/resources')}>Documentation</Link>
              <Link to="/services" className={linkClass('/services')}>Services</Link>
              <Link to="/pricing" className={linkClass('/pricing')}>Pricing</Link>
              <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
            </nav>

            {/* Utility Icons (Visual only for UI match) */}
            <div className="hidden md:flex items-center space-x-4 border-l border-slate-200 pl-4 ml-4">
               <button className="text-slate-500 hover:text-slate-900">
                 <span className="sr-only">Search</span>
                 <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
               </button>
               <button className="text-slate-500 hover:text-slate-900 text-sm font-medium">
                 EN
               </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg absolute w-full z-50">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link to="/" onClick={closeMenu} className="block px-3 py-3 border-b border-slate-100 text-sm font-medium text-slate-900">Home</Link>
              <Link to="/resources" onClick={closeMenu} className="block px-3 py-3 border-b border-slate-100 text-sm font-medium text-slate-600">Documentation</Link>
              <Link to="/services" onClick={closeMenu} className="block px-3 py-3 border-b border-slate-100 text-sm font-medium text-slate-600">Services</Link>
              <Link to="/pricing" onClick={closeMenu} className="block px-3 py-3 border-b border-slate-100 text-sm font-medium text-slate-600">Pricing</Link>
              <Link to="/contact" onClick={closeMenu} className="block px-3 py-3 text-sm font-medium text-slate-600">Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        {children}
      </main>

      {/* Footer - Enterprise Style */}
      <footer className="bg-white border-t border-slate-200 pt-12 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-base font-bold text-slate-900 mb-4">Click Commerce Hub</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                Led by Shivam Raj (Founder & CEO) and Guriya Raj (Co-Founder), Click Commerce Hub is built to support Indian sellers with compliance-first, execution-driven e-commerce services.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link to="/resources" className="hover:text-blue-600 hover:underline">Documentation</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 hover:underline">Service Directory</Link></li>
                <li><Link to="/pricing" className="hover:text-blue-600 hover:underline">Pricing Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link to="/privacy-policy" className="hover:text-blue-600 hover:underline">Privacy Policy</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600 hover:underline">Contact Support</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 mt-8">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Click Commerce Hub. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Click Commerce Hub is an independent service provider and is not affiliated with or endorsed by any marketplace unless explicitly stated.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;