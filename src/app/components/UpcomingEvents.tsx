import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Clock } from "lucide-react";

const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://127.0.0.1:8000/api"
  : "https://crm.rkwt.in/api";

interface EventData {
  id: number;
  event_name: string;
  organization: string | null;
  where: string;
  description: string;
  start_date_time: string;
  end_date_time: string;
  image_url: string | null;
}

export function UpcomingEvents() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/public/events`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setEvents(json.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-2 text-[#2B2D42]">Upcoming Events</h2>
          <p className="text-gray-600">Loading events...</p>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return null;
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return {
      date: d.getDate().toString(),
      month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    };
  };

  const formatTime = (startStr: string, endStr: string) => {
    const start = new Date(startStr);
    const end = new Date(endStr);
    const fmt = (d: Date) =>
      d.toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
    return `${fmt(start)} - ${fmt(end)}`;
  };

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-2 text-[#2B2D42]">Upcoming Events</h2>
          <p className="text-gray-600">Join us for exciting community events and activities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const { date, month } = formatDate(event.start_date_time);
            return (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  {event.image_url ? (
                    <img
                      src={event.image_url}
                      alt={event.event_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#2B2D42] to-[#4A4E69] flex items-center justify-center">
                      <Calendar size={64} className="text-yellow-400 opacity-30" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-yellow-400 text-[#2B2D42] text-center px-4 py-3 rounded-lg shadow-lg">
                    <div className="text-3xl leading-none">{date}</div>
                    <div className="text-sm uppercase tracking-wide">{month}</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-4 text-[#2B2D42]">{event.event_name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} className="text-yellow-600" />
                      <span>{formatTime(event.start_date_time, event.end_date_time)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} className="text-yellow-600" />
                      <span>{event.where}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
