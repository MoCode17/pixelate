import React from "react";
import { Phone, Mail, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Pixelated?
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl mb-6">You have two choices:</p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-red-200">
                  Choice 1:
                </h3>
                <p>
                  Keep your current website (or lack thereof) and continue
                  losing customers to competitors who simply look more
                  professional online.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-green-200">
                  Choice 2:
                </h3>
                <p>
                  Invest in a professional web presence that works 24/7 to
                  attract, engage, and convert your ideal customers.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-2xl font-bold mb-4">
              The question isn't whether you can afford to get pixelated.
            </p>
            <p className="text-xl">It's whether you can afford not to.</p>
          </div>

          <button className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg mb-8">
            Start My Pixelation Today
          </button>

          <p className="text-lg opacity-90 mb-8">
            Free consultation - no obligation
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span>Call: 1300 PIXELATE</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span>hello@pixelate.com.au</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <span>Response Time: Under 2 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
