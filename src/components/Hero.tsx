import { ArrowRight, CheckCircle2, ShieldCheck, Truck, PackageCheck, Leaf } from 'lucide-react';
import bananaPowderBowl from '../assets/banana-powder-bowl.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background styling elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-3xl opacity-60"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
              India’s Trusted Bulk Supplier & Exporter
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6">
             Premium <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-amber-500">
  Banana Powder
</span> <br className="hidden md:block"/> Exporter
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              We export premium Green Banana Powder, Raw Banana Powder, Onion Powder, Garlic Powder, Tomato Powder and Turmeric Powder. Supplying high-quality food ingredients to importers, distributors and food manufacturers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#products" className="inline-flex justify-center items-center bg-primary-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-300 transform hover:-translate-y-1">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#about" className="inline-flex justify-center items-center bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors">
                About Our Journey
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col">
                <div className="flex items-center text-gray-900 font-bold text-xl mb-1">
                  100% <Leaf className="w-5 h-5 ml-1 text-green-500" />
                </div>
                <span className="text-sm text-gray-500 font-medium">Pure & Natural</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-gray-900 font-bold text-xl mb-1">
                  Zero <ShieldCheck className="w-5 h-5 ml-1 text-blue-500" />
                </div>
                <span className="text-sm text-gray-500 font-medium">Additives & Gluten</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-gray-900 font-bold text-xl mb-1">
                  Global <Truck className="w-5 h-5 ml-1 text-primary-500" />
                </div>
                <span className="text-sm text-gray-500 font-medium">Bulk Supply Capacity</span>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto w-full max-w-lg">
            {/* Main composition image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] transform lg:-rotate-2 transition-transform duration-500 hover:rotate-0">
              <img 
                src={bananaPowderBowl} 
                alt="Nutriva Global Export Premium Banana Powder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center space-x-4">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                    <PackageCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Export Ready</h3>
                    <p className="text-sm text-gray-500 mt-0.5">Export Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements styling */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-gray-800 text-sm">FSSAI Certified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
