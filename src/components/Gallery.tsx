import React, { useState } from "react";
import { Camera, Eye, X, ZoomIn } from "lucide-react";

import bananaPowderLeafClose from "../assets/banana-powder-leaf-close.jpg";
import onionPowder from "../assets/gallery/onion-powder.jpg";
import garlicPowder from "../assets/gallery/garlic-powder.jpg";
import turmericPowder from "../assets/gallery/turmeric-powder.jpg";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  tag: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: bananaPowderLeafClose,
    title: "Green Banana Powder",
    tag: "Export Quality",
    description: "Premium quality Green banana powder for export markets."
  },
  {
    id: 2,
    src: turmericPowder,
    title: "Turmeric Powder",
    tag: "Export Quality",
    description: "Premium turmeric powder with rich color and aroma."
  },
  {
    id: 3,
    src: onionPowder,
    title: "Onion Powder",
    tag: "Export Quality",
    description: "High quality dehydrated onion powder."
  },
  {
    id: 4,
    src: garlicPowder,
    title: "Garlic Powder",
    tag: "Export Quality",
    description: "Premium garlic powder for food processing."
  }
];

const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block flex items-center justify-center">
            <Camera className="w-4 h-4 mr-2" />
            Visual Sourcing Showcase
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Product Gallery
          </h2>

          <p className="text-gray-600 text-lg">
            Explore our premium export-quality powders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-green-600 px-3 py-1 rounded-full text-xs font-bold">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {item.title}
                </h3>

                <p className="text-sm mt-2">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                <Eye className="text-white" />
              </div>
            </div>
          ))}

        </div>

        {activeItem && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">

            <div className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative">

              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 bg-black text-white p-2 rounded-full"
              >
                <X size={20} />
              </button>

              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="w-full h-[500px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-gray-600">
                  {activeItem.description}
                </p>

                <div className="mt-4 flex items-center text-primary-600">
                  <ZoomIn className="w-4 h-4 mr-2" />
                  Export Grade Quality
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