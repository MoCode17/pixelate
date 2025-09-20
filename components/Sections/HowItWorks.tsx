import React from "react";
import { Check } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Pixelation Process: From Invisible to Irresistible
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Discovery & Strategy
            </h3>
            <p className="text-gray-600 mb-2 font-semibold">(Week 1)</p>
            <p className="text-gray-600">
              We dive deep into your business, target audience, and competitors.
              Every website is custom-designed for your specific market and
              goals.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Design & Develop
            </h3>
            <p className="text-gray-600 mb-2 font-semibold">(Weeks 2-3)</p>
            <p className="text-gray-600">
              Professional, mobile-first design that showcases your expertise.
              Clear messaging, compelling visuals, and conversion-focused
              layouts.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Optimize & Launch
            </h3>
            <p className="text-gray-600 mb-2 font-semibold">(Week 4)</p>
            <p className="text-gray-600">
              SEO optimization, speed testing, and final polish. When we launch,
              your website works flawlessly across all devices.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Measure & Improve
            </h3>
            <p className="text-gray-600 mb-2 font-semibold">(Ongoing)</p>
            <p className="text-gray-600">
              Track performance, analyze results, and continuously optimize for
              better conversion rates and higher search rankings.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You Get:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  Custom-designed website
                </p>
                <p className="text-gray-600 text-sm">
                  that reflects your brand
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  Mobile-responsive design
                </p>
                <p className="text-gray-600 text-sm">
                  that works on any device
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">SEO optimization</p>
                <p className="text-gray-600 text-sm">
                  to improve search rankings
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  Lead capture systems
                </p>
                <p className="text-gray-600 text-sm">to convert visitors</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Analytics setup</p>
                <p className="text-gray-600 text-sm">to track your success</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  30 days unlimited revisions
                </p>
                <p className="text-gray-600 text-sm">until it's perfect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
