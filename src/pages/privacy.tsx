import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Shield, Eye, Lock, Database, Globe, Users } from "lucide-react";

export default function PrivacyPage() {
  // Scroll to top when page loads
  useScrollToTop();

  return (
    <>
      <SEO
        title="Privacy Policy - UniversalCalc"
        description="Learn how UniversalCalc protects your privacy and handles your data. Read our comprehensive privacy policy."
        canonical="https://universalcalc.net/privacy"
        keywords="privacy policy, data protection, user privacy, calculator privacy"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          description:
            "UniversalCalc Privacy Policy - Learn how we protect your privacy and handle your data",
          url: "https://universalcalc.net/privacy",
          mainEntity: {
            "@type": "Organization",
            name: "UniversalCalc",
            url: "https://universalcalc.net",
            description: "Free online calculator platform",
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "support@universalcalc.net",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://universalcalc.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy",
                item: "https://universalcalc.net/privacy",
              },
            ],
          },
        }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mr-4 shadow-lg">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Eye className="mr-3 h-5 w-5 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Information You Provide</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We do not collect personal information such as names, email
                  addresses, or phone numbers unless you explicitly provide them
                  through our contact forms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Information</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We may collect anonymous usage data to improve our services,
                  including which calculators are used most frequently and
                  general traffic patterns.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Calculation Data</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  All calculations are performed locally in your browser. We do
                  not store or transmit your calculation inputs or results.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Lock className="mr-3 h-5 w-5 text-accent" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Improvement</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We use anonymous usage data to understand how our calculators
                  are used and to improve their functionality and user
                  experience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Communication</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  If you contact us through our contact forms, we use your
                  provided information to respond to your inquiries and provide
                  support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Legal Compliance</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We may use your information to comply with applicable laws,
                  regulations, or legal processes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Database className="mr-3 h-5 w-5 text-primary" />
                Data Storage and Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Local Processing</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  All calculator operations happen in your browser. No
                  calculation data is sent to our servers or stored in our
                  databases.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Security Measures</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We implement appropriate security measures to protect any
                  information we do collect, including encryption and secure
                  data transmission.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Retention</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We retain contact form submissions only as long as necessary
                  to respond to your inquiry and provide support.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Globe className="mr-3 h-5 w-5 text-accent" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Analytics</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We may use third-party analytics services to understand
                  website usage. These services collect anonymous data and do
                  not identify individual users.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">External Links</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Our website may contain links to external sites. We are not
                  responsible for the privacy practices of these external sites.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Users className="mr-3 h-5 w-5 text-primary" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Access and Control</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  You have the right to request access to any personal
                  information we may have about you and to request corrections
                  or deletion.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Opt-Out</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  You can opt out of certain data collection by adjusting your
                  browser settings or using privacy tools.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact Us</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  If you have questions about your privacy rights or want to
                  exercise them, please contact us using the information below.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Shield className="mr-3 h-5 w-5 text-accent" />
                Children's Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please
                contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Lock className="mr-3 h-5 w-5 text-primary" />
                Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                We may update this privacy policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date. We encourage you
                to review this policy periodically.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Questions About Privacy?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If you have any questions about this privacy policy or our data
                practices, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/help"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Help Center
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
