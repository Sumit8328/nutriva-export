import React, { useState } from 'react';
import { Camera, Eye, X, ZoomIn } from 'lucide-react';

// Dynamically import all gallery JPEG images
const images = import.meta.glob('../assets/gallery/*.jpeg', { eager: true, as: 'url' });

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  tag: string;
  description: string;
}

const galleryItems: GalleryItem[] = Object.entries(images).map(([path, url], index) => {
  const fileName = path.split('/').pop() ?? `Image ${index + 1}`;
  const productTitles = [
  'G9 Banana Powder',
  'Raw Banana Powder',
  'Onion Powder',
  'Garlic Powder',
  'Tomato Powder',
  'Turmeric Powder'
];
const title = productTitles[index] || `Product ${index + 1}`;
  // Extract date and time from WhatsApp filename pattern
  const description =
'Premium quality product suitable for bulk supply, food processing and international export markets.';
  return {
    id: index + 1,
    src: url as string,
    title,
    tag: 'Export Quality',
    description,
  } as GalleryItem;
});

const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block flex items-center justify-center">
            <Camera className="w-4 h-4 mr-2" /> Visual Sourcing Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Premium Product Gallery</h2>
          <p className="text-gray-600 text-lg">
            Explore our premium range of export-quality powders including banana powder, onion powder, garlic powder, tomato powder and turmeric powder.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[240px]">
          {/* Item 1 */}
          <div 
            onClick={() => setActiveItem(galleryItems[0])}
            className="lg:col-span-7 lg:row-span-2 relative group overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <img 
              src={galleryItems[0].src} 
              alt={galleryItems[0].title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="bg-primary-500 text-xs font-bold px-3 py-1.5 rounded-full mb-3 inline-block shadow-md">
                {galleryItems[0].tag}
              </span>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">{galleryItems[0].title}</h3>
              <p className="text-gray-200 text-sm line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                {galleryItems[0].description}
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
              <Eye className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Item 2 */}
          <div 
            onClick={() => setActiveItem(galleryItems[1])}
            className="lg:col-span-5 lg:row-span-1 relative group overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <img 
              src={galleryItems[1].src} 
              alt={galleryItems[1].title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="bg-primary-500 text-xs font-bold px-3 py-1.5 rounded-full mb-2 inline-block shadow-md">
                {galleryItems[1].tag}
              </span>
              <h3 className="text-xl font-bold mb-1 tracking-tight">{galleryItems[1].title}</h3>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Item 3 */}
          <div 
            onClick={() => setActiveItem(galleryItems[2])}
            className="lg:col-span-5 lg:row-span-2 relative group overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <img 
              src={galleryItems[2].src} 
              alt={galleryItems[2].title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="bg-primary-500 text-xs font-bold px-3 py-1.5 rounded-full mb-3 inline-block shadow-md">
                {galleryItems[2].tag}
              </span>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">{galleryItems[2].title}</h3>
              <p className="text-gray-200 text-sm line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                {galleryItems[2].description}
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
              <Eye className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Item 4 */}
          <div 
            onClick={() => setActiveItem(galleryItems[3])}
            className="lg:col-span-7 lg:row-span-1 relative group overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <img 
              src={galleryItems[3].src} 
              alt={galleryItems[3].title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="bg-primary-500 text-xs font-bold px-3 py-1.5 rounded-full mb-2 inline-block shadow-md">
                {galleryItems[3].tag}
              </span>
              <h3 className="text-xl font-bold mb-1 tracking-tight">{galleryItems[3].title}</h3>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row relative animate-scale-up border border-gray-800">
              
              {/* Close Button */}
              <button 
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-20 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Column */}
              <div className="w-full md:w-3/5 bg-gray-950 aspect-video md:aspect-auto md:h-[500px]">
                <img 
                  src={activeItem.src} 
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Column */}
              <div className="w-full md:w-2/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="bg-primary-50 text-primary-700 font-semibold px-3 py-1.5 rounded-full text-xs mb-4 inline-block border border-primary-100 shadow-sm">
                    {activeItem.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeItem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activeItem.description}</p>
                </div>
                
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <div className="flex items-center space-x-2 text-primary-600 text-xs font-bold tracking-widest uppercase">
                    <ZoomIn className="w-4 h-4" /> Export Grade Batch Quality
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;
