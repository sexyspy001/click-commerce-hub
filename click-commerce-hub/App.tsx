import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesIndex from './pages/ServicesIndex';
import PlatformDetail from './pages/PlatformDetail';
import ServiceDetail from './pages/ServiceDetail';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

// ScrollToTop component to handle scroll behavior on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:platformId" element={<PlatformDetail />} />
          <Route path="/services/:platformId/:serviceId" element={<ServiceDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;