import { Logo } from "./Logo";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <div className="mb-4">
              <Logo className="[&_svg]:fill-white [&_span]:text-white" />
            </div>
            <p className="text-blue-200 text-sm">
              Building a better community together. Your trusted residential association 
              committed to excellence and resident satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-blue-200 hover:text-white transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-blue-200 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="text-blue-200 hover:text-white transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg mb-4">Connect With Us</h3>
            <p className="text-blue-200 text-sm mb-4">
              Stay updated with the latest news and events from RK World Tower.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} RK World Tower Building Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}