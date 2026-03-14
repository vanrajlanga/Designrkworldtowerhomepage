import { Logo } from "./Logo";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function NewFooter() {
  return (
    <footer className="bg-[#1a1b2e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <Logo className="mb-4 [&_svg_rect]:fill-white [&_svg_path]:fill-yellow-400 [&_svg_circle]:fill-yellow-400 [&_svg_text]:fill-[#1a1b2e] [&>div>span:first-of-type]:text-white [&>div>span:last-of-type]:text-gray-400" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Building a better business community together. Your trusted commercial building 
              association committed to excellence and tenant satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-yellow-400" />
                <span>613, 150 Feet Ring Rd, Rajkot, Gujarat 360006</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="flex-shrink-0 text-yellow-400" />
                <span>+91 76005 17544</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} className="flex-shrink-0 text-yellow-400" />
                <span>info@rkworldtower.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg mb-4 text-white">Connect With Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow us on social media for updates and news
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-[#2B2D42] hover:bg-yellow-400 hover:text-[#1a1b2e] w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2B2D42] hover:bg-yellow-400 hover:text-[#1a1b2e] w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2B2D42] hover:bg-yellow-400 hover:text-[#1a1b2e] w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2B2D42] hover:bg-yellow-400 hover:text-[#1a1b2e] w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} RK World Tower Building Association. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}