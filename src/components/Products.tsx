import React from 'react';
import { ShoppingCart, MessageSquare, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Garlic Powder',
    category: 'Dehydrated Powders',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: '100% pure garlic powder, ideal for adding rich flavor to marinades, sauces, and dry rubs.'
  },
  {
    id: 2,
    name: 'Red Onion Granules',
    category: 'Flakes & Granules',
    image: 'https://images.unsplash.com/photo-1615486171448-4fd6d17b8f9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Enhance your dishes with the slightly sweet and tangy taste of Red Onion Granules.'
  },
  {
    id: 3,
    name: 'Curry Leaves Powder',
    category: 'Spices Powder',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Authentic Indian aroma and flavor, perfect for tempering and seasoning traditional recipes.'
  },
  {
    id: 4,
    name: 'Ginger Dehydrated Powder',
    category: 'Dehydrated Powders',
    image: 'https://images.unsplash.com/photo-1615485458936-a66426db4806?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Strong, pungent ginger flavor retained through careful dehydration processes.'
  },
  {
    id: 5,
    name: 'Garlic Flakes',
    category: 'Flakes & Granules',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Premium garlic flakes perfect for bulk rehydration or direct use in culinary applications.'
  },
  {
    id: 6,
    name: 'Tamarind Powder',
    category: 'Spices Powder',
    image: 'https://images.unsplash.com/photo-1621317752520-2ce3270bf1b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Tangy, sour profile of raw tamarind preserved in an easy-to-use stable powder form.'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Top Selling Products</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Premium Range</h2>
            <p className="text-gray-600 text-lg">
              Sourced directly from farmers, processed with care, and delivered to you in bulk. Explore our highest demanded exports.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors group">
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col h-full">
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/95 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-gray-800 shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  {/* CRUCIAL REQUIREMENT: "in place of prices there should be send enquiry part" */}
                  <a 
                    href="#contact" 
                    className="w-full inline-flex justify-center items-center bg-gray-900 border border-transparent text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-colors group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Enquiry for Bulk Price
                    </span>
                  </a>
                  <p className="text-xs text-center text-gray-400 mt-3 font-medium">Pricing based on quantity. MOQ applies.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#contact" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors group">
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
