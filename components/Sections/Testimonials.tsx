import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Real Businesses, Real Results
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "Within 2 months of launching our new website, we saw a 250%
              increase in online inquiries. The quality of leads is so much
              better — people are coming to us already convinced we're the right
              choice."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">Sarah Chen</p>
              <p className="text-gray-600 text-sm">
                Marketing Director, Melbourne
              </p>
              <p className="text-blue-600 font-semibold text-sm mt-1">
                250% increase in qualified leads
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "Our old website was embarrassing. The new one positions us as the
              premium option in our market. We've increased our average project
              value by 40% since launch."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">Mark Thompson</p>
              <p className="text-gray-600 text-sm">Business Owner, Sydney</p>
              <p className="text-blue-600 font-semibold text-sm mt-1">
                40% increase in average project value
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "Best investment we've made in years. The website pays for itself
              every month with new business. We're finally competing with the
              big players in our industry."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">Lisa Rodriguez</p>
              <p className="text-gray-600 text-sm">Director, Brisbane</p>
              <p className="text-blue-600 font-semibold text-sm mt-1">
                300% ROI within 6 months
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
