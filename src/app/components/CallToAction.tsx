import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FileText, CreditCard, Calendar, Monitor } from "lucide-react";

export function CallToAction() {
  const actions = [
    {
      title: "Lodge a Complaint",
      description: "Submit maintenance or service requests online",
      image: "https://images.unsplash.com/photo-1626207887298-da2fc1f50e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGNvbXBsYWludCUyMGZvcm0lMjBzZXJ2aWNlfGVufDF8fHx8MTc3MzQ2OTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: FileText,
      buttonText: "File Complaint",
      link: "#contact",
    },
    {
      title: "Request NOC / Pay Bills",
      description: "Apply for NOC or pay maintenance bills securely",
      image: "https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwYmlsbCUyMGludm9pY2UlMjBkb2N1bWVudHxlbnwxfHx8fDE3NzM0Njk0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: CreditCard,
      buttonText: "Request / Pay",
      link: "#contact",
    },
    {
      title: "Book Event Hall",
      description: "Reserve our event hall for your corporate gatherings",
      image: "https://images.unsplash.com/photo-1768508951405-10e83c4a2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGhhbGwlMjBiYW5xdWV0JTIwYm9va2luZ3xlbnwxfHx8fDE3NzM0Njk0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Calendar,
      buttonText: "Book Now",
      link: "#contact",
    },
    {
      title: "Book Digital Ad Board",
      description: "Advertise your business on our digital display boards",
      image: "https://images.unsplash.com/photo-1763671727638-5bc55bb9c980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmlsbGJvYXJkJTIwYWR2ZXJ0aXNpbmclMjBkaXNwbGF5fGVufDF8fHx8MTc3MzQ2OTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Monitor,
      buttonText: "Book Ad Space",
      link: "#contact",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-[#2B2D42]">Quick Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access essential building services with just a click
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback
                    src={action.image}
                    alt={action.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D42]/80 to-transparent flex items-end p-4">
                    <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                      <Icon className="text-[#2B2D42]" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-[#2B2D42]">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {action.description}
                  </p>
                  <a
                    href={action.link}
                    className="inline-flex items-center justify-center w-full bg-yellow-400 hover:bg-yellow-500 text-[#2B2D42] font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    {action.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
