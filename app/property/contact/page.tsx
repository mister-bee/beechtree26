"use client";

import Link from "next/link";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { BusinessDropdown } from "@/components/ui/business-dropdown";

export default function PropertyContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    propertyCount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `[Property Management Department Inquiry]\nNumber of Properties: ${formData.propertyCount || "Not specified"}\n\n${formData.message}`,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", propertyCount: "", message: "" });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-background theme-yellow">
        {/* Navigation */}
        <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <BusinessDropdown currentBusiness="property" />
            </div>
          </div>
        </nav>

        <main className="pt-24 pb-16 px-4 lg:px-8">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-card border border-border/50 rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <FiCheckCircle className="w-20 h-20 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-card-foreground mb-4">
                  Message Sent!
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for reaching out to BeechTree Property Management.
                  Our team will get back to you shortly.
                </p>
                <Link
                  href="/property"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Return to Property Management
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background theme-yellow">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <BusinessDropdown currentBusiness="property" />
            <Link
              href="/property"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Property Management
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card border border-border/50 rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
                Property Management Department
              </div>
              <h1 className="text-4xl font-bold text-card-foreground mb-2">
                Contact Us
              </h1>
              <p className="text-muted-foreground">
                Get in touch with our Property Management team
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="propertyCount"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Number of Properties (Optional)
                </label>
                <input
                  type="text"
                  id="propertyCount"
                  name="propertyCount"
                  value={formData.propertyCount}
                  onChange={handleChange}
                  placeholder="e.g., 10 units, 50+ properties"
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your property management needs..."
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <Link
                  href="/property"
                  className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-2"
                >
                  <span>&larr;</span> Back to Property Management
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {submitError && (
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-center">
                  <p className="text-destructive">
                    Failed to send message. Please try again or email us
                    directly at{" "}
                    <a
                      href="mailto:property@beechtree.ai"
                      className="underline hover:no-underline"
                    >
                      property@beechtree.ai
                    </a>
                  </p>
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground">
                You can also reach our Property Management team at:{" "}
                <a
                  href="mailto:property@beechtree.ai"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  property@beechtree.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 lg:px-8 bg-accent/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BeechTree LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
