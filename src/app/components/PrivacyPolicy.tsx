import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { Shield } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <NewHeader />

      {/* Hero Banner */}
      <div className="bg-[#2B2D42] text-white pt-28 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/15 mb-4">
            <Shield className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: June 26, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                RK World Tower Building Association ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                We may collect the following types of information:
              </p>
              <h3 className="text-base font-semibold text-[#2B2D42] mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
                <li>Name, email address, phone number, and contact details</li>
                <li>Unit/shop number and ownership/tenancy details</li>
                <li>Government-issued ID information for verification purposes</li>
                <li>Digital signature and photographs</li>
                <li>Vehicle registration details</li>
              </ul>
              <h3 className="text-base font-semibold text-[#2B2D42] mb-2">Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Facility booking history</li>
                <li>Complaint and helpdesk interactions</li>
                <li>Canteen order history</li>
                <li>Device information when using our mobile application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>Managing building operations and tenant/owner records</li>
                <li>Processing facility bookings and amenity reservations</li>
                <li>Sending announcements, notices, and event updates</li>
                <li>Handling complaints and helpdesk requests</li>
                <li>Generating digital ID cards for authorized personnel</li>
                <li>Managing canteen orders and valet services</li>
                <li>Improving our services and user experience</li>
                <li>Ensuring building security and access control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>Building management and authorized association members for operational purposes</li>
                <li>Service providers who assist in operating our platform</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Emergency services when necessary for safety</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                We retain your personal information for as long as your account is active or as needed to provide services. We may also retain data as required by applicable laws and regulations, or for legitimate business purposes such as maintaining records of past residents/tenants.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">7. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your data, subject to legal requirements</li>
                <li><strong>Objection:</strong> Object to processing of your data in certain circumstances</li>
                <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">8. Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our website may use cookies and similar technologies to enhance your browsing experience. These help us understand how you interact with our services and improve functionality. You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">9. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our Services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">10. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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
