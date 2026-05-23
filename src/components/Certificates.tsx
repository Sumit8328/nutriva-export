import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, Award, Info, ArrowRight } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  status: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'FSSAI Registered',
    subtitle: 'Food Safety Domestic Standard',
    icon: <ShieldCheck className="w-8 h-8 text-primary-600 animate-pulse" />,
    description: 'Complies fully with domestic food safety standards of India. Covers hygienic milling, packaging, and handling of our dehydrated items.',
    status: 'Verified & Active'
  },
  {
    id: 2,
    title: 'ISO 22000:2018',
    subtitle: 'Food Safety Management',
    icon: <Award className="w-8 h-8 text-amber-500" />,
    description: 'Certified framework for controlling food safety hazards. Guarantees that our global clients receive only consistent, contaminant-free batches.',
    status: 'Standard Compliance'
  },
  {
    id: 3,
    title: 'APEDA Registration',
    subtitle: 'Government Export Authority',
    icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
    description: 'Registered under the Agricultural & Processed Food Products Export Development Authority of India, authorizing official global bulk supply.',
    status: 'Licensed Exporter'
  },
  {
    id: 4,
    title: 'HACCP & GMP Standards',
    subtitle: 'Manufacturing Cleanliness System',
    icon: <FileText className="w-8 h-8 text-green-500" />,
    description: 'Systematic protection against biological, chemical, and physical hazards in our processing lines, ensuring premium product purity.',
    status: 'Strict QA Alignment'
  }
];

const Certificates: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="certificates" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-12 left-0 -translate-x-1/4">
        <div className="w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
            Quality Assurance & Trust
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Corporate Compliance</h2>
          <p className="text-gray-600 text-lg">
            Bulk In Global strictly operates under global food-grade protocols. Our processing and logistics pipelines are certified to ensure flawless, sterile bulk delivery.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary-50 group-hover:scale-105 transition-all duration-300">
                  {cert.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-4">
                  {cert.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-bold px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Trust Notice */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-gray-200/80 shadow-md max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 flex-shrink-0">
              <Info className="w-8 h-8" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h4 className="text-xl font-bold text-gray-950 mb-2">Legal & Lab-Test Reports</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                All regulatory documents, lab phytosanitary certificates, analysis certificates, organic test grades, and export invoicing registrations are fully stored and verified. To request copies of official certificates for bulk orders, please submit a request to our compliance desk.
              </p>
              <button 
                onClick={handleScrollToContact}
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary-700 hover:shadow-lg transition-all active:scale-95 group"
              >
                Request Certificate Copies
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
