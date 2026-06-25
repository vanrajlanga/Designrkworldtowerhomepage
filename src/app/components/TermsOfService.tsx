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
                By accessing and using the RK World Tower Building Association website and services ("Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, please do not use our Services. These Terms constitute a legally binding agreement between you and RK World Tower Building Association.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you also consent to the practices described in the Privacy Policy. We recommend that you read both documents carefully before using our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">2. Definitions</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                For the purposes of these Terms, the following definitions apply:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li><strong>"Association"</strong> refers to RK World Tower Building Association, its management committee, and authorized representatives.</li>
                <li><strong>"User"</strong> refers to any individual who accesses or uses the Services, including owners, tenants, employees, guards, and visitors.</li>
                <li><strong>"Platform"</strong> refers to the website (rkwt.in), mobile application, and any related digital services operated by the Association.</li>
                <li><strong>"Content"</strong> refers to all text, images, documents, data, and other materials available through the Services.</li>
                <li><strong>"Member"</strong> refers to a registered owner or tenant of a unit/shop within RK World Tower.</li>
                <li><strong>"Services"</strong> refers to all features, tools, and functionalities provided through the Platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">3. Description of Services</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                RK World Tower Building Association provides a comprehensive digital platform for managing building operations, amenities, events, and communication between the association, owners, tenants, and other stakeholders. Our Services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>Building management and communication portal for owners and tenants</li>
                <li>Amenity booking and facility management with real-time availability</li>
                <li>Event management, announcements, and meeting scheduling</li>
                <li>Document management, sharing, and secure storage</li>
                <li>Complaint registration and helpdesk management system</li>
                <li>Digital ID card generation and verification services</li>
                <li>Canteen ordering and menu management</li>
                <li>Valet parking management services</li>
                <li>Voting and polling system for association decisions</li>
                <li>Maintenance request tracking and management</li>
                <li>Notice board and circular distribution</li>
                <li>Visitor management and gate pass system</li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                The Association reserves the right to modify, suspend, or discontinue any part of the Services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">4. User Registration and Accounts</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To access certain features of our Services, you may be required to create an account. When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-sm">
                <li>Provide truthful and accurate registration information</li>
                <li>Maintain and promptly update your account information to keep it accurate</li>
                <li>Keep your password secure and confidential</li>
                <li>Notify the Association immediately of any unauthorized use of your account</li>
                <li>Not share your account credentials with any other person</li>
                <li>Not create multiple accounts for the same user</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                The Association reserves the right to suspend or terminate your account at any time if we suspect any unauthorized use, violation of these Terms, or if the information provided is found to be inaccurate or misleading.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">5. User Roles and Access Levels</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our platform supports different user roles, each with specific access levels and permissions. These roles include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li><strong>Admin:</strong> Full access to all management features and settings</li>
                <li><strong>Manager:</strong> Access to operational management and reporting tools</li>
                <li><strong>Owner:</strong> Access to unit-specific features, documents, bookings, and voting</li>
                <li><strong>Tenant:</strong> Access to basic services, bookings, and complaint registration</li>
                <li><strong>Guard:</strong> Access to visitor management and gate pass verification</li>
                <li><strong>Canteen Staff:</strong> Access to canteen order management</li>
                <li><strong>Valet Staff:</strong> Access to parking management features</li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                Your role is assigned by the Association's administration. Attempting to access features beyond your assigned role is strictly prohibited and may result in account suspension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">6. User Conduct and Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                When using our Services, you agree to conduct yourself in a responsible and lawful manner. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>Violate any applicable local, state, national, or international laws, regulations, or building association rules and bylaws</li>
                <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity</li>
                <li>Upload, post, or transmit any harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content</li>
                <li>Interfere with or disrupt the Services, servers, or networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to any part of the Services, other accounts, computer systems, or networks</li>
                <li>Use the Services for any unauthorized commercial purpose or for the benefit of any third party</li>
                <li>Collect or store personal data about other users without their express consent</li>
                <li>Upload or transmit viruses, malware, or any other malicious code</li>
                <li>Use automated scripts, bots, or scrapers to access the Services</li>
                <li>Modify, adapt, translate, reverse engineer, decompile, or disassemble any portion of the Services</li>
                <li>Remove any copyright, trademark, or other proprietary notices from the Services</li>
                <li>Use the platform to send spam, unsolicited messages, or promotional materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">7. Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of RK World Tower Building Association or its content suppliers and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal, non-commercial use in connection with your association membership. This license does not include the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-sm">
                <li>Modify or copy the materials except for personal use</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or mirror the materials on any other server</li>
                <li>Reproduce, duplicate, sell, resell, or exploit any portion of the Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">8. Facility and Amenity Bookings</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our platform allows members to book facilities and amenities within the building. By using the booking feature, you agree to the following terms:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>All bookings are subject to availability and the Association's rules and regulations</li>
                <li>The Association reserves the right to cancel, modify, or reschedule bookings as necessary for maintenance, emergencies, or other operational reasons</li>
                <li>Booking fees, if applicable, must be paid at the time of booking and are non-refundable unless otherwise specified</li>
                <li>Users must adhere to the designated time slots and duration limits for their bookings</li>
                <li>Cooldown periods between bookings may apply as set by the administration</li>
                <li>Damage to facilities during your booking period may result in additional charges</li>
                <li>The Association is not liable for any injuries or losses that occur during the use of booked facilities</li>
                <li>Repeated no-shows or late cancellations may result in temporary booking restrictions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">9. Canteen Services</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                The canteen ordering feature allows users to browse menus, place orders, and manage their food preferences. By using the canteen services:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>All orders are subject to availability and canteen operating hours</li>
                <li>Prices displayed are inclusive of applicable taxes unless stated otherwise</li>
                <li>The Association is not responsible for any food allergies or dietary restrictions that are not communicated by the user</li>
                <li>Orders once confirmed may not be cancelled or modified after preparation has begun</li>
                <li>The canteen reserves the right to modify menu items, prices, and availability without prior notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">10. Digital ID Cards</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                The digital ID card feature provides verified identification for authorized personnel within the building. By using this feature:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>You agree to provide accurate personal information and a valid photograph</li>
                <li>Digital ID cards are non-transferable and must only be used by the registered individual</li>
                <li>Misuse or sharing of digital ID cards may result in account suspension and disciplinary action</li>
                <li>The Association may require periodic verification and updating of ID card information</li>
                <li>Users with incomplete required details may be prompted to update their information upon login</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">11. Complaint and Helpdesk</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our complaint and helpdesk system allows members to register issues, track progress, and communicate with the management. By using the helpdesk:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>All complaints must be submitted with accurate and truthful information</li>
                <li>The complainant's identity is automatically recorded with each submission</li>
                <li>Issue descriptions and supporting documents become part of the official record</li>
                <li>The Association will make reasonable efforts to address complaints in a timely manner but does not guarantee specific resolution timelines</li>
                <li>Filing false or malicious complaints may result in disciplinary action</li>
                <li>Complaint records may be included in association reports as permitted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">12. Meetings and Voting</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                The platform may facilitate association meetings, attendance tracking, and voting on important decisions. By participating:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>Only eligible members with verified accounts may cast votes</li>
                <li>Each member is entitled to one vote per voting matter unless otherwise specified by the association bylaws</li>
                <li>Voting results are final once the voting period closes</li>
                <li>Meeting attendance may be tracked digitally and recorded in association records</li>
                <li>Remarks and participation data from meetings may be stored for record-keeping purposes</li>
                <li>Proxy voting is subject to the association's bylaws and applicable regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">13. Document Portal</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                The document portal provides access to important society documents, notices, and records. By using this feature:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>Documents are provided for informational purposes and the convenience of members</li>
                <li>Access to documents may be restricted based on your user role and permissions</li>
                <li>You may not redistribute, share, or publish association documents without prior written consent</li>
                <li>The Association strives to maintain accurate and up-to-date documents but does not guarantee the accuracy of all materials</li>
                <li>Downloaded documents remain subject to these Terms of Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">14. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Certain Services may require payment, including but not limited to facility booking fees, maintenance charges, and other association dues. By making payments through our platform:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>You agree to pay all fees and charges associated with your use of paid Services</li>
                <li>All payments are processed through secure third-party payment gateways</li>
                <li>The Association is not responsible for any issues arising from third-party payment processing</li>
                <li>Refund policies vary by service and will be communicated at the time of purchase</li>
                <li>Late payments on association dues may incur additional charges as per the association's bylaws</li>
                <li>Payment receipts and transaction history are available through your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">15. Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is available at <a href="/privacy-policy" className="text-yellow-600 hover:text-yellow-700 underline">rkwt.in/privacy-policy</a>. By using our Services, you consent to the data practices described in the Privacy Policy.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                We implement industry-standard security measures to protect your personal data. However, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">16. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, THE ASSOCIATION DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                The Association does not warrant that the Services will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected. The Association does not warrant the accuracy, completeness, or reliability of any content obtained through the Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">17. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL RK WORLD TOWER BUILDING ASSOCIATION, ITS COMMITTEE MEMBERS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
                <li>Your access to, use of, or inability to access or use the Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Any errors, bugs, or inaccuracies in the Services</li>
                <li>Personal injury or property damage resulting from your use of the Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">18. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                You agree to defend, indemnify, and hold harmless RK World Tower Building Association, its committee members, officers, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any rights of another.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">19. Termination</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                The Association may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                All provisions of these Terms which by their nature should survive termination shall survive, including without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">20. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. Changes will be effective immediately upon posting on the website. We will make reasonable efforts to notify users of material changes through the platform or via email. Your continued use of the Services after any changes constitutes acceptance of the updated Terms.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                It is your responsibility to review these Terms periodically for changes. If you do not agree to the modified Terms, you should discontinue your use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">21. Governing Law and Jurisdiction</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Rajkot, Gujarat, India.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                Any dispute shall first be attempted to be resolved through mediation or mutual discussion between the parties. If mediation fails, the dispute may be submitted to the jurisdiction of the appropriate courts in Rajkot, Gujarat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">22. Severability</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">23. Entire Agreement</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                These Terms, together with the Privacy Policy and any other legal notices published by the Association on the Services, constitute the entire agreement between you and RK World Tower Building Association concerning the use of the Services. These Terms supersede all prior or contemporaneous communications, proposals, and representations, whether electronic, oral, or written, between you and the Association.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">24. Waiver</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                The failure of the Association to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by the Association.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2D42] mb-3">25. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                If you have any questions, concerns, or feedback about these Terms of Service, please do not hesitate to contact us. We are committed to addressing your queries in a timely and transparent manner.
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-2">
                <p className="font-semibold text-[#2B2D42] text-base">RK World Tower Building Association</p>
                <p>613, 150 Feet Ring Rd, Rajkot, Gujarat 360006</p>
                <p>Email: info@rkworldtower.com</p>
                <p>Phone: +91 76005 17544</p>
                <p>Website: rkwt.in</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <NewFooter />
    </div>
  );
}
