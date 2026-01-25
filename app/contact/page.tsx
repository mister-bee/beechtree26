"use client";

import Link from "next/link";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { BusinessDropdown } from "@/components/ui/business-dropdown";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
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
      <div className="min-h-screen bg-background theme-green">
        {/* Navigation */}
        <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <BusinessDropdown currentBusiness="education" />
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
                  Thank you for reaching out to BeechTree. We&apos;ll get back
                  to you as soon as possible.
                </p>
                <Link
                  href="/"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background theme-green">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <BusinessDropdown currentBusiness="education" />
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card border border-border/50 rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
                Education Department
              </div>
              <h1 className="text-4xl font-bold text-card-foreground mb-2">
                Contact Us
              </h1>
              <p className="text-muted-foreground">
                Get in touch with our Education team
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
                  placeholder="John"
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
                  placeholder="Doe"
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
                  placeholder="john@example.com"
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
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <Link
                  href="/"
                  className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-2"
                >
                  <span>&larr;</span> Back to Home
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
                      href="mailto:admin@beechtree.ai"
                      className="underline hover:no-underline"
                    >
                      admin@beechtree.ai
                    </a>
                  </p>
                </div>
              )}
            </form>

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
