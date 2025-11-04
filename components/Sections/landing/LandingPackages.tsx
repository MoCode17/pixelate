import React from "react";
import { Check } from "lucide-react";

const LandingPackages = () => {
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
                Perfect for small or new businesses getting started online
              </p>
              <div className="text-4xl font-bold text-gray-900">$997</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>3-page custom website (Home, About, Contact)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Mobile-responsive design</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Premium hosting setup (first year included)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>SSL certificate & security setup</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Contact form & basic lead capture</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Google My Business setup</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Professional business email setup</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>3 months support</span>
              </div>
            </div>

            <button className="w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors">
              Get Started
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
                For businesses ready to attract & convert customers
              </p>
              <div className="text-4xl font-bold text-gray-900">$2,997</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Everything in Essential</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>5-page custom website</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Professional copywriting for all pages</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Advanced SEO optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Google Analytics & conversion tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Email marketing automation setup</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>AI chat booking assistant</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Appointment scheduling integration</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Social media integration</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Lead capture forms & CRM integration</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>3 months priority support</span>
              </div>
            </div>

            <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Go Professional
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-white p-8 rounded-xl shadow-lg border relative opacity-75">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                BOOKED OUT
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">
                For established businesses ready to dominate online
              </p>
              <div className="text-4xl font-bold text-blue-600">$4,997</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Everything in Professional</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Advanced content strategy & keyword research</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Competitor analysis report</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>
                  Google Ads setup & initial campaign ($300 ad credit included)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Conversion rate optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Monthly performance reports (6 months)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Local payment integration (Stripe, Square, etc.)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Website backup & security monitoring (12 months)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Advanced analytics dashboard</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Marketing automation workflows</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>6 months priority support</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1" />
                <span>Quarterly strategy review calls</span>
              </div>
            </div>

            <button className="w-full pointer-events-none bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors">
              Go Premium
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

export default LandingPackages;
