import React from "react";

const LandingValue = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Losing Customers to Better-Looking Competitors
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-200">
                  Before Pixelate
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-red-300">✗</span>
                    <span>Outdated, unprofessional look</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-300">✗</span>
                    <span>Low search visibility</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-300">✗</span>
                    <span>Visitors leave immediately</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-300">✗</span>
                    <span>Price-based competition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-300">✗</span>
                    <span>Manual lead generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-300">✗</span>
                    <span>Losing to smaller competitors</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-green-200">
                  After Pixelate
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-green-300">✓</span>
                    <span>Modern, premium design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-300">✓</span>
                    <span>Google-friendly optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-300">✓</span>
                    <span>Engaging, conversion-focused</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-300">✓</span>
                    <span>Value-based positioning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-300">✓</span>
                    <span>Automated lead capture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-300">✓</span>
                    <span>Competing with industry leaders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl mb-4">
              Your current website (or lack thereof) is costing you customers
              every single day.
            </p>
            <p className="text-lg opacity-90">
              Think of it as hiring a salesperson who works 24/7, never takes a
              day off, and costs less than a month's advertising budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingValue;
