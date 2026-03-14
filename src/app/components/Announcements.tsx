import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ArrowRight } from "lucide-react";

export function Announcements() {
  const announcements = [
    {
      date: "Mar 10, 2026",
      category: "Maintenance",
      title: "HVAC System Upgrade Complete",
      description: "The upgraded HVAC system is now operational across all floors, providing enhanced climate control and energy efficiency for all office spaces.",
      image: "https://images.unsplash.com/photo-1760904730891-8a63cde68d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwc3lzdGVtJTIwY29tbWVyY2lhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzQ2NTcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      date: "Mar 8, 2026",
      category: "Security",
      title: "Enhanced Access Control System",
      description: "New biometric access control and visitor management system implemented across all entry points for improved building security.",
      image: "https://images.unsplash.com/photo-1697382608786-bcf4c113b86e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9tZXRyaWMlMjBzZWN1cml0eSUyMGFjY2VzcyUyMGNvbnRyb2x8ZW58MXx8fHwxNzczNDY1NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      date: "Mar 5, 2026",
      category: "Facilities",
      title: "New Conference Rooms Available",
      description: "Two state-of-the-art conference rooms with advanced AV equipment are now available for booking on the 10th floor.",
      image: "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzczMzYzODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      date: "Mar 1, 2026",
      category: "Parking",
      title: "Additional Parking Spaces",
      description: "Expanded parking facility with 50 additional covered parking spaces now available for tenant allocation.",
      image: "https://images.unsplash.com/photo-1769698839451-b44d26a6536c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZlcmVkJTIwcGFya2luZyUyMGdhcmFnZSUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzczNDY1NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="announcements" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl mb-2 text-[#2B2D42]">Announcements</h2>
            <p className="text-gray-600">Stay updated with the latest news and updates</p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#2B2D42] px-6 py-3 rounded-lg transition-colors"
          >
            View All
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={announcement.image}
                  alt={announcement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={14} />
                  <span>{announcement.date}</span>
                  <span className="text-yellow-600">• {announcement.category}</span>
                </div>
                <h3 className="text-lg mb-2 text-[#2B2D42] group-hover:text-yellow-600 transition-colors">
                  {announcement.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {announcement.description}
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-[#2B2D42] px-4 py-2 rounded text-sm transition-colors inline-flex items-center gap-2">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}