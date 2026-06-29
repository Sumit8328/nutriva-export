import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import bananaPowderLeafClose from "../assets/banana-powder-leaf-close.jpg";
import onionPowder from '../assets/gallery/onion-powder.jpg';
import garlicPowder from '../assets/gallery/garlic-powder.jpg';
import tomatoPowder from '../assets/gallery/tomato-powder.jpg';
import turmericPowder from '../assets/gallery/turmeric-powder.jpg';

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
    name: 'Green Banana Powder',
    category: 'Dehydrated Powders',
    image: bananaPowderLeafClose,
    description: 'Premium export-quality green banana powder ideal for bakery, baby food, nutraceutical and food processing industries.'
  },
  
{
  id: 2,
  name: 'Onion Powder',
  category: 'Flakes & Granules',
  image: onionPowder,
  description: 'Dehydrated onion powder with rich aroma and long shelf life for seasonings, sauces and food manufacturing.'
},
{
  id: 3,
  name: 'Garlic Powder',
  category: 'Spices Powder',
  image: garlicPowder,
  description: 'High-quality garlic powder processed hygienically for snacks, spice blends and industrial food applications.'
},
{
  id: 4,
  name: 'Tomato Powder',
  category: 'Dehydrated Powders',
  image: tomatoPowder,
  description: 'Natural tomato powder produced from carefully selected tomatoes for soups, sauces and seasoning blends.'
},
{
  id: 5,
  name: 'Turmeric Powder',
  category: 'Spices Powder',
  image: turmericPowder,
  description: 'Premium turmeric powder with vibrant color and high curcumin content for food and spice industries.'
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
    <section
  id="products"
  className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-white">
     <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>

<div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-primary-100 rounded-full blur-3xl opacity-30"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">OUR PRODUCTS</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Premium Food Ingredients</h2>
            <p className="text-gray-600 text-lg">
              Supplying premium food powders across domestic and international markets with consistent quality, reliable bulk supply and export-ready packaging.
            </p>
          </div>
          <button 
            onClick={() => handleEnquiryClick('Green Banana Powder')} 
            className="hidden md:inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors group"
          >
            View All Products & Enquire
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
          <div
             key={product.id}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] hover:-translate-y-4 transition-all duration-500 flex flex-col h-full">
              <div className="relative overflow-hidden h-72 bg-gray-100">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                 <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                   {product.name}
                  </h3>

                    <p className="text-green-200 text-sm font-medium mt-1">
                     Premium Export Quality
                 </p>
                  </div>
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                <span className="bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  EXPORT GRADE
                  </span>
                <span className="bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                 {product.category}
                 </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="hidden">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-7 mb-6">
                  {product.description}
                </p>
                <div className="space-y-2 mb-6">
             <div className="flex items-center text-sm text-gray-700">
           <span className="text-green-600 mr-2">✔</span>
             Export Grade Quality
            </div>

             <div className="flex items-center text-sm text-gray-700">
              <span className="text-green-600 mr-2">✔</span>
                Bulk Supply Available
               </div>

                 <div className="flex items-center text-sm text-gray-700">
                 <span className="text-green-600 mr-2">✔</span>
                  100% Natural Ingredients
                   </div>
                    </div>
                <div className="mt-auto pt-2">
                  <button
                    onClick={() => handleEnquiryClick(product.name)}
                    className="group w-full inline-flex justify-center items-center bg-gradient-to-r from-primary-600 to-green-700 text-white px-6 py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-primary-700 hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                   <MessageSquare className="w-4 h-4 mr-2" />
                   Request Bulk Quote
                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                   </span>
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-3 font-medium">MOQ Available • Worldwide Export • Custom Packaging</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button 
            onClick={() => handleEnquiryClick('Green Banana Powder')} 
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
