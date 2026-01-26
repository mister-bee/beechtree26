"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Target, Zap, CheckCircle2, ArrowRight, Search, Share2, Mail, DollarSign, TrendingUp, Users, MousePointer, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BusinessDropdown } from "@/components/ui/business-dropdown"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Service modal content data
const serviceModals = {
  seo: {
    icon: Search,
    title: "SEO Optimization & Content Strategy",
    description: "Drive organic traffic and establish thought leadership with our comprehensive SEO and content solutions.",
    features: [
      {
        title: "Technical SEO Audit",
        description: "Comprehensive analysis of site structure, page speed, mobile responsiveness, and crawlability issues."
      },
      {
        title: "Keyword Research & Mapping",
        description: "Intelligent keyword discovery with search intent analysis and competitor gap identification."
      },
      {
        title: "Content Calendar Planning",
        description: "Strategic content roadmap aligned with your business goals and seasonal opportunities."
      },
      {
        title: "On-Page Optimization",
        description: "Meta tags, headers, internal linking, and schema markup implementation for maximum visibility."
      }
    ],
    stats: [
      { value: "156%", label: "Avg. organic traffic increase" },
      { value: "Top 10", label: "Rankings achieved" }
    ]
  },
  social: {
    icon: Share2,
    title: "Social Media Management & Analytics",
    description: "Build brand awareness and engage your audience across all major social platforms with data-driven strategies.",
    features: [
      {
        title: "Multi-Platform Management",
        description: "Unified dashboard for Facebook, Instagram, LinkedIn, Twitter/X, and TikTok content scheduling."
      },
      {
        title: "Smart Content Generation",
        description: "Automated post creation with brand voice consistency and optimal posting time recommendations."
      },
      {
        title: "Community Engagement",
        description: "Proactive comment management, DM responses, and audience interaction monitoring."
      },
      {
        title: "Performance Analytics",
        description: "Real-time metrics tracking with custom reports on reach, engagement, and follower growth."
      }
    ],
    stats: [
      { value: "3.2x", label: "Engagement rate increase" },
      { value: "45%", label: "Time saved on posting" }
    ]
  },
  email: {
    icon: Mail,
    title: "Email Marketing Automation",
    description: "Nurture leads and retain customers with personalized email campaigns that deliver results.",
    features: [
      {
        title: "Automated Workflows",
        description: "Welcome series, abandoned cart recovery, re-engagement campaigns, and post-purchase sequences."
      },
      {
        title: "Segmentation & Personalization",
        description: "Advanced audience segmentation with dynamic content blocks and personalized recommendations."
      },
      {
        title: "A/B Testing",
        description: "Subject line, content, and send time optimization through continuous multivariate testing."
      },
      {
        title: "Deliverability Management",
        description: "List hygiene, authentication setup, and inbox placement monitoring to maximize reach."
      }
    ],
    stats: [
      { value: "42%", label: "Avg. open rate achieved" },
      { value: "8x", label: "ROI on email campaigns" }
    ]
  },
  ppc: {
    icon: DollarSign,
    title: "Paid Advertising & PPC Management",
    description: "Maximize your ad spend with optimized campaigns across Google, Meta, and programmatic networks.",
    features: [
      {
        title: "Campaign Strategy",
        description: "Full-funnel campaign architecture from awareness to conversion with budget allocation optimization."
      },
      {
        title: "Creative Development",
        description: "Ad copy, display banners, and video assets with automated creative testing and iteration."
      },
      {
        title: "Bid Management",
        description: "Real-time bid optimization using machine learning to maximize ROAS and minimize CPA."
      },
      {
        title: "Attribution & Reporting",
        description: "Cross-channel attribution modeling with transparent reporting on spend and performance metrics."
      }
    ],
    stats: [
      { value: "2.8x", label: "Avg. ROAS improvement" },
      { value: "-35%", label: "Cost per acquisition" }
    ]
  }
}

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background theme-blue">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <BusinessDropdown currentBusiness="marketing" />
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <Link href="/marketing/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
              AI-Powered Marketing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              Grow Your Business Smarter
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              BeechTree Marketing leverages data-driven strategies to create campaigns that deliver real results
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="#services">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[180px]">
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/marketing/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[180px] border-border hover:bg-accent bg-transparent"
                >
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative z-10 bg-card border border-border/50 rounded-xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-primary">3x</p>
                  <p className="text-muted-foreground mt-2">Average ROI increase</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">50%</p>
                  <p className="text-muted-foreground mt-2">Time saved on campaigns</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">10k+</p>
                  <p className="text-muted-foreground mt-2">Campaigns optimized</p>
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
              Marketing Intelligence That Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our platform transforms your marketing strategy with data-driven insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Data-Driven Campaigns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage advanced analytics to create campaigns that resonate with your target audience and drive
                  measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Content Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generate high-quality marketing content at scale with automated copywriting and creative
                  automation tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Precision Targeting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reach the right audience at the right time with precision targeting and
                  personalization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Full-Stack Marketing Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From strategy to execution, BeechTree Marketing provides end-to-end solutions powered by
                artificial intelligence.
              </p>
              <ul className="space-y-4">
                {/* SEO Service Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <li className="flex items-start gap-3 cursor-pointer group hover:bg-accent/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground group-hover:text-primary transition-colors">SEO optimization and content strategy</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5" />
                    </li>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Search className="w-5 h-5 text-primary" />
                        </div>
                        <DialogTitle className="text-xl">{serviceModals.seo.title}</DialogTitle>
                      </div>
                      <DialogDescription className="text-base">
                        {serviceModals.seo.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceModals.seo.stats.map((stat, idx) => (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">What&apos;s Included</h4>
                        {serviceModals.seo.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-4">
                            <p className="font-medium text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/marketing/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Get Started with SEO
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Social Media Service Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <li className="flex items-start gap-3 cursor-pointer group hover:bg-accent/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground group-hover:text-primary transition-colors">Social media management and analytics</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5" />
                    </li>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Share2 className="w-5 h-5 text-primary" />
                        </div>
                        <DialogTitle className="text-xl">{serviceModals.social.title}</DialogTitle>
                      </div>
                      <DialogDescription className="text-base">
                        {serviceModals.social.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceModals.social.stats.map((stat, idx) => (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">What&apos;s Included</h4>
                        {serviceModals.social.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-4">
                            <p className="font-medium text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/marketing/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Get Started with Social Media
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Email Marketing Service Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <li className="flex items-start gap-3 cursor-pointer group hover:bg-accent/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground group-hover:text-primary transition-colors">Email marketing automation</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5" />
                    </li>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <DialogTitle className="text-xl">{serviceModals.email.title}</DialogTitle>
                      </div>
                      <DialogDescription className="text-base">
                        {serviceModals.email.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceModals.email.stats.map((stat, idx) => (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">What&apos;s Included</h4>
                        {serviceModals.email.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-4">
                            <p className="font-medium text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/marketing/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Get Started with Email Marketing
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* PPC Service Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <li className="flex items-start gap-3 cursor-pointer group hover:bg-accent/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground group-hover:text-primary transition-colors">Paid advertising and PPC management</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5" />
                    </li>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-primary" />
                        </div>
                        <DialogTitle className="text-xl">{serviceModals.ppc.title}</DialogTitle>
                      </div>
                      <DialogDescription className="text-base">
                        {serviceModals.ppc.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceModals.ppc.stats.map((stat, idx) => (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">What&apos;s Included</h4>
                        {serviceModals.ppc.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-4">
                            <p className="font-medium text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/marketing/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Get Started with PPC
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
              </ul>
              <Link href="/marketing/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative z-10 bg-card border border-border/50 rounded-xl shadow-2xl p-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Campaign Analytics</p>
                      <p className="text-sm text-muted-foreground">Real-time performance tracking</p>
                    </div>
                  </div>

                  {/* Analytics Dashboard Mockup */}
                  <div className="bg-accent/30 rounded-lg p-4 space-y-4">
                    {/* Mini chart bars */}
                    <div className="flex items-end gap-2 h-20 px-2">
                      <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '45%' }} />
                      <div className="flex-1 bg-primary/30 rounded-t" style={{ height: '65%' }} />
                      <div className="flex-1 bg-primary/40 rounded-t" style={{ height: '55%' }} />
                      <div className="flex-1 bg-primary/50 rounded-t" style={{ height: '80%' }} />
                      <div className="flex-1 bg-primary/60 rounded-t" style={{ height: '70%' }} />
                      <div className="flex-1 bg-primary/70 rounded-t" style={{ height: '90%' }} />
                      <div className="flex-1 bg-primary rounded-t" style={{ height: '100%' }} />
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-card rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1 text-green-500 text-xs mb-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>+24%</span>
                        </div>
                        <p className="text-lg font-bold text-foreground">12.4K</p>
                        <p className="text-xs text-muted-foreground">Visitors</p>
                      </div>
                      <div className="bg-card rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1 text-green-500 text-xs mb-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>+18%</span>
                        </div>
                        <p className="text-lg font-bold text-foreground">3.2%</p>
                        <p className="text-xs text-muted-foreground">Conv. Rate</p>
                      </div>
                      <div className="bg-card rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1 text-green-500 text-xs mb-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>+32%</span>
                        </div>
                        <p className="text-lg font-bold text-foreground">$8.2K</p>
                        <p className="text-xs text-muted-foreground">Revenue</p>
                      </div>
                    </div>

                    {/* Campaign metrics */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Impressions</span>
                        </div>
                        <span className="font-medium text-foreground">245,892</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <MousePointer className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Clicks</span>
                        </div>
                        <span className="font-medium text-foreground">8,742</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">New Leads</span>
                        </div>
                        <span className="font-medium text-foreground">312</span>
                      </div>
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
              Trusted by Growing Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See what our clients say about BeechTree Marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;BeechTree&apos;s data-driven approach doubled our lead generation in just three months.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Marketing Director</p>
                  <p className="text-sm text-muted-foreground">Tech Startup</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;The content automation tools have transformed how we approach social media marketing.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Brand Manager</p>
                  <p className="text-sm text-muted-foreground">E-commerce Company</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;Finally, a marketing partner that understands data and delivers real ROI.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">CEO</p>
                  <p className="text-sm text-muted-foreground">Small Business</p>
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
            Ready to Supercharge Your Marketing?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join businesses that trust BeechTree to deliver measurable marketing results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/marketing/contact">
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
                <Image src="/images/tree-logo-darkblue.webp" alt="BeechTree Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-semibold text-foreground">BeechTree</span>
              </div>
              <p className="text-sm text-muted-foreground">Data-driven marketing solutions</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    SEO & Content
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Paid Ads
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
                  <Link href="/marketing/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
