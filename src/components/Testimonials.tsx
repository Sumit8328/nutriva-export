import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Meena Tandan',
    title: 'Skeptical at First, Now a Lifelong Partner',
    content: 'Finding a reliable supplier felt impossible—hidden costs, inconsistent quality, and endless delays. But from my first order here, everything changed. Transparent pricing, flawless logistics, and products that exceeded expectations. Now, I don’t just trust them—I rely on them.'
  },
  {
    name: 'Shivam Dubey',
    title: 'Quality That Speaks for Itself',
    content: 'We’ve been in the agricultural trade for years, but sourcing premium-quality grains without compromise was a challenge. Then we found them. Every batch arrives fresh, pure, and exactly as promised. They don’t just sell products—they deliver excellence.'
  },
  {
    name: 'Shreya Singh',
    title: 'More Than a Supplier—A True Partner',
    content: 'Most suppliers disappear after delivery, but not them. Their post-sale support, market insights, and commitment to long-term success make them more than just a trading company. They are partners who genuinely care about our growth.'
  },
  {
    name: 'Rajat Kumar',
    title: 'Deadlines Matter—And They Get It',
    content: 'In this business, a single delay can cost thousands. With them, I never have to worry. Shipments arrive on time, every time, without excuses. They don’t just meet expectations—they redefine reliability.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Voice Of Trust</h2>
          <div className="flex justify-center mb-6 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Hear from our global partners who have experienced our commitment to quality and service.
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
                  <span className="text-sm text-gray-500 font-medium">Verified Partner</span>
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
