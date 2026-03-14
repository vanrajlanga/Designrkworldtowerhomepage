import { Logo } from "./Logo";
import { Menu, X, Search, Phone } from "lucide-react";
import { useState } from "react";

export function NewHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-[#2B2D42] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b border-gray-700">
          <div className="flex items-center gap-8 flex-1 justify-center">
            <Logo className="[&_svg_rect]:fill-white [&_svg_path]:fill-yellow-400 [&_svg_circle]:fill-yellow-400 [&_svg_text]:fill-[#2B2D42] [&>div>span:first-of-type]:text-white [&>div>span:last-of-type]:text-gray-300" />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors text-sm uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button className="hover:text-yellow-400 transition-colors">
              <Search size={20} />
            </button>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} />
              <span>+91 76005 17544</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}