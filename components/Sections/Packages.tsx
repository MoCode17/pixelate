import React from "react";
import { Check } from "lucide-react";

const Packages = () => {
  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your Pixelation Package
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Essential Package */}
          <div className="bg-white p-8 rounded-xl shadow-lg border relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Essential
              </h3>
              <p className="text-gray-600 mb-4">
                Perfect for small businesses ready to go professional
              </p>
              <div className="text-4xl font-bold text-gray-900">$2,997</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Enhanced SEO optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Social media integration</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Blog/news system</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>3 months support</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Go Professional
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-white p-8 rounded-xl shadow-lg border relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">
                For ambitious businesses building market leadership
              </p>
              <div className="text-4xl font-bold text-gray-900">$7,997</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Everything in Professional</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Advanced analytics & tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Conversion rate optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Competitor analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Monthly performance reports</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Priority support for 6 months</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Google Ads setup included</span>
              </div>
            </div>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors">
              Go Premium
            </button>
          </div>

          {/* Professional Package */}
          <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                MOST POPULAR
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Professional
              </h3>
              <p className="text-gray-600 mb-4">
                For established businesses ready to dominate online
              </p>
              <div className="text-4xl font-bold text-blue-600">$4,997</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Everything in Essential</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Advanced content strategy</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Professional copywriting</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>5-page custom website</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Mobile-responsive design</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Basic SEO optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Contact forms & lead capture</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Google Analytics setup</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>1 month support</span>
              </div>
            </div>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
            <h3 className="font-bold text-gray-900 mb-4">Payment Options:</h3>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Pay in full and save $500</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>3-month payment plan available</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>100% satisfaction guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
