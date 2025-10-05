import React from "react";
import { Zap, Target, TrendingUp } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What If Your Website Worked as Hard as You Do?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-full">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Picture this:
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your phone rings. It's a potential client who found your
                website, browsed your services, read your testimonials, and is
                ready to hire you. They're not shopping around for the cheapest
                quote — they want quality, and your professional website
                convinced them you're the right choice.
              </p>
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-600">
                <p className="text-lg font-semibold text-blue-600 italic">
                  "I've seen your work online. When can we start? Budget isn't
                  the main concern."
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center gap-4 p-6 bg-green-50 rounded-lg">
              <Zap className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  24/7 Lead Generation
                </h4>
                <p className="text-gray-600">
                  Your website works while you sleep
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg">
              <Target className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Quality Client Attraction
                </h4>
                <p className="text-gray-600">
                  Attract customers who value quality over price
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-purple-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Professional Positioning
                </h4>
                <p className="text-gray-600">
                  Compete with industry leaders, not just on price
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 mt-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            This is what happens when you get pixelated.
          </h3>
          <p className="text-lg text-gray-600">
            We don't just build websites. We create digital assets that work
            24/7 to attract, engage, and convert your ideal customers into
            paying clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
