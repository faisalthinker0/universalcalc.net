import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  // Scroll to top when page loads
  useScrollToTop();

  return (
    <>
      <SEO
        title="Contact Us - UniversalCalc"
        description="Get in touch with the UniversalCalc team. We're here to help with any questions, feedback, or support requests."
        canonical="https://universalcalc.net/contact"
        keywords="contact, support, help, feedback, calculator support"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact UniversalCalc",
          description:
            "Get in touch with the UniversalCalc team for support and feedback",
          url: "https://universalcalc.net/contact",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "support@universalcalc.net",
            availableLanguage: "English",
            areaServed: "Worldwide",
          },
          mainEntity: {
            "@type": "Organization",
            name: "UniversalCalc",
            url: "https://universalcalc.net",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "support@universalcalc.net",
            },
          },
        }}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mr-4 shadow-lg">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Contact Us
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question, feedback, or need support? We'd love to hear from
            you. Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover-lift border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="mr-3 h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">
                          General Question
                        </SelectItem>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover-lift border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      support@universalcalc.net
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-accent" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">
                      10:00 AM - 4:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Need Immediate Help?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Check our Help Center for quick answers to common questions.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/help">Visit Help Center</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="hover-lift border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    How quickly will you respond?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent technical issues, we prioritize
                    those requests.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Can I request a new calculator?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Absolutely! We love hearing suggestions for new calculators.
                    Send us your idea and we'll consider adding it to our
                    collection.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Do you offer technical support?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yes, we provide comprehensive technical support for all our
                    calculators. If you're experiencing issues, we're here to
                    help.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    How can I report a bug?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Use the contact form above and select "Bug Report" as the
                    subject. Please include detailed steps to reproduce the
                    issue.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
