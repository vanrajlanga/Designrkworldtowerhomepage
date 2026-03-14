import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Presentation, 
  Car, 
  Wifi, 
  Droplets, 
  Coffee, 
  Video,
  Zap,
  Building2,
  Shield,
  CreditCard,
  Users,
  Compass
} from "lucide-react";

export function Amenities() {
  const mainAmenities = [
    {
      icon: Presentation,
      title: "Conference Rooms",
      description: "Fully equipped meeting rooms with modern AV facilities",
      image: "https://images.unsplash.com/photo-1771147372627-7fffe86cf00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzczNDY1MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Coffee,
      title: "Cafeteria / Food Court",
      description: "Modern cafeteria with diverse dining options",
      image: "https://images.unsplash.com/photo-1763867641420-90758cb02b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwYXJlYSUyMG1vZGVybnxlbnwxfHx8fDE3NzM0NjUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Car,
      title: "Visitor Parking",
      description: "Multi-level covered parking with EV charging stations",
      image: "https://images.unsplash.com/photo-1679055324415-695962596868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcmdyb3VuZCUyMHBhcmtpbmclMjBnYXJhZ2UlMjBjYXJzfGVufDF8fHx8MTc3MzQ2NTAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Shield,
      title: "Security Guard",
      description: "Professional 24/7 security personnel at all entry points",
      image: "https://images.unsplash.com/photo-1770529933902-d2f7851be31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwYnVpbGRpbmclMjBlbnRyYW5jZXxlbnwxfHx8fDE3NzM0NjUwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Zap,
      title: "Power Back-up",
      description: "100% DG backup ensuring uninterrupted operations",
      image: "https://images.unsplash.com/photo-1759692071712-adc78a8516c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhY2t1cCUyMGdlbmVyYXRvciUyMGVsZWN0cmljYWx8ZW58MXx8fHwxNzczNDY1MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Fiber optic connectivity throughout the building",
      image: "https://images.unsplash.com/photo-1606778303077-3780ea8d5420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc3BlZWQlMjBpbnRlcm5ldCUyMGZpYmVyJTIwb3B0aWN8ZW58MXx8fHwxNzczNDY1MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const buildingAmenities = [
    { icon: Zap, title: "Power Back-up", description: "100% DG backup power supply" },
    { icon: Building2, title: "DG Availability", description: "Dedicated diesel generators" },
    { icon: Coffee, title: "Cafeteria / Food Court", description: "Multiple dining options" },
    { icon: Car, title: "Visitor Parking", description: "Ample parking spaces" },
    { icon: Shield, title: "Security Guard", description: "24/7 trained security personnel" },
    { icon: Video, title: "CCTV Surveillance", description: "Complete building coverage" },
    { icon: Users, title: "Maintenance Staff", description: "Dedicated maintenance team" },
    { icon: CreditCard, title: "ATM", description: "On-site banking facility" },
    { icon: Droplets, title: "Water Storage", description: "Adequate water storage tanks" },
    { icon: Compass, title: "Vaastu Compliant", description: "Built as per Vaastu principles" },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#2B2D42]">World-Class Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Premium facilities designed to support your business operations and employee comfort
          </p>
        </div>

        {/* Main 6 Amenities with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainAmenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="h-56 overflow-hidden">
                <ImageWithFallback
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <amenity.icon className="text-yellow-600" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-[#2B2D42]">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Building Amenities Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl mb-8 text-[#2B2D42] text-center">Building Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {buildingAmenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="text-yellow-600" size={20} />
                </div>
                <h4 className="text-sm mb-1 text-[#2B2D42]">{amenity.title}</h4>
                <p className="text-gray-600 text-xs">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
