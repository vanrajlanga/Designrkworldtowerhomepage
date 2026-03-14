import { Mail } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-16 bg-[#2B2D42]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="text-[#2B2D42]" size={28} />
          </div>
          
          <h2 className="text-4xl mb-4 text-white">
            Stay Connected With Your Business Community
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to receive the latest updates, business events, and important announcements from RK World Tower
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#2B2D42] font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}