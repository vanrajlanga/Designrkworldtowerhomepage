import { Home, Users, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewHero() {
  const quickLinks = [
    {
      icon: Home,
      title: "Tenant Portal",
      description: "Access your account and manage maintenance payments online",
      link: "#",
    },
    {
      icon: Users,
      title: "Business Directory",
      description: "Connect with other businesses and professional services",
      link: "#",
    },
    {
      icon: Calendar,
      title: "Book Facilities",
      description: "Reserve conference rooms and common areas for meetings",
      link: "#",
    },
  ];

  return (
    <section id="home" className="relative">
      {/* Hero Image Section */}
      <div className="relative h-[500px] md:h-[600px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760246964044-1384f71665b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MzQ3MDQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="RK World Tower Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B2D42]/90 to-[#2B2D42]/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
              Welcome to RK World Tower
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Building a vibrant community in the heart of Rajkot
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links Cards */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 transition-colors">
                  <item.icon className="text-[#2B2D42]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-[#2B2D42]">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}