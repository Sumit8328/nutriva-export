import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import bananaPowderLeafClose from '../assets/banana-powder-leaf-close.jpg';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

interface ProductsProps {
  onSelectProduct?: (productName: string) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Green Banana Powder',
    category: 'Dehydrated Powders',
    image: bananaPowderLeafClose,
    description: '100% natural, rich in resistant starch, gluten-free, and ideal for healthy food manufacturing, baking, and nutritional supplement brands.'
  },
  {
    id: 2,
    name: 'Garlic Powder',
    category: 'Dehydrated Powders',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: '100% pure garlic powder, ideal for adding rich flavor to food blends, marinades, sauces, and dry rubs.'
  },
  {
    id: 3,
    name: 'Red Onion Granules',
    category: 'Flakes & Granules',
    image: 'https://images.unsplash.com/photo-1615486171448-4fd6d17b8f9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Enhance your food applications with the slightly sweet and tangy taste of red onion granules.'
  },
  {
    id: 4,
    name: 'Curry Leaves Powder',
    category: 'Spices Powder',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Authentic Indian aroma and flavor, perfect for seasoning traditional culinary recipes.'
  },
  {
    id: 5,
    name: 'Ginger Dehydrated Powder',
    category: 'Dehydrated Powders',
    image: 'https://images.unsplash.com/photo-1615485458936-a66426db4806?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Strong, pungent ginger flavor retained through careful hygienic dehydration processes.'
  },
  {
    id: 6,
    name: 'Tamarind Powder',
    category: 'Spices Powder',
    image: 'https://images.unsplash.com/photo-1621317752520-2ce3270bf1b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Tangy, sour profile of raw tamarind preserved in an easy-to-use stable powder form.'
  }
];

const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  const handleEnquiryClick = (productName: string) => {
    if (onSelectProduct) {
      onSelectProduct(productName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Top Selling Products</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Premium Range</h2>
            <p className="text-gray-600 text-lg">
              Sourced directly from certified farms, processed hygienically under strict quality control, and delivered globally in bulk packaging.
            </p>
          </div>
          <button 
            onClick={() => handleEnquiryClick('Premium Green Banana Powder')} 
            className="hidden md:inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors group"
          >
            View All Products & Enquire
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col h-full">
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/95 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-primary-700 border border-primary-100 shadow-sm">
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
                  <button 
                    onClick={() => handleEnquiryClick(product.name)}
                    className="w-full inline-flex justify-center items-center bg-gray-900 border border-transparent text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-colors group/btn relative overflow-hidden active:scale-95"
                  >
                    <span className="relative z-10 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Enquiry for Bulk Price
                    </span>
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-3 font-medium">Pricing based on volume. MOQ applies.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button 
            onClick={() => handleEnquiryClick('Premium Green Banana Powder')} 
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors group"
          >
            View All Products & Enquire
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
