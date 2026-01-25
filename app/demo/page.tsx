"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FiCheckCircle } from "react-icons/fi";
import { BusinessDropdown } from "@/components/ui/business-dropdown";

const softwareOptions = [
  { value: "", label: "Select a product..." },
  { value: "kansha", label: "Kansha" },
  { value: "picture-books", label: "Picture Books" },
  { value: "writing-universe", label: "Writing Universe" },
  { value: "reading-adventures", label: "Reading Adventures" },
  { value: "peace-out", label: "Peace Out" },
  { value: "classroom-democracy", label: "Classroom Democracy" },
  { value: "testing-champ", label: "Testing Champ" },
  { value: "beso", label: "BeSO" },
  { value: "art-bee", label: "Art Bee" },
];

export default function RequestDemoPage() {
  return (
    <Suspense fallback={<DemoPageSkeleton />}>
      <RequestDemoContent />
    </Suspense>
  );
}

function DemoPageSkeleton() {
  return (
    <div className="min-h-screen bg-background theme-green">
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <BusinessDropdown currentBusiness="education" />
          </div>
        </div>
      </nav>
      <main className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card border border-border/50 rounded-xl shadow-lg p-8 md:p-12 animate-pulse">
            <div className="h-8 bg-accent rounded w-1/2 mx-auto mb-4" />
            <div className="h-4 bg-accent rounded w-1/3 mx-auto" />
          </div>
        </div>
      </main>
    </div>
  );
}

function RequestDemoContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    software: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Preselect product from URL parameter
  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      const validOption = softwareOptions.find((opt) => opt.value === product);
      if (validOption) {
        setFormData((prev) => ({ ...prev, software: product }));
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const selectedSoftware = softwareOptions.find(
        (opt) => opt.value === formData.software
      );
      const response = await fetch("https://formspree.io/f/xjvqlany", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          software: selectedSoftware?.label || formData.software,
          message: formData.message || "No additional message provided",
          _subject: `Demo Request: ${selectedSoftware?.label || formData.software}`,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          software: "",
          message: "",
        });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Demo request form error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
                  Demo Request Received!
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for your interest in BeechTree. Our team will reach
                  out shortly to schedule your personalized demo.
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
              <h1 className="text-4xl font-bold text-card-foreground mb-2">
                Request a Demo
              </h1>
              <p className="text-muted-foreground">
                See how BeechTree can transform your classroom
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
                  htmlFor="software"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Product of Interest
                </label>
                <select
                  id="software"
                  name="software"
                  value={formData.software}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground appearance-none cursor-pointer"
                >
                  {softwareOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ""}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your school, grade levels, or specific needs..."
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
                  {isSubmitting ? "Sending..." : "Request Demo"}
                </button>
              </div>

              {submitError && (
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-center">
                  <p className="text-destructive">
                    Failed to send request. Please try again or email us
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

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground">
                Have questions?{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  Contact us
                </Link>
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
