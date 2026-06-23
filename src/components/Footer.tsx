import { Leaf, Mail, Phone, Shield, Scale, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center text-white">
              <div className="bg-primary-600 p-2.5 rounded-xl mr-3 shadow-md shadow-primary-900/30 text-white">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white block">Nutriva Global Export</span>
                <span className="text-xs text-primary-500 font-semibold uppercase tracking-widest mt-0.5 block">Premium Powder Exporter</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Nutriva Global Export supplies premium quality Banana Powder, Raw Banana Powder, Onion Powder, Garlic Powder, Tomato Powder and Turmeric Powder for domestic and international markets.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-1 animate-pulse"></span>
              Premium Powder Exporter
            </div>
          </div>

          {/* Catalog Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">Agro Catalog</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleScroll('products')} className="hover:text-primary-400 transition-colors text-left">
                  G9 Banana Powder
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('products')} className="hover:text-primary-400 transition-colors text-left">
                  Raw Banana Powder
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('products')} className="hover:text-primary-400 transition-colors text-left">
                  Onion Powder
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('products')} className="hover:text-primary-400 transition-colors text-left">
                  Tomato Powder
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('products')} className="hover:text-primary-400 transition-colors text-left">
                  Garlic Powder
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('products')} className="hover:text-primary-400 transition-colors text-left">
                  Turmeric Powder
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">Corporate</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleScroll('about')} className="hover:text-primary-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('products')} className="hover:text-primary-400 transition-colors font-medium text-primary-500">
                  Agro Products
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('gallery')} className="hover:text-primary-400 transition-colors">
                  Product Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('certificates')} className="hover:text-primary-400 transition-colors">
                  Certificates
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('contact')} className="hover:text-primary-400 transition-colors">
                  Bulk Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">Export Desk</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <a href="mailto:nutrivaglobalexport@gmail.com" className="hover:text-white transition-colors">
                  nutrivaglobalexport@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <a href="tel:+91 83290 95601+91 70201 69335" className="hover:text-white transition-colors">
                  +91 83290 95601 +91 70201 69335
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">
                  Agro Export Hubs, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-500">
            <span>&copy; {currentYear} Nutriva Global Export. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center"><Shield className="w-3.5 h-3.5 mr-1" /> Quality Focused Business</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center"><Scale className="w-3.5 h-3.5 mr-1" /> Export Ready Operations</span>
          </div>

          <div className="flex space-x-6 text-gray-500">
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Shipping & MOQ Terms</a>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            <p className="mb-1"><strong>GST No:</strong> 27AAZFN8041K1ZG</p>
            <p className="mb-1"><strong>Contact:</strong> Sumit Kale – +91 83290 95601 | Siddhesh Patil – +91 70201 69335</p>
            <p className="mb-1"><strong>Email:</strong> <a href="mailto:nutrivaglobalexport@gmail.com" className="underline hover:text-white">nutrivaglobalexport@gmail.com</a></p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
