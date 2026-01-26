import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Wrench, FileText, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BusinessDropdown } from "@/components/ui/business-dropdown"

export default function PropertyPage() {
  return (
    <div className="min-h-screen bg-background theme-yellow">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <BusinessDropdown currentBusiness="property" />
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solutions
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <Link href="/property/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Smart Property Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              Manage Properties Smarter
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              BeechTree Property Management streamlines operations with smart tools for landlords, property
              managers, and real estate professionals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="#solutions">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[180px]">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/property/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[180px] border-border hover:bg-accent bg-transparent"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative z-10 bg-card border border-border/50 rounded-xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground mt-2">Properties managed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">40%</p>
                  <p className="text-muted-foreground mt-2">Reduction in vacancies</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">24/7</p>
                  <p className="text-muted-foreground mt-2">Automated support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 lg:px-8 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Everything You Need to Manage Properties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our comprehensive platform handles every aspect of property management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Tenant Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Streamline tenant screening, onboarding, and communication with intelligent tools that save time
                  and reduce friction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Maintenance Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automate maintenance requests, vendor coordination, and preventive maintenance scheduling with
                  smart workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Financial Reporting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get real-time insights into property performance with automated rent collection, expense tracking,
                  and financial reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                Our Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Built for Modern Property Management
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you manage a single property or an entire portfolio, BeechTree provides the tools you need
                to succeed.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Online rent collection and payment processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Tenant portal for self-service requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Automated lease renewals and reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Document storage and e-signatures</span>
                </li>
              </ul>
              <Link href="/property/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative z-10 bg-card border border-border/50 rounded-xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Property Dashboard</p>
                      <p className="text-sm text-muted-foreground">All your properties at a glance</p>
                    </div>
                  </div>
                  {/* Mock Dashboard */}
                  <div className="space-y-3">
                    {/* Property List */}
                    <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium text-foreground">142 Oak Street</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Occupied</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium text-foreground">89 Maple Ave, Unit 3</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Occupied</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="text-sm font-medium text-foreground">267 Pine Road</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Lease ending</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-sm font-medium text-foreground">55 Cedar Lane</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Vacant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 lg:px-8 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Trusted by Property Professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See what property managers say about BeechTree
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;BeechTree cut our maintenance response time in half. Tenants are happier and so are we.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Marcus T.</p>
                  <p className="text-sm text-muted-foreground">Property Manager, Multi-family Portfolio</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;The automated rent collection feature alone has saved us countless hours every month.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Jennifer R.</p>
                  <p className="text-sm text-muted-foreground">Landlord, Residential Properties</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;Finally, a property management system that actually understands what we need.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">David K.</p>
                  <p className="text-sm text-muted-foreground">Real Estate Investor, Commercial Properties</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Ready to Simplify Property Management?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join property professionals who trust BeechTree to manage their portfolios efficiently.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/property/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[180px]">
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4 lg:px-8 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/tree-logo-yellow.webp" alt="BeechTree Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-semibold text-foreground">BeechTree</span>
              </div>
              <p className="text-sm text-muted-foreground">Smart property management solutions</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Tenant Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Financials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <Link href="/property/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            &copy; 2026 BeechTree LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
