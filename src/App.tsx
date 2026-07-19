import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layout
import Layout from './components/common/Layout';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About//About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <BrowserRouter>
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