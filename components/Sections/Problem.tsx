import React from "react";

const Problem = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Is Your Website Costing You Customers?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Here's what's happening to your business right now:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-red-100">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Potential customers visit your site
                </h3>
                <p className="text-gray-600">
                  and immediately click back to your competitors
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-red-100">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  You're invisible on Google
                </h3>
                <p className="text-gray-600">
                  while others dominate local search
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-red-100">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Your website looks unprofessional
                </h3>
                <p className="text-gray-600">
                  compared to businesses half your size
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-red-100">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  You're losing thousands in revenue
                </h3>
                <p className="text-gray-600">
                  to competitors with better online presence
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
              <div className="text-6xl font-bold text-blue-600 mb-4">94%</div>
              <p className="text-lg text-gray-700 font-semibold mb-2">
                of first impressions are design-related
              </p>
              <p className="text-gray-600">
                If your website doesn't impress in 3 seconds, your visitors are
                gone forever.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 font-semibold">
            Your website should be your best salesperson. Instead, it might be
            your worst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
