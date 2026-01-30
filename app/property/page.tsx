import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Brain, FileCode, Coins, CheckCircle2, ArrowRight } from "lucide-react"
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
              AI + Blockchain Powered
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              Property Management, Reimagined
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              The first platform combining AI intelligence with smart contract automation. Predictive insights meet
              trustless execution for the future of property management.
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
                  <p className="text-muted-foreground mt-2">Smart Contracts Deployed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">99.9%</p>
                  <p className="text-muted-foreground mt-2">Payment Automation</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">0</p>
                  <p className="text-muted-foreground mt-2">Late Payments (Smart Contract Enforced)</p>
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
              Where AI Meets Blockchain
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Next-generation property management powered by intelligent automation and trustless technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">AI-Powered Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Predictive maintenance that catches issues before they happen. AI tenant screening with fraud detection.
                  Dynamic pricing optimization that maximizes your returns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileCode className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Smart Contract Leases</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Self-executing lease agreements that enforce terms automatically. Rent collection happens on-chain with
                  complete transparency and trustless enforcement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Crypto-Native Payments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accept stablecoins and crypto with instant settlements and lower fees. Automatic conversion to fiat
                  means you get dollars while tenants pay how they prefer.
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
                Built for the Future of Property Management
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combine the power of AI insights with blockchain security. Every transaction verified, every prediction
                data-driven.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Smart contract rent collection—automatic, trustless, on-time every time</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">AI tenant screening with fraud detection and creditworthiness prediction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Self-executing lease renewals with blockchain verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">NFT-based property records and immutable transaction history</span>
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
                      <p className="font-semibold text-foreground">AI + Blockchain Dashboard</p>
                      <p className="text-sm text-muted-foreground">Smart contracts & AI insights combined</p>
                    </div>
                  </div>
                  {/* Mock Dashboard */}
                  <div className="space-y-3">
                    {/* Property List */}
                    <div className="p-3 bg-accent/50 rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-sm font-medium text-foreground">142 Oak Street</span>
                        </div>
                        <span className="text-xs text-green-600 font-medium">Smart Contract Active</span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-5">AI: HVAC maintenance predicted in 2 weeks</p>
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-sm font-medium text-foreground">89 Maple Ave</span>
                        </div>
                        <span className="text-xs text-green-600 font-medium">Rent Auto-Collected</span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-5">AI: 98% tenant retention predicted</p>
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          <span className="text-sm font-medium text-foreground">267 Pine Road</span>
                        </div>
                        <span className="text-xs text-yellow-600 font-medium">Renewal Pending</span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-5">Smart contract awaiting tenant signature</p>
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-sm font-medium text-foreground">55 Cedar Lane</span>
                        </div>
                        <span className="text-xs text-blue-600 font-medium">AI Pricing Active</span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-5">AI Optimal Price: $2,450/mo (+8% market)</p>
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
                  &ldquo;The smart contract eliminated rent collection headaches. Payments are automatic—we haven&apos;t had a single late payment in 8 months.&rdquo;
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
                  &ldquo;The AI predicted a water heater failure two weeks before it happened. We avoided a $5,000 emergency repair.&rdquo;
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
                  &ldquo;Accepting crypto opened us to new tenants. Smart contracts handle conversion—we get dollars, they pay in USDC.&rdquo;
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
            Ready for AI-Powered, Blockchain-Secured Property Management?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Eliminate late payments. Predict maintenance before it fails. Let smart contracts handle the rest.
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
              <p className="text-sm text-muted-foreground">AI + blockchain property management</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    AI Tenant Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Predictive Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Smart Contract Payments
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
