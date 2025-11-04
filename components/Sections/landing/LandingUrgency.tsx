import React from "react";
import { Clock, TrendingUp, Users, Shield } from "lucide-react";

const LandingUrgency = () => {
  return (
    <>
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Every Day You Wait, Your Competitors Pull Further Ahead
            </h2>
            <p className="text-xl text-gray-600">
              Right now, while you're reading this:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-gray-700">
                A potential customer is choosing your competitor because they
                look more professional online
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-gray-700">
                Your biggest competitor is capturing leads through their
                optimized website
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-gray-700">
                Another business in your industry just invested in professional
                web presence
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Don't let another month slip by losing customers to better
              websites.
            </p>
            <p className="text-lg text-gray-600">
              The businesses investing in professional web presence today will
              be the market leaders tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our "Love It or Leave It" Guarantee
            </h2>
            <p className="text-xl text-gray-600">
              We're so confident in the Pixelation Process, we guarantee your
              satisfaction:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                30-Day Perfect Website Guarantee
              </h3>
              <p className="text-gray-600">
                Love your new site or we'll rebuild it free
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                90-Day Results Guarantee
              </h3>
              <p className="text-gray-600">
                See improved performance or get your money back
              </p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <Users className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                12-Month Technical Support
              </h3>
              <p className="text-gray-600">
                We've got your back for a full year
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-900 mb-2">
              Your success is our reputation. We don't get paid unless you're
              thrilled with the results.
            </p>
            <p className="text-lg text-gray-600 italic">
              That's how confident we are that pixelation works.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingUrgency;
