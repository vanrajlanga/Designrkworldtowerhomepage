import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function PresidentMessage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-yellow-400 rounded-lg -z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBhcnRucnMlMjBhbmQlMjB0ZW5hbnRzUyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzQxMDM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="President of RK World Tower Association"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="order-1 lg:order-2">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Quote className="text-[#2B2D42]" size={32} />
            </div>
            
            <h2 className="text-4xl mb-4 text-[#2B2D42]">A Message From the President</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dear Tenants and Business Partners,
              </p>
              <p>
                It is my privilege to welcome you to RK World Tower Building Association. 
                As President, I am committed to maintaining this building as Rajkot's premier 
                commercial destination, providing an environment where businesses can thrive and grow.
              </p>
              <p>
                Our association works tirelessly to ensure state-of-the-art facilities, seamless 
                operations, and exceptional services. From advanced security systems to modern 
                amenities, we strive to create the ideal workspace for your success.
              </p>
              <p>
                We believe in fostering a professional community where businesses collaborate, 
                innovate, and achieve their goals. Your feedback and active participation help 
                us continuously improve and deliver excellence.
              </p>
              <p>
                Thank you for choosing RK World Tower as your business address.
              </p>
              
              <div className="pt-6 border-t border-gray-300 mt-6">
                <p className="text-[#2B2D42] text-lg">Best regards,</p>
                <p className="text-[#2B2D42] text-2xl mt-2">Rajesh Kumar</p>
                <p className="text-gray-600">President, RK World Tower Association</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}