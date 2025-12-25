import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import matrix from "@/public/matrix.jpg";

const LandingFinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Pixelated?
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl mb-8">You have two choices:</p>

            <div className="flex justify-center mb-8">
              <Image
                src={matrix}
                alt="RED pill or BLUE pill. Your choice!"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* RED Pill */}
              <div className="relative bg-gradient-to-br from-red-500/20 to-red-600/20 p-6 rounded-xl border-2 border-red-400/30 backdrop-blur-sm hover:border-red-400/60 transition-all">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔴 RED PILL
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-xl mb-4 text-red-200">
                    Stay in the Matrix
                  </h3>
                  <p className="text-gray-100">
                    Keep your current website (or lack thereof) and continue
                    losing customers to competitors who simply look more
                    professional online. Stay comfortable, stay the same.
                  </p>
                </div>
              </div>

              {/* BLUE Pill */}
              <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-400/20 p-6 rounded-xl border-2 border-cyan-400/50 backdrop-blur-sm hover:border-cyan-400/80 transition-all shadow-lg">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔵 PIXEL PILL
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-xl mb-4 text-cyan-200">
                    Enter the Digital Future
                  </h3>
                  <p className="text-gray-100">
                    Invest in a professional web presence that works 24/7 to
                    attract, engage, and convert your ideal customers. Wake up
                    to reality.
                  </p>
                </div>
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
            Free consultation - no obligation - no red tape
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span>Call: +61412169089</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span>hello@pixelatelabs.com.au</span>
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

export default LandingFinalCTA;
