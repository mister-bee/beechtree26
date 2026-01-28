"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, CheckCircle2, ArrowRight, TrendingUp, Bot, Globe, Target } from "lucide-react"
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

// Feature card modal content data
const featureModals = {
  aiRecommendsYou: {
    icon: Bot,
    title: "Get Recommended by AI Assistants",
    description: "When potential customers ask ChatGPT, Claude, or Perplexity for recommendations, your business shows up—not your competitors.",
    features: [
      {
        title: "Conversational Query Optimization",
        description: "We analyze how people naturally ask AI for recommendations and position your business to match those queries."
      },
      {
        title: "Entity Recognition Strategy",
        description: "Build the digital footprint that helps AI systems recognize and recommend your business as an authority."
      },
      {
        title: "Competitive Displacement",
        description: "Identify which competitors AI currently recommends and develop strategies to take their position."
      },
      {
        title: "Multi-Model Presence",
        description: "Optimization across ChatGPT, Claude, Gemini, Perplexity, and emerging AI platforms."
      }
    ],
    stats: [
      { value: "68%", label: "of users trust AI recommendations" },
      { value: "#1", label: "Position in AI responses" }
    ]
  },
  answerEnginePresence: {
    icon: Globe,
    title: "Become an AI-Cited Source",
    description: "AI answer engines cite authoritative sources. We make sure you're one of them—appearing in Perplexity citations, Google AI Overviews, and Claude's responses.",
    features: [
      {
        title: "Citation Architecture",
        description: "Structure your content so AI systems recognize it as citable, authoritative information."
      },
      {
        title: "Perplexity Source Optimization",
        description: "Get your content cited as a primary source in Perplexity's research-backed answers."
      },
      {
        title: "Google AI Overview Targeting",
        description: "Appear in Google's AI-generated summaries that now dominate search results."
      },
      {
        title: "Authority Signal Building",
        description: "Develop the trust signals that AI systems use to determine which sources to cite."
      }
    ],
    stats: [
      { value: "40%", label: "of searches now have AI answers" },
      { value: "5x", label: "More traffic from citations" }
    ]
  },
  alwaysOnSystems: {
    icon: Zap,
    title: "Marketing That Never Sleeps",
    description: "Fully autonomous systems that create content, build authority, engage prospects, and optimize your AI visibility around the clock—without any manual intervention.",
    features: [
      {
        title: "Autonomous Content Engine",
        description: "AI-powered content creation that maintains your brand voice while publishing consistently across channels."
      },
      {
        title: "Real-Time Authority Building",
        description: "Continuous optimization of your digital presence to strengthen AI recognition and recommendations."
      },
      {
        title: "Automated Lead Nurturing",
        description: "Intelligent sequences that engage and qualify leads 24/7, so you wake up to warm prospects."
      },
      {
        title: "Self-Optimizing Campaigns",
        description: "Systems that analyze performance and adjust strategies automatically—no manual tweaking required."
      }
    ],
    stats: [
      { value: "24/7", label: "Always working" },
      { value: "0", label: "Hours of your time" }
    ]
  }
}

