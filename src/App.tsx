import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from "./components/About";
function App() {
  const [selectedProduct, setSelectedProduct] = useState<string>('G9 Banana Powder');

  return (
    <div className="min-h-screen bg-white selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Products onSelectProduct={setSelectedProduct} />
        <Gallery />
        <Certificates />
        <Testimonials />
        <Contact selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
