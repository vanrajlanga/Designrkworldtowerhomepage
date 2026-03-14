import { MapPin, Phone, Mail } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#2B2D42]">Visit Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conveniently located in the heart of Rajkot with excellent connectivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d70.7832!3d22.2897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE3JzIzLjAiTiA3MMKwNDYnNTkuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RK World Tower Location"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-[#2B2D42]">Address</h3>
                  <p className="text-gray-700">
                    RK World Tower, BRTS Stop<br />
                    613, 150 Feet Ring Road<br />
                    Near Shital Park, Sheetal Park<br />
                    Shastri Nagar, Dharam Nagar<br />
                    Rajkot, Gujarat 360006
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-[#2B2D42]">Phone</h3>
                  <p className="text-gray-700">+91 76005 17544</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-[#2B2D42]">Email</h3>
                  <p className="text-gray-700">info@rkworldtower.com</p>
                  <p className="text-gray-700">association@rkworldtower.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}