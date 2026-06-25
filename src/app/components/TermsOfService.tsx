import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { FileText } from "lucide-react";

export function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <NewHeader />

      {/* Hero Banner */}
      <div className="bg-[#2B2D42] text-white pt-28 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/15 mb-4">
            <FileText className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: June 26, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                By accessing and using the RK World Tower Building Association website and services ("Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">2. Description of Services</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                RK World Tower Building Association provides a platform for managing building operations, amenities, events, and communication between the association, owners, tenants, and other stakeholders. Our Services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>Building management and communication portal</li>
                <li>Amenity booking and facility management</li>
                <li>Event management and announcements</li>
                <li>Document management and sharing</li>
                <li>Complaint and helpdesk management</li>
                <li>Digital ID card services</li>
                <li>Canteen and valet management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">3. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To access certain features of our Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify the association immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">4. User Conduct</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                When using our Services, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>Violate any applicable laws, regulations, or building association rules</li>
                <li>Impersonate any person or entity</li>
                <li>Upload or transmit any harmful, offensive, or inappropriate content</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Use the Services for any commercial purpose without prior consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">5. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                All content, trademarks, logos, and intellectual property displayed on the Services are the property of RK World Tower Building Association or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">6. Facility and Amenity Bookings</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Bookings made through our platform are subject to availability and the association's rules and regulations. The association reserves the right to cancel or modify bookings as necessary. Booking fees, if applicable, are non-refundable unless otherwise specified by the association.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                The Services are provided "as is" without warranties of any kind. RK World Tower Building Association shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of or inability to use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">8. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the Services after any changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">9. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">10. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-3 bg-gray-50 rounded-xl p-5 text-sm text-gray-600 space-y-1">
                <p className="font-semibold text-[#2B2D42]">RK World Tower Building Association</p>
                <p>613, 150 Feet Ring Rd, Rajkot, Gujarat 360006</p>
                <p>Email: info@rkworldtower.com</p>
                <p>Phone: +91 76005 17544</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <NewFooter />
    </div>
  );
}
