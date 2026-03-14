import { Building2, Users, Shield, Heart } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Building2,
      title: "Prime Location",
      description: "Strategically located on 150 Feet Ring Road with excellent connectivity",
    },
    {
      icon: Users,
      title: "Professional Community",
      description: "Home to diverse businesses and corporate professionals",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Advanced security systems ensuring safe business operations",
    },
    {
      icon: Heart,
      title: "Tenant Focused",
      description: "Dedicated facility management committed to tenant satisfaction",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#2B2D42]">About RK World Tower</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            RK World Tower is a prestigious commercial building offering premium office spaces 
            and world-class facilities for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl mb-2 text-[#2B2D42]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl mb-4 text-[#2B2D42]">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            RK World Tower Building Association is committed to providing a premium commercial 
            environment that fosters business growth and professional excellence. We maintain 
            the highest standards of facility management, security, and tenant services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Located at one of Rajkot's most strategic business locations near BRTS Stop and 150 Feet Ring Road, 
            our tower offers unparalleled accessibility, modern infrastructure, and a professional atmosphere 
            that helps businesses thrive.
          </p>
        </div>
      </div>
    </section>
  );
}