import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export function UpcomingEvents() {
  const events = [
    {
      date: "20",
      month: "MAR",
      title: "Business Networking Meet",
      time: "6:00 PM - 8:00 PM",
      location: "Conference Hall - 10th Floor",
      attendees: "All Tenants Welcome",
      description: "Join fellow business professionals for an evening of networking and collaboration. Connect with other companies in the building.",
      image: "https://images.unsplash.com/photo-1763731374100-24ee3f91a896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZyUyMHBlb3BsZXxlbnwxfHx8fDE3NzMzNzkyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      date: "25",
      month: "MAR",
      title: "Digital Marketing Workshop",
      time: "2:00 PM - 5:00 PM",
      location: "Seminar Room",
      attendees: "Registration Required",
      description: "Expert-led workshop on latest digital marketing trends and strategies. Enhance your business's online presence.",
      image: "https://images.unsplash.com/photo-1760259906119-8b914731e996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbW11bml0eSUyMGdhcmRlbiUyMHJvb2Z0b3B8ZW58MXx8fHwxNzczNDYzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      date: "30",
      month: "MAR",
      title: "Fire Safety & Compliance Training",
      time: "11:00 AM - 1:00 PM",
      location: "Ground Floor Lobby",
      attendees: "Mandatory for All",
      description: "Annual fire safety training and emergency evacuation procedures. Ensuring workplace safety and compliance.",
      image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBhbWVuaXRpZXMlMjBneW18ZW58MXx8fHwxNzczNDYzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-2 text-[#2B2D42]">Upcoming Events</h2>
          <p className="text-gray-600">Join us for exciting community events and activities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-[#2B2D42] text-center px-4 py-3 rounded-lg shadow-lg">
                  <div className="text-3xl leading-none">{event.date}</div>
                  <div className="text-sm uppercase tracking-wide">{event.month}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-4 text-[#2B2D42]">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-yellow-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-yellow-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} className="text-yellow-600" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#2B2D42] px-6 py-3 rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}