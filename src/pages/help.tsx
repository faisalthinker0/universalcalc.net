import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import {
  HelpCircle,
  Calculator,
  Smartphone,
  Zap,
  Shield,
  Users,
} from "lucide-react";

export default function HelpPage() {
  // Scroll to top when page loads
  useScrollToTop();

  return (
    <>
      <SEO
        title="Help Center - UniversalCalc"
        description="Get help using UniversalCalc calculators. Find answers to common questions, troubleshooting tips, and user guides."
        canonical="https://universalcalc.net/help"
        keywords="help, support, calculator help, user guide, troubleshooting"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I use the calculators?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Simply enter your values in the input fields and click the 'Calculate' button. Results will appear instantly in the results panel. All calculators are free to use and work on any device.",
              },
            },
            {
              "@type": "Question",
              name: "Are the calculations accurate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our calculators use industry-standard formulas and are thoroughly tested for accuracy. However, results should be used for informational purposes only and not as professional financial or medical advice.",
              },
            },
            {
              "@type": "Question",
              name: "Do you store my personal data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, we don't store any personal information or calculation data. All calculations are performed locally in your browser and are not saved on our servers.",
              },
            },
          ],
        }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mr-4 shadow-lg">
              <HelpCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Help Center
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Need help using our calculators? Find answers to common questions
            and learn how to get the most out of UniversalCalc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader className="text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Learn the basics of using our calculators
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader className="text-center">
              <Smartphone className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Mobile Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Optimize your experience on mobile devices
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-lg">
            <CardHeader className="text-center">
              <Zap className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Tips & Tricks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Advanced features and shortcuts
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="hover-lift border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <HelpCircle className="mr-3 h-6 w-6 text-primary" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How do I use the calculators?
                </AccordionTrigger>
                <AccordionContent>
                  Simply enter your values in the input fields and click the
                  "Calculate" button. Results will appear instantly in the
                  results panel. All calculators are free to use and work on any
                  device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Are the calculations accurate?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all our calculators use industry-standard formulas and
                  are thoroughly tested for accuracy. However, results should be
                  used for informational purposes only and not as professional
                  financial or medical advice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Do you store my personal data?
                </AccordionTrigger>
                <AccordionContent>
                  No, we don't store any personal information or calculation
                  data. All calculations are performed locally in your browser
                  and are not saved on our servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Can I use these calculators on mobile?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! All our calculators are fully responsive and
                  optimized for mobile devices. They work seamlessly on
                  smartphones and tablets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  How often are calculators updated?
                </AccordionTrigger>
                <AccordionContent>
                  We regularly update our calculators with new features,
                  improved accuracy, and additional calculation options. We also
                  add new calculators based on user requests.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="hover-lift border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <Users className="mx-auto h-16 w-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
