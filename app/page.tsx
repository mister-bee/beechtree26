import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BusinessDropdown } from "@/components/ui/business-dropdown"
import { Shield, Users, Lock, CheckCircle2, ArrowRight, ShieldCheck, EyeOff, Database, Server, KeyRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background theme-green">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <BusinessDropdown currentBusiness="education" />
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
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
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
              <Link href="/demo">
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
              <div className="relative z-10 bg-card border border-border/50 rounded-xl shadow-2xl p-6">
                <div className="space-y-5">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Privacy Dashboard</p>
                      <p className="text-sm text-muted-foreground">Student data protection status</p>
                    </div>
                  </div>

                  {/* Privacy Status Card */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <span className="font-medium text-foreground">All Systems Protected</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-card rounded-lg p-3">
                        <p className="text-2xl font-bold text-primary">100%</p>
                        <p className="text-xs text-muted-foreground">Data Encrypted</p>
                      </div>
                      <div className="bg-card rounded-lg p-3">
                        <p className="text-2xl font-bold text-primary">0</p>
                        <p className="text-xs text-muted-foreground">Data Shared</p>
                      </div>
                      <div className="bg-card rounded-lg p-3">
                        <p className="text-2xl font-bold text-primary">24/7</p>
                        <p className="text-xs text-muted-foreground">Monitoring</p>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Features */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <EyeOff className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">No Third-Party Tracking</span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Database className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">On-Premise Data Storage</span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <KeyRound className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">End-to-End Encryption</span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Server className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">FERPA & COPPA Compliant</span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Compliance Badges */}
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded-full">
                      <Shield className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-foreground">FERPA</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded-full">
                      <Shield className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-foreground">COPPA</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded-full">
                      <Shield className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-foreground">SOC 2</span>
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
              What Educators Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Hear from teachers and administrators who use BeechTree every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Principal */}
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;BeechTree has revolutionized the way our teachers interact with students, enhancing engagement and
                  safety in the classroom.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Sarah J.</p>
                  <p className="text-sm text-muted-foreground">School Principal</p>
                </div>
              </CardContent>
            </Card>

            {/* 6th Grade Teacher */}
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;My students are more engaged than ever. The AI adapts to each learner&apos;s pace, making differentiation so much easier.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Michael T.</p>
                  <p className="text-sm text-muted-foreground">6th Grade Teacher</p>
                </div>
              </CardContent>
            </Card>

            {/* Literacy Coach */}
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;The Reading Adventures program has transformed our literacy intervention. Students are making real progress with phonics.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Amanda C.</p>
                  <p className="text-sm text-muted-foreground">Literacy Coach</p>
                </div>
              </CardContent>
            </Card>

            {/* After School Club */}
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;Art Bee and Picture Books are favorites in our after-school program. Kids create amazing projects while building real skills.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">David M.</p>
                  <p className="text-sm text-muted-foreground">After School Program Director</p>
                </div>
              </CardContent>
            </Card>

            {/* 2nd Grade Teacher */}
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;Kansha has completely changed my classroom culture. Students are kinder to each other and excited to earn recognition.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Jennifer W.</p>
                  <p className="text-sm text-muted-foreground">2nd Grade Teacher</p>
                </div>
              </CardContent>
            </Card>

            {/* Special Ed Teacher */}
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;BeSO&apos;s mindfulness tools help my students self-regulate. The calming exercises have reduced meltdowns significantly.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Rachel T.</p>
                  <p className="text-sm text-muted-foreground">Special Education Teacher</p>
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
            <Link href="/demo">
              <Button size="lg" variant="outline" className="min-w-[180px] border-border hover:bg-accent bg-transparent">
                Schedule a Demo
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
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
