import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import pixelateLite from "@/public/images/PixelateLogoBlue.svg";

const Footer = () => {
  return (
    <footer className="bg-fanta text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="relative -top-4">
              <Image
                src={pixelateLite}
                width={200}
                height={32}
                alt="Pixelate Logo"
                className="object-contain mb-1"
              />
            </div>
            <p className="mb-6">
              Transforming businesses for the digital age with professional
              websites that convert visitors into customers.
            </p>
            <p className="text-sm">100% Australian Owned & Operated</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1300 PIXELATE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@pixelate.com.au</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Response: Under 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-800">
            © 2025 Pixelate Digital. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
