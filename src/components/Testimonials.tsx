import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Global Buyers',
    title: 'Building Trust Through Quality',
    content: 'Nutriva Global Export is currently expanding its international buyer network. We focus on consistent quality, transparent communication, and reliable bulk supply solutions.'
  },
  {
    name: 'Export Partners',
    title: 'Reliable Bulk Supply',
    content: 'Our commitment is to provide premium quality powders, timely deliveries, and professional export support for global food manufacturers and distributors.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Buyers Choose Us</h2>
          <div className="flex justify-center mb-6 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600 text-lg">
            We are building long-term relationships with food manufacturers, importers, and distributors through quality products and reliable export services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 p-8 md:p-10 rounded-3xl relative hover:bg-primary-50 hover:shadow-lg transition-all duration-300 group"
            >
              <Quote className="absolute right-8 top-8 w-12 h-12 text-gray-200 group-hover:text-primary-100 transition-colors" />
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 pr-12">"{testimonial.title}"</h3>
              <p className="text-gray-600 leading-relaxed mb-8 relative z-10 italic">
                {testimonial.content}
              </p>
              
              <div className="flex items-center border-t border-gray-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mr-4 shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500 font-medium">Business Network</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