// Service modal content data
const serviceModals = {
  aiSearch: {
    icon: Bot,
    title: "AI Search Optimization",
    description: "Get discovered when people ask ChatGPT, Perplexity, Claude, and other AI assistants about businesses like yours.",
    features: [
      {
        title: "LLM Citation Strategy",
        description: "Position your business to be mentioned and recommended in AI-generated responses."
      },
      {
        title: "Answer Engine Optimization",
        description: "Structure your content so AI systems understand, extract, and recommend it."
      },
      {
        title: "AI Overview Presence",
        description: "Appear in Google's AI Overviews and other AI-generated search summaries."
      },
      {
        title: "Conversational Discovery",
        description: "Optimize for the questions people actually ask AI assistants about your industry."
      }
    ],
    stats: [
      { value: "3x", label: "AI search visibility" },
      { value: "Top", label: "AI recommendations" }
    ]
  },
  answerEngines: {
    icon: Globe,
    title: "Answer Engine Visibility",
    description: "Traditional SEO is dying. We optimize for how people actually search now—through AI conversations.",
    features: [
      {
        title: "Perplexity Optimization",
        description: "Get cited as a source in Perplexity's AI-powered research answers."
      },
      {
        title: "ChatGPT Recommendations",
        description: "Become the business ChatGPT suggests when users ask for recommendations."
      },
      {
        title: "Semantic Authority Building",
        description: "Build the topical authority that AI systems use to determine credibility."
      },
      {
        title: "Multi-Platform Presence",
        description: "Consistent visibility across ChatGPT, Claude, Gemini, Copilot, and emerging AI platforms."
      }
    ],
    stats: [
      { value: "New", label: "Discovery paradigm" },
      { value: "First", label: "Mover advantage" }
    ]
  },
  alwaysOnMarketing: {
    icon: Zap,
    title: "24/7 Marketing Automation",
    description: "Autonomous systems that create, publish, and optimize your marketing around the clock—no manual work required.",
    features: [
      {
        title: "Automated Content Creation",
        description: "Blog posts, updates, and copy generated continuously while maintaining your voice."
      },
      {
        title: "Intelligent Publishing",
        description: "Content scheduled and published at optimal times across all channels automatically."
      },
      {
        title: "Self-Optimizing Campaigns",
        description: "Systems that learn what works and adjust strategies in real-time without intervention."
      },
      {
        title: "Lead Nurturing on Autopilot",
        description: "Personalized follow-ups and engagement sequences that run while you sleep."
      }
    ],
    stats: [
      { value: "80%", label: "Time saved" },
      { value: "24/7", label: "Always running" }
    ]
  },
  aiContent: {
    icon: Target,
    title: "Content AI Systems Recommend",
    description: "Create content specifically designed to be cited, quoted, and recommended by AI assistants.",
    features: [
      {
        title: "AI-Optimized Structure",
        description: "Content formatted for how AI systems parse, understand, and extract information."
      },
      {
        title: "Authority Signals",
        description: "Build the credibility markers that AI uses to determine trustworthiness."
      },
      {
        title: "Citation-Worthy Content",
        description: "Create resources that AI assistants reference when answering user questions."
      },
      {
        title: "Competitive Positioning",
        description: "Outrank competitors in AI recommendations through strategic content development."
      }
    ],
    stats: [
      { value: "5x", label: "AI citations" },
      { value: "Top 3", label: "Recommendations" }
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
              Autonomous Marketing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              Marketing That Works While You Sleep
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              People don&apos;t Google anymore—they ask ChatGPT. We make sure AI recommends your business.
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
                  <p className="text-4xl font-bold text-primary">24/7</p>
                  <p className="text-muted-foreground mt-2">Always-on automation</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">80%</p>
                  <p className="text-muted-foreground mt-2">Marketing time saved</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">3x</p>
                  <p className="text-muted-foreground mt-2">AI search visibility</p>
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
              Discovery Has Changed Forever
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Traditional SEO is becoming irrelevant. Here&apos;s how we position you for the new reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* AI Recommends You Card */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">AI Recommends You</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When someone asks ChatGPT or Perplexity for a recommendation in your industry, your business comes up first.
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <DialogTitle className="text-xl">{featureModals.aiRecommendsYou.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-base">
                    {featureModals.aiRecommendsYou.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    {featureModals.aiRecommendsYou.stats.map((stat, idx) => (
                      <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">How We Do It</h4>
                    {featureModals.aiRecommendsYou.features.map((feature, idx) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-4">
                        <p className="font-medium text-foreground">{feature.title}</p>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/marketing/contact">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Get AI Recommendations Working for You
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>

            {/* Answer Engine Presence Card */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">Answer Engine Presence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get cited as a trusted source in AI-generated answers across Perplexity, Google AI Overviews, and Claude.
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <DialogTitle className="text-xl">{featureModals.answerEnginePresence.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-base">
                    {featureModals.answerEnginePresence.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    {featureModals.answerEnginePresence.stats.map((stat, idx) => (
                      <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">How We Do It</h4>
                    {featureModals.answerEnginePresence.features.map((feature, idx) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-4">
                        <p className="font-medium text-foreground">{feature.title}</p>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/marketing/contact">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Start Getting Cited by AI
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>

            {/* Always-On Systems Card */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">Always-On Systems</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Autonomous marketing that runs 24/7—creating content, building authority, and optimizing your AI visibility while you sleep.
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <DialogTitle className="text-xl">{featureModals.alwaysOnSystems.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-base">
                    {featureModals.alwaysOnSystems.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    {featureModals.alwaysOnSystems.stats.map((stat, idx) => (
                      <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">How We Do It</h4>
                    {featureModals.alwaysOnSystems.features.map((feature, idx) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-4">
                        <p className="font-medium text-foreground">{feature.title}</p>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/marketing/contact">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Set Up Your Autonomous System
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
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
                Marketing for the AI Era
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The way people find businesses has changed. They ask ChatGPT, not Google. We help you get discovered where it matters now.
              </p>
              <ul className="space-y-4">
                {/* AI Search Optimization Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <li className="flex items-start gap-3 cursor-pointer group hover:bg-accent/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground group-hover:text-primary transition-colors">AI search optimization (ChatGPT, Perplexity, Claude)</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5" />
                    </li>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Bot className="w-5 h-5 text-primary" />
                        </div>
                        <DialogTitle className="text-xl">{serviceModals.aiSearch.title}</DialogTitle>
                      </div>
                      <DialogDescription className="text-base">
                        {serviceModals.aiSearch.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceModals.aiSearch.stats.map((stat, idx) => (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">What&apos;s Included</h4>
                        {serviceModals.aiSearch.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-4">
                            <p className="font-medium text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/marketing/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Get Started with AI Search
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Answer Engine Visibility Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <li className="flex items-start gap-3 cursor-pointer group hover:bg-accent/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground group-hover:text-primary transition-colors">Answer engine visibility across AI platforms</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5" />
                    </li>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <DialogTitle className="text-xl">{serviceModals.answerEngines.title}</DialogTitle>
                      </div>
                      <DialogDescription className="text-base">
                        {serviceModals.answerEngines.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceModals.answerEngines.stats.map((stat, idx) => (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">What&apos;s Included</h4>
                        {serviceModals.answerEngines.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-4">
                            <p className="font-medium text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/marketing/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Get Started with Answer Engines
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Always-On Marketing Automation Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <li className="flex items-start gap-3 cursor-pointer group hover:bg-accent/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground group-hover:text-primary transition-colors">24/7 autonomous marketing systems</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5" />
                    </li>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <DialogTitle className="text-xl">{serviceModals.alwaysOnMarketing.title}</DialogTitle>
                      </div>
                      <DialogDescription className="text-base">
                        {serviceModals.alwaysOnMarketing.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceModals.alwaysOnMarketing.stats.map((stat, idx) => (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">What&apos;s Included</h4>
                        {serviceModals.alwaysOnMarketing.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-4">
                            <p className="font-medium text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/marketing/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Get Started with Automation
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* AI Content Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <li className="flex items-start gap-3 cursor-pointer group hover:bg-accent/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground group-hover:text-primary transition-colors">Content that AI systems recommend</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5" />
                    </li>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto theme-blue">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <DialogTitle className="text-xl">{serviceModals.aiContent.title}</DialogTitle>
                      </div>
                      <DialogDescription className="text-base">
                        {serviceModals.aiContent.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceModals.aiContent.stats.map((stat, idx) => (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">What&apos;s Included</h4>
                        {serviceModals.aiContent.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-4">
                            <p className="font-medium text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/marketing/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Get Started with AI Content
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
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">AI Visibility Dashboard</p>
                      <p className="text-sm text-muted-foreground">Track your AI search presence</p>
                    </div>
                  </div>

                  {/* AI Analytics Dashboard Mockup */}
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
                          <span>+340%</span>
                        </div>
                        <p className="text-lg font-bold text-foreground">847</p>
                        <p className="text-xs text-muted-foreground">AI Citations</p>
                      </div>
                      <div className="bg-card rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1 text-green-500 text-xs mb-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>+52%</span>
                        </div>
                        <p className="text-lg font-bold text-foreground">Top 3</p>
                        <p className="text-xs text-muted-foreground">AI Ranking</p>
                      </div>
                      <div className="bg-card rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-1 text-green-500 text-xs mb-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>+89%</span>
                        </div>
                        <p className="text-lg font-bold text-foreground">12.4K</p>
                        <p className="text-xs text-muted-foreground">AI Referrals</p>
                      </div>
                    </div>

                    {/* AI metrics */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">ChatGPT Mentions</span>
                        </div>
                        <span className="font-medium text-foreground">1,247</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Perplexity Citations</span>
                        </div>
                        <span className="font-medium text-foreground">892</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">AI Overview Appearances</span>
                        </div>
                        <span className="font-medium text-foreground">156</span>
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
              Early Movers in the AI Era
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Businesses that got ahead of the AI discovery shift
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;We now show up when people ask ChatGPT for recommendations in our space. That&apos;s where our best leads come from.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Marcus T.</p>
                  <p className="text-sm text-muted-foreground">Founder, SaaS Company</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;Our competitors are still optimizing for Google. We&apos;re getting cited by Perplexity and Claude. The game has changed.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">Rachel K.</p>
                  <p className="text-sm text-muted-foreground">VP of Growth, B2B Services</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg font-medium text-card-foreground text-center leading-relaxed">
                  &ldquo;BeechTree understood the shift before anyone else. They positioned us for how people actually find businesses now.&rdquo;
                </blockquote>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-foreground">David M.</p>
                  <p className="text-sm text-muted-foreground">CEO, Professional Services</p>
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
            The Window Is Closing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Early movers in AI search are locking in their positions. The longer you wait, the harder it gets to catch up.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/marketing/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[180px]">
                Get Your AI Visibility Audit
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
              <p className="text-sm text-muted-foreground">Marketing for the AI era</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    AI Search Optimization
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Answer Engines
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    24/7 Automation
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
