import { Building2, Users, Home, Calendar } from "lucide-react";

export function FastFacts() {
  const facts = [
    {
      icon: Building2,
      number: "100+",
      label: "Office Spaces",
      description: "Premium commercial units",
    },
    {
      icon: Users,
      number: "500+",
      label: "Professionals",
      description: "Working daily",
    },
    {
      icon: Home,
      number: "12",
      label: "Floors",
      description: "Modern office spaces",
    },
    {
      icon: Calendar,
      number: "2018",
      label: "Established",
      description: "Years of excellence",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-2 text-[#2B2D42]">Fast Facts</h2>
          <p className="text-gray-600">Key statistics about RK World Tower</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-yellow-400 transition-colors group"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors">
                <fact.icon className="text-[#2B2D42]" size={28} />
              </div>
              <div className="text-5xl mb-2 text-[#2B2D42]">{fact.number}</div>
              <div className="text-xl mb-1 text-[#2B2D42]">{fact.label}</div>
              <p className="text-gray-600 text-sm">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}