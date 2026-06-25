import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { Shield, ChevronUp } from "lucide-react";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export function PrivacyPolicy() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">
            RK World Tower Building Association ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, store, and safeguard your information when you visit our website (rkwt.in), use our mobile application, or interact with any of our services (collectively, the "Services").
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Services. This policy applies to all users of our platform, including owners, tenants, employees, guards, canteen staff, valet staff, and visitors.
          </p>
        </>
      ),
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            We collect various types of information to provide, maintain, and improve our Services. The types of information we collect include:
          </p>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">2.1 Personal Information</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">Information that can be used to identify you directly or indirectly:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-5">
            <li>Full name, email address, phone number, and alternative contact details</li>
            <li>Unit/shop number, floor, wing, and ownership or tenancy details</li>
            <li>Government-issued identification numbers (Aadhaar, PAN, etc.) for verification purposes</li>
            <li>Digital signature and photographs for ID card generation</li>
            <li>Vehicle registration numbers and parking details</li>
            <li>Date of birth, gender, and emergency contact information</li>
            <li>Business name and nature of business (for commercial unit owners)</li>
            <li>Family member details (if registered under the same unit)</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">2.2 Usage Information</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">Information about how you interact with our Services:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-5">
            <li>Log data including IP address, browser type and version, pages visited, time and date of visit</li>
            <li>Facility and amenity booking history and preferences</li>
            <li>Complaint and helpdesk interaction records</li>
            <li>Canteen order history and food preferences</li>
            <li>Meeting attendance and voting participation records</li>
            <li>Document access and download logs</li>
            <li>Visitor entry and exit records</li>
            <li>Notification preferences and communication history</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">2.3 Device Information</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">When you access our Services through a mobile device or computer:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-5">
            <li>Device type, model, and operating system version</li>
            <li>Unique device identifiers</li>
            <li>Mobile network information</li>
            <li>App version and crash reports</li>
            <li>Screen resolution and browser settings</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">2.4 Location Information</h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            We may collect approximate location information based on your IP address. If you use location-based features (such as gate pass verification), we may collect precise location data with your explicit consent. You can disable location services through your device settings at any time.
          </p>
        </>
      ),
    },
    {
      title: "3. How We Collect Information",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm mb-3">We collect information through various methods:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li><strong>Directly from you:</strong> When you register an account, update your profile, submit complaints, make bookings, or contact us</li>
            <li><strong>Automatically:</strong> When you use our Services, through cookies, log files, and similar technologies</li>
            <li><strong>From the Association:</strong> When the building administration provides member information for account setup</li>
            <li><strong>From third parties:</strong> From payment processors and service providers who assist in delivering our Services</li>
            <li><strong>From your device:</strong> When you install and use our mobile application</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. How We Use Your Information",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm mb-3">We use the collected information for the following purposes:</p>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">4.1 Service Delivery</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
            <li>Managing building operations, tenant/owner records, and unit assignments</li>
            <li>Processing facility bookings, amenity reservations, and managing availability</li>
            <li>Sending announcements, notices, circulars, and event updates</li>
            <li>Handling complaints, helpdesk requests, and maintenance tickets</li>
            <li>Generating and verifying digital ID cards for authorized personnel</li>
            <li>Managing canteen orders, menus, and delivery</li>
            <li>Operating valet parking services and vehicle management</li>
            <li>Facilitating meetings, attendance tracking, and voting processes</li>
            <li>Managing visitor entries, gate passes, and security protocols</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">4.2 Communication</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
            <li>Sending important notices and updates about building operations</li>
            <li>Notifying you about changes to our Services, Terms, or policies</li>
            <li>Responding to your inquiries, complaints, and support requests</li>
            <li>Sending meeting invitations and event reminders</li>
            <li>Sharing newsletters and association announcements</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">4.3 Security and Compliance</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
            <li>Ensuring building security and access control</li>
            <li>Verifying user identity and preventing unauthorized access</li>
            <li>Detecting, preventing, and addressing fraud or security issues</li>
            <li>Complying with legal obligations and regulatory requirements</li>
            <li>Enforcing our Terms of Service and association bylaws</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">4.4 Improvement and Analytics</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li>Improving our Services, features, and user experience</li>
            <li>Analyzing usage patterns to optimize platform performance</li>
            <li>Generating aggregated reports for association management</li>
            <li>Conducting surveys and gathering feedback</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Data Sharing and Disclosure",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">5.1 Within the Association</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
            <li>With building management and authorized committee members for operational purposes</li>
            <li>With security personnel for access control and safety</li>
            <li>With canteen and valet staff as needed to provide their respective services</li>
            <li>In association reports and meeting minutes as required by bylaws</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">5.2 With Service Providers</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
            <li>Payment processors for handling financial transactions securely</li>
            <li>Cloud hosting providers for data storage and platform operations</li>
            <li>Email and notification service providers for communication delivery</li>
            <li>Analytics providers for understanding platform usage (in anonymized form)</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2B2D42] mb-2">5.3 Legal Requirements</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li>When required by law, regulation, legal process, or governmental request</li>
            <li>To enforce our Terms of Service or protect our legal rights</li>
            <li>To prevent fraud, security threats, or illegal activities</li>
            <li>In connection with emergency situations to protect the safety of persons</li>
            <li>In response to valid court orders or subpoenas</li>
          </ul>
        </>
      ),
    },
    {
      title: "6. Data Security",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">
            We implement comprehensive technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
            <li>SSL/TLS encryption for all data transmitted between your device and our servers</li>
            <li>Encrypted storage of sensitive data including passwords and identification numbers</li>
            <li>Role-based access controls limiting data access to authorized personnel only</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Secure server infrastructure with firewalls and intrusion detection systems</li>
            <li>Regular data backups with encrypted storage</li>
            <li>Employee training on data protection and privacy practices</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to taking all reasonable precautions to safeguard your data.
          </p>
        </>
      ),
    },
    {
      title: "7. Data Retention",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">
            We retain your personal information for as long as your account is active or as needed to provide our Services. The specific retention periods depend on the type of data:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
            <li><strong>Account data:</strong> Retained for the duration of your membership/tenancy and for a reasonable period thereafter</li>
            <li><strong>Transaction records:</strong> Retained as required by applicable tax and financial regulations (typically 7-10 years)</li>
            <li><strong>Complaint records:</strong> Retained for the duration of your membership plus 3 years</li>
            <li><strong>Booking history:</strong> Retained for 2 years after the booking date</li>
            <li><strong>Visitor logs:</strong> Retained for 1 year</li>
            <li><strong>System logs:</strong> Retained for 90 days</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            We may also retain data as required by applicable laws and regulations, or for legitimate business purposes such as maintaining records of past residents/tenants, resolving disputes, and enforcing our agreements.
          </p>
        </>
      ),
    },
    {
      title: "8. Your Rights and Choices",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm mb-3">You have the following rights regarding your personal data, subject to applicable laws:</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 text-sm">
            <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you. We will provide this information within 30 days of your request.</li>
            <li><strong>Right to Correction:</strong> You can request correction of inaccurate or incomplete personal data. You can also update most of your information directly through your account settings.</li>
            <li><strong>Right to Deletion:</strong> You can request deletion of your personal data, subject to legal and contractual obligations. Some data may need to be retained for record-keeping purposes.</li>
            <li><strong>Right to Object:</strong> You can object to processing of your personal data in certain circumstances, such as direct marketing communications.</li>
            <li><strong>Right to Data Portability:</strong> You can request to receive your personal data in a structured, commonly used, and machine-readable format.</li>
            <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you can withdraw your consent at any time. This will not affect the lawfulness of processing before the withdrawal.</li>
            <li><strong>Right to Restrict Processing:</strong> You can request that we limit the processing of your personal data in certain circumstances.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            To exercise any of these rights, please contact us using the contact information provided at the end of this policy. We will respond to your request within the timeframe required by applicable law.
          </p>
        </>
      ),
    },
    {
      title: "9. Cookies and Tracking Technologies",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm mb-3">Our website and application may use cookies and similar tracking technologies to enhance your experience. The types of cookies we use include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li><strong>Essential Cookies:</strong> Required for the basic functionality of the platform, such as authentication and session management. These cannot be disabled.</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and settings to provide a personalized experience.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Services so we can improve them. This data is aggregated and anonymized.</li>
            <li><strong>Performance Cookies:</strong> Monitor the platform's performance and help us identify and fix issues quickly.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            You can manage cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our Services. Most browsers allow you to refuse cookies, delete existing cookies, or alert you before a cookie is stored.
          </p>
        </>
      ),
    },
    {
      title: "10. Children's Privacy",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">
            Our Services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information. If you believe that a child under 18 has provided us with personal information, please contact us immediately.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Family member details of minors may be collected as part of a parent or guardian's account registration for building records purposes, with the consent of the parent or guardian.
          </p>
        </>
      ),
    },
    {
      title: "11. Third-Party Links and Services",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">
            Our Services may contain links to third-party websites, services, or applications that are not operated by us. These may include payment gateways, social media platforms, and other external services. We are not responsible for the privacy practices, content, or security of these external sites.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            We strongly encourage you to review the privacy policies of any third-party services before providing any personal information. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </>
      ),
    },
    {
      title: "12. International Data Transfers",
      content: (
        <p className="text-gray-600 leading-relaxed text-sm">
          Your information may be transferred to and processed on servers located outside your state, province, country, or other governmental jurisdiction where data protection laws may differ from those of your jurisdiction. Currently, our primary servers are located in India. If we transfer data internationally in the future, we will ensure appropriate safeguards are in place in compliance with applicable data protection laws.
        </p>
      ),
    },
    {
      title: "13. Data Breach Notification",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">In the event of a data breach that is likely to result in a risk to your rights and freedoms, we will:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm">
            <li>Notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where required by law</li>
            <li>Notify affected users without undue delay if the breach is likely to result in a high risk to their rights and freedoms</li>
            <li>Document the breach, its effects, and the remedial actions taken</li>
            <li>Take immediate steps to contain and remediate the breach</li>
            <li>Conduct a thorough investigation to prevent future occurrences</li>
          </ul>
        </>
      ),
    },
    {
      title: "14. Legal Basis for Processing",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm mb-3">We process your personal data on the following legal bases:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li><strong>Contractual Necessity:</strong> Processing necessary for the performance of our services as agreed with association members</li>
            <li><strong>Legitimate Interests:</strong> Processing necessary for building management, security, and association operations</li>
            <li><strong>Legal Compliance:</strong> Processing required to comply with applicable laws and regulations</li>
            <li><strong>Consent:</strong> Where you have given explicit consent for specific processing activities</li>
            <li><strong>Vital Interests:</strong> Processing necessary to protect the safety of building occupants in emergency situations</li>
          </ul>
        </>
      ),
    },
    {
      title: "15. Automated Decision-Making",
      content: (
        <p className="text-gray-600 leading-relaxed text-sm">
          We do not use automated decision-making or profiling that produces legal effects or similarly significant effects on you. Where any automated processes are used (such as booking availability checks or access control verification), these are operational in nature and do not involve profiling or automated assessment of personal characteristics.
        </p>
      ),
    },
    {
      title: "16. Changes to This Privacy Policy",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Any changes will be posted on this page with an updated "Last updated" date. We will notify users of material changes through our platform, email, or other appropriate communication channels.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our Services after any changes to this policy constitutes your acceptance of the updated Privacy Policy.
          </p>
        </>
      ),
    },
    {
      title: "17. Grievance Officer",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">
            In accordance with the Information Technology Act, 2000, and the rules made thereunder, the name and contact details of the Grievance Officer who can be contacted with respect to any complaints or concerns regarding the processing of information are as follows:
          </p>
          <div className="mt-4 bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-2">
            <p className="font-semibold text-[#2B2D42] text-base">Grievance Officer</p>
            <p>RK World Tower Building Association</p>
            <p>613, 150 Feet Ring Rd, Rajkot, Gujarat 360006</p>
            <p>Email: info@rkworldtower.com</p>
            <p>Time: Monday to Saturday, 10:00 AM to 6:00 PM IST</p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            The Grievance Officer shall acknowledge the complaint within 48 hours and resolve it within 30 days from the date of receipt of the complaint.
          </p>
        </>
      ),
    },
    {
      title: "18. Contact Us",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed text-sm">
            If you have any questions, concerns, or requests regarding this Privacy Policy, our data practices, or your personal information, please contact us through any of the following channels:
          </p>
          <div className="mt-4 bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-2">
            <p className="font-semibold text-[#2B2D42] text-base">RK World Tower Building Association</p>
            <p>613, 150 Feet Ring Rd, Rajkot, Gujarat 360006</p>
            <p>Email: info@rkworldtower.com</p>
            <p>Phone: +91 76005 17544</p>
            <p>Website: rkwt.in</p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            We are committed to working with you to resolve any concerns about your privacy and will respond to your inquiries within a reasonable timeframe.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NewHeader />

      {/* Hero Banner */}
      <div className="bg-[#2B2D42] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(250,204,21,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-yellow-400/15 mb-6"
          >
            <Shield className="w-10 h-10 text-yellow-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold mb-3"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-sm"
          >
            Last updated: June 26, 2026
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8"
          >
            {sections.map((section, i) => (
              <AnimatedSection key={i} delay={i < 3 ? i * 0.1 : 0}>
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h2 className="text-xl font-bold text-[#2B2D42] mb-3">{section.title}</h2>
                  {section.content}
                </div>
              </AnimatedSection>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showTop ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#2B2D42] hover:bg-yellow-400 text-white hover:text-[#2B2D42] rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer"
        style={{ pointerEvents: showTop ? "auto" : "none" }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

      <NewFooter />
    </div>
  );
}
