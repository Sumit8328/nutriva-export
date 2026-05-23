import { 
  HeartHandshake, 
  Sparkles, 
  Settings2, 
  Package, 
  Truck, 
  UserCheck 
} from 'lucide-react';

const journeys = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary-600" />,
    title: 'Sourcing with Soul',
    description: 'From sun-kissed fields to careful hands, we source ethically grown harvests, nurtured with tradition and integrity.'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    title: 'Refining Purity, Preserving Excellence',
    description: 'Every grain undergoes meticulous grading and sorting, ensuring nature’s best reaches you in its purest form.'
  },
  {
    icon: <Settings2 className="w-8 h-8 text-blue-500" />,
    title: 'Processing with Precision',
    description: 'With advanced techniques and a commitment to quality, we enhance shelf life while preserving natural goodness.'
  },
  {
    icon: <Package className="w-8 h-8 text-green-500" />,
    title: 'Packaging That Protects & Preserves',
    description: 'Freshness is sealed, sustainability embraced—our packaging safeguards quality while honoring the planet.'
  },
  {
    icon: <Truck className="w-8 h-8 text-purple-500" />,
    title: 'Seamless Logistics, Timely Deliveries',
    description: 'Precision-led supply chains ensure every order arrives flawlessly, bridging farms to markets without delay.'
  },
  {
    icon: <UserCheck className="w-8 h-8 text-teal-500" />,
    title: 'Beyond Delivery—A Partnership for Life',
    description: 'More than a shipment, it’s a relationship—built on trust, transparency, and an unwavering commitment to your success.'
  }
];

const Features = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Execution Process</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">A Journey of Trust & Excellence</h2>
          <p className="text-gray-600 text-lg">
            Experience our commitment to quality from the farm all the way to your facility. We don't just supply ingredients; we build partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeys.map((journey, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary-50 group-hover:scale-110 transition-all duration-300">
                {journey.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {journey.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {journey.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
