import aboutImage from "../assets/hero/hero-green-banana-powder.jpg";

const About = () => {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
       <div>
       <span className="text-primary-600 font-semibold uppercase tracking-widest text-sm">
         ABOUT NUTRIVA
     </span>
               {/* left */}
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
     Premium Food Powder Supplier
     for Domestic & Global Markets
       </h2>

     <p className="text-gray-600 text-lg leading-8 mt-6">
      Nutriva Global Export supplies premium food powders to domestic businesses,
      exporters, importers, distributors and food manufacturers.
      We are committed to consistent quality, reliable bulk supply and
      long-term business relationships.
         </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">

  <a
    href="#products"
    className="bg-primary-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300"
  >
    Explore Products
  </a>

  <a
    href="#contact"
    className="border border-gray-300 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
  >
    Contact Us
  </a>

</div>
                     {/* Right */}
        <div className="relative group">
  <img
    src={aboutImage}
    alt="Premium Food Powder"
    className="rounded-3xl shadow-2xl w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
  />
</div> 
<div className="grid grid-cols-2 gap-4 mt-6">

  <div className="bg-green-50 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-primary-600">100%</h3>
    <p className="text-sm text-gray-600 mt-1">
      Natural Products
    </p>
  </div>

  <div className="bg-green-50 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-primary-600">Bulk</h3>
    <p className="text-sm text-gray-600 mt-1">
      Domestic & Export Supply
    </p>
  </div>

</div>
      <div>

         </div>

       </div>
      </div>
    </section>
  );
};

export default About;