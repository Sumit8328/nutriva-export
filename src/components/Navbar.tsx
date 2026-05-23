import { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="bg-primary-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-6">
            <a href="mailto:bulkinglobal@gmail.com" className="flex items-center hover:text-primary-300 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              bulkinglobal@gmail.com
            </a>
            <a href="tel:+918888006532" className="flex items-center hover:text-primary-300 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 8888006532
            </a>
          </div>
          <div className="flex items-center space-x-4 text-primary-200">
            <span>India’s Trusted Bulk Supplier</span>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
          <div className="flex items-center group">
            <div className="bg-primary-600 p-2 rounded-lg mr-3 group-hover:bg-primary-500 transition-colors text-white">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-none">Bulk In Global</h1>
              <p className="text-xs text-primary-600 font-medium tracking-wider uppercase mt-1">Export Quality</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                >
                  {link.name}
                </a>
              </div>
            ))}
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Get Quote
            </a>
          </nav>

          <button 
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 overflow-y-auto h-full flex flex-col">
            <div className="flex justify-end mb-6">
              <button 
                className="text-gray-500 p-2 bg-gray-100 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 mb-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col space-y-4">
              <a href="mailto:bulkinglobal@gmail.com" className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-primary-600" /> bulkinglobal@gmail.com
              </a>
              <a href="tel:+918888006532" className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3 text-primary-600" /> +91 8888006532
              </a>
              <a href="#contact" className="bg-primary-600 text-white text-center px-6 py-3 rounded-xl font-medium mt-4">
                Send Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
