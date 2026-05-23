import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ClipboardList, Globe2 } from 'lucide-react';

interface ContactProps {
  selectedProduct?: string;
  setSelectedProduct?: (productName: string) => void;
}

const Contact: React.FC<ContactProps> = ({ selectedProduct, setSelectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: 'Premium Green Banana Powder',
    quantity: '',
    unit: 'Metric Tons',
    destinationPort: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({ ...prev, product: selectedProduct }));
    }
  }, [selectedProduct]);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    }
    
    if (!formData.quantity || parseFloat(formData.quantity) <= 0) {
      tempErrors.quantity = 'Please specify a positive target quantity';
    }

    if (!formData.destinationPort.trim()) {
      tempErrors.destinationPort = 'Destination port or country is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
    if (name === 'product' && setSelectedProduct) {
      setSelectedProduct(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: 'Premium Green Banana Powder',
      quantity: '',
      unit: 'Metric Tons',
      destinationPort: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4">
        <div className="w-[600px] h-[600px] bg-primary-100/35 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 max-w-xl">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block flex items-center">
              <Globe2 className="w-4 h-4 mr-2" /> Global Logistics Desk
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Request Your Bulk Quotation
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Partner with Bulk In Global. Fill out our official export quotation form to receive a detailed cost sheet, including packing choices, shipping logistics (FOB / CIF), and analytical reports.
            </p>

            <div className="space-y-8">
              {/* Card 1: Email */}
              <a 
                href="mailto:bulkinglobal@gmail.com"
                className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:shadow-md hover:bg-primary-50/20 transition-all duration-300 group"
              >
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl mr-5 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-950 mb-1 text-base">Direct Business Email</h4>
                  <p className="text-gray-600 text-sm mb-0.5">bulkinglobal@gmail.com</p>
                  <span className="text-xs text-primary-600 font-semibold tracking-wider uppercase">Inquiries answered in 12hrs</span>
                </div>
              </a>

              {/* Card 2: Phone */}
              <a 
                href="tel:+918888006532"
                className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:shadow-md hover:bg-primary-50/20 transition-all duration-300 group"
              >
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl mr-5 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-950 mb-1 text-base">Call / WhatsApp Desk</h4>
                  <p className="text-gray-600 text-sm mb-0.5">+91 8888006532</p>
                  <span className="text-xs text-primary-600 font-semibold tracking-wider uppercase">Direct Export Manager Desk</span>
                </div>
              </a>

              {/* Card 3: Address */}
              <div className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl mr-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-950 mb-1 text-base">Registered Operations HQ</h4>
                  <p className="text-gray-600 text-sm">India’s Premier Agro-Export Zones, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-md relative">
            
            {isSubmitted ? (
              /* Success Display */
              <div className="text-center py-10 animate-scale-up">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-950 mb-3">Quote Request Logged!</h3>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-8 text-sm">
                  Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your bulk inquiry for{' '}
                  <strong className="text-gray-900">{formData.quantity} {formData.unit}</strong> of{' '}
                  <strong className="text-gray-900">{formData.product}</strong> bound for{' '}
                  <strong className="text-gray-900">{formData.destinationPort}</strong> has been registered successfully.
                </p>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 max-w-sm mx-auto mb-8 text-left text-xs space-y-2.5 shadow-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2 mb-2 font-bold text-gray-800 text-sm">
                    <span>Inquiry Slip</span>
                    <span className="text-primary-600 font-mono">#{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Client:</span> <span className="font-medium text-gray-700">{formData.company || 'Private'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span> <span className="font-medium text-gray-700">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Destination:</span> <span className="font-medium text-gray-700">{formData.destinationPort}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume:</span> <span className="font-semibold text-primary-700">{formData.quantity} {formData.unit}</span>
                  </div>
                </div>
                <button 
                  onClick={resetForm}
                  className="bg-gray-900 text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-primary-600 transition-colors active:scale-95 shadow-md"
                >
                  Request Another Quote
                </button>
              </div>
            ) : (
              /* Quotation Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center space-x-3 border-b border-gray-200 pb-4 mb-6">
                  <ClipboardList className="text-primary-600 w-6 h-6" />
                  <h3 className="text-xl font-bold text-gray-950">Bulk Quotation Form</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-600'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Global Foods Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Business Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. procurement@foodbrands.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-600'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 555-0199"
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-600'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Product select */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Product of Interest *</label>
                    <select 
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-600 transition-all font-medium text-gray-800"
                    >
                      <option value="Premium Green Banana Powder">Premium Green Banana Powder</option>
                      <option value="Garlic Powder">Garlic Powder</option>
                      <option value="Red Onion Granules">Red Onion Granules</option>
                      <option value="Curry Leaves Powder">Curry Leaves Powder</option>
                      <option value="Ginger Dehydrated Powder">Ginger Dehydrated Powder</option>
                      <option value="Tamarind Powder">Tamarind Powder</option>
                    </select>
                  </div>

                  {/* Destination Port */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Destination Port *</label>
                    <input 
                      type="text" 
                      name="destinationPort"
                      value={formData.destinationPort}
                      onChange={handleInputChange}
                      placeholder="e.g. Port of Rotterdam"
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${errors.destinationPort ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-600'}`}
                    />
                    {errors.destinationPort && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.destinationPort}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Quantity input */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Target Quantity *</label>
                    <input 
                      type="number" 
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="Specify total quantity"
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${errors.quantity ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-600'}`}
                    />
                    {errors.quantity && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.quantity}</p>}
                  </div>

                  {/* Unit select */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Unit *</label>
                    <select 
                      name="unit"
                      value={formData.unit}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-600 transition-all font-medium text-gray-800"
                    >
                      <option value="Metric Tons">Metric Tons</option>
                      <option value="Kilograms">Kilograms</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Custom Packaging or Invoicing Requirements</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe shipping terms (FOB/CIF), customized bulk bagging requirements, organic credentials needed..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-600 transition-all text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex justify-center items-center bg-primary-600 border border-transparent text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 hover:shadow-lg transition-all duration-200 active:scale-95 disabled:bg-primary-400 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2"></span>
                      Registering Bulk Inquiry...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Inquiry & Request Quote
                    </span>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
