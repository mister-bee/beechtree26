import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Image src="/images/treelogo2.webp" alt="BeechTree Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-semibold text-foreground">BeechTree</span>
            </div>
            {/* </CHANGE> */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <Link href="/software" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Software
              </Link>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
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
              AI-Powered Education Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              Safe AI for Every Classroom
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              BeechTree prioritizes student privacy and data security while empowering teachers with intuitive AI tools
              for personalized learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/software">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[180px]">
                  Explore Software
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[180px] border-border hover:bg-accent bg-transparent"
              >
                Request Demo
              </Button>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <Image
              src="/images/classroom1.webp"
              alt="Engaged students raising hands in classroom"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl shadow-2xl border border-border/50 relative z-10"
            />
          </div>
          {/* </CHANGE> */}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 lg:px-8 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Built for Educators, Designed for Students
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our platform combines cutting-edge AI with uncompromising safety standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Safe & Private AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  BeechTree prioritizes student privacy and data security to ensure safe classroom experiences with
                  enterprise-grade protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Teacher-Friendly Interface</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our intuitive design allows educators to easily customize learning paths for diverse classroom needs
                  without technical expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Compliance Ready</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built to meet FERPA, COPPA, and state privacy laws, giving administrators peace of mind and full
                  transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="software" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                Platform Overview
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                AI That Adapts to Your Classroom
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BeechTree leverages advanced AI to create personalized learning experiences while maintaining the
                highest standards of safety and privacy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Personalized learning paths for each student</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Real-time insights and analytics for educators</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Seamless integration with existing LMS platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">24/7 support and professional development</span>
                </li>
              </ul>
              <Link href="/software">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More About Our Software
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <img
                src="/teacher-dashboard-interface-education-technology.jpg"
                alt="BeechTree platform interface"
                className="w-full h-auto rounded-xl shadow-2xl border border-border/50 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonials" className="py-20 px-4 lg:px-8 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card border-border/50 shadow-xl">
            <CardContent className="p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-primary font-semibold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-card-foreground text-balance leading-relaxed">
                "BeechTree has revolutionized the way our teachers interact with students, enhancing engagement and
                safety in the classroom."
              </blockquote>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">School Principal, Lincoln Elementary</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of educators who trust BeechTree to deliver safe, effective AI-powered learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[180px]">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[180px] border-border hover:bg-accent bg-transparent">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4 lg:px-8 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/treelogo2.webp" alt="BeechTree Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-semibold text-foreground">BeechTree</span>
              </div>
              {/* </CHANGE> */}
              <p className="text-sm text-muted-foreground">Safe and private AI for K-12 education</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Security
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
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2026 BeechTree AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
