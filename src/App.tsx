import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Layout
import Layout from './components/common/Layout';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About//About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

import { scrollToTop } from './utils/scrollToTop';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop("auto");
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}