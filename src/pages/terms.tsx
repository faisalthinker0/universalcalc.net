import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import {
  FileText,
  Shield,
  AlertTriangle,
  Users,
  Globe,
  Lock,
} from "lucide-react";

export default function TermsPage() {
  // Scroll to top when page loads
  useScrollToTop();
  return (
    <>
      <SEO
        title="Terms of Service - UniversalCalc"
        description="Read UniversalCalc's terms of service and user agreement. Understand your rights and responsibilities when using our calculators."
        canonical="https://universalcalc.net/terms"
        keywords="terms of service, user agreement, calculator terms, legal terms"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service",
          description:
            "UniversalCalc Terms of Service - Read our user agreement and terms",
          url: "https://universalcalc.net/terms",
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
                name: "Terms of Service",
                item: "https://universalcalc.net/terms",
              },
            ],
          },
        }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mr-4 shadow-lg">
              <FileText className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using UniversalCalc. By
            using our service, you agree to these terms.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Globe className="mr-3 h-5 w-5 text-primary" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                By accessing and using UniversalCalc.net ("the Service"), you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Users className="mr-3 h-5 w-5 text-accent" />
                Use License
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Permission</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on UniversalCalc's website
                  for personal, non-commercial transitory viewing only.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Restrictions</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  This is the grant of a license, not a transfer of title, and
                  under this license you may not:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    Attempt to reverse engineer any software contained on the
                    website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <AlertTriangle className="mr-3 h-5 w-5 text-primary" />
                Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Accuracy of Calculations</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  The calculations provided by our calculators are for
                  informational purposes only. While we strive for accuracy, we
                  cannot guarantee that the results are error-free or suitable
                  for any specific purpose.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">No Professional Advice</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Our calculators are not intended to provide professional
                  financial, medical, legal, or other advice. Always consult
                  with qualified professionals for important decisions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Use at Your Own Risk</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  You use our calculators at your own risk. UniversalCalc shall
                  not be liable for any damages arising from the use of our
                  services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Shield className="mr-3 h-5 w-5 text-accent" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Acceptable Use</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  You agree to use our service only for lawful purposes and in a
                  way that does not infringe the rights of, restrict, or inhibit
                  anyone else's use and enjoyment of the service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prohibited Activities</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  You may not use our service to:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1">
                  <li>
                    Transmit any material that is defamatory, offensive, or
                    otherwise objectionable
                  </li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>
                    Use the service for any illegal or unauthorized purpose
                  </li>
                  <li>Interfere with or disrupt the service or servers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Lock className="mr-3 h-5 w-5 text-primary" />
                Privacy and Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Privacy Policy</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Your privacy is important to us. Please review our Privacy
                  Policy, which also governs your use of the service, to
                  understand our practices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Processing</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  All calculations are performed locally in your browser. We do
                  not store or process your calculation data on our servers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <AlertTriangle className="mr-3 h-5 w-5 text-accent" />
                Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Availability</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We strive to maintain high availability of our service, but we
                  cannot guarantee uninterrupted access. The service may be
                  temporarily unavailable due to maintenance or technical
                  issues.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Liability Limitation</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  In no event shall UniversalCalc or its suppliers be liable for
                  any damages arising out of the use or inability to use the
                  materials, even if UniversalCalc or a UniversalCalc authorized
                  representative has been notified orally or in writing of the
                  possibility of such damage.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <FileText className="mr-3 h-5 w-5 text-primary" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Ownership</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  The materials on UniversalCalc's website are owned by
                  UniversalCalc and are protected by applicable copyright and
                  trademark law.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Third-Party Content</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Some content may be licensed from third parties. All
                  third-party content is used with permission and remains the
                  property of its respective owners.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Globe className="mr-3 h-5 w-5 text-accent" />
                Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                These terms and conditions are governed by and construed in
                accordance with the laws of the jurisdiction in which
                UniversalCalc operates. Any disputes relating to these terms
                will be subject to the exclusive jurisdiction of the courts of
                that jurisdiction.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <FileText className="mr-3 h-5 w-5 text-primary" />
                Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                UniversalCalc reserves the right to modify these terms at any
                time. We will notify users of any material changes by updating
                the "Last updated" date on this page. Your continued use of the
                service after such changes constitutes acceptance of the new
                terms.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Questions About These Terms?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If you have any questions about these terms of service, please
                contact us for clarification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
