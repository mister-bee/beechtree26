"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHandPaper,
  FaBook,
  FaPencilAlt,
  FaHandshake,
  FaUniversity,
  FaFileAlt,
  FaHeart,
  FaPalette,
  FaChild,
} from "react-icons/fa";

interface SoftwareProduct {
  title: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
}

export default function SoftwarePage() {
  const currentYear = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SoftwareProduct | null>(null);

  const softwareProducts: SoftwareProduct[] = [
    {
      title: "Kansha",
      tagline: "Gratitude based classroom management",
      icon: <FaHandPaper />,
      description:
        "Kansha revolutionizes classroom management by focusing on positive reinforcement and gratitude. This innovative platform helps teachers track and reward good behavior, fostering a supportive learning environment. Features include digital reward systems, behavior tracking analytics, and parent communication tools.",
    },
    {
      title: "Picture Books",
      tagline: "Amazing AI stories for kids",
      icon: <FaChild />,
      description:
        "Create personalized picture books using advanced AI technology. Teachers and students can generate unique stories tailored to specific learning objectives, reading levels, and interests. Includes a vast library of AI-generated illustrations and customizable narrative templates.",
    },
    {
      title: "Writing Universe",
      tagline: "Using AI to curate creative writing",
      icon: <FaPencilAlt />,
      description:
        "An interactive platform that guides students through the creative writing process. Features AI-powered writing prompts, story structure assistance, and real-time feedback on grammar and style. Includes collaborative writing tools and portfolio management.",
    },
    {
      title: "Reading Adventures",
      tagline:
        "Using AI to build up phonics and fluency and students according to level",
      icon: <FaBook />,
      description:
        "Adaptive reading platform that automatically adjusts to each student's reading level. Incorporates interactive phonics exercises, comprehension activities, and progress tracking. Features voice recognition for reading practice and immediate feedback.",
    },
    {
      title: "Peace Out",
      tagline: "Using an AI facilitator to arrive at conflict resolutions",
      icon: <FaHandshake />,
      description:
        "An AI-powered conflict resolution tool that helps students and teachers navigate disagreements constructively. Provides guided meditation exercises, conflict resolution strategies, and documentation of agreements reached.",
    },
    {
      title: "Classroom Democracy",
      tagline: "Classroom management based on the US government",
      icon: <FaUniversity />,
      description:
        "Transform your classroom into a mini democracy with this comprehensive platform. Students learn about government processes while participating in classroom decision-making. Includes voting systems, role assignments, and civic education materials.",
    },
    {
      title: "Testing Champ",
      tagline: "Using AI to hone in on test skills",
      icon: <FaFileAlt />,
      description:
        "Comprehensive test preparation platform that adapts to individual student needs. Features practice tests, performance analytics, personalized study plans, and stress management techniques. Covers standardized tests and customizable assessments.",
    },
    {
      title: "BeSO",
      tagline:
        "Breathing, stretching, observing: Using yoga and meditation in the classroom",
      icon: <FaHeart />,
      description:
        "Mindfulness and movement program designed specifically for classroom use. Includes guided breathing exercises, age-appropriate yoga poses, and mindfulness activities. Features timer tools, activity tracking, and classroom management integration.",
    },
    {
      title: "Art Bee",
      tagline: "AI-powered creative arts and visual learning platform",
      icon: <FaPalette />,
      description:
        "Art Bee buzzes with creativity, offering students and teachers an innovative platform for digital art creation and visual learning. Features AI-assisted drawing tools, collaborative art projects, and curriculum-integrated visual arts lessons. Includes virtual art galleries, step-by-step tutorials, and assessment tools for creative projects. Perfect for developing artistic skills while enhancing visual communication and creative thinking across all subjects.",
    },
  ];

  const handleCardClick = (product: SoftwareProduct) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/treelogo2.webp" alt="BeechTree Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-semibold text-foreground">BeechTree</span>
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12">
            Our Software Solutions
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareProducts.map((product, index) => (
              <div
                key={index}
                className="software-card bg-card border border-border/50 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
                onClick={() => handleCardClick(product)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="software-icon text-4xl text-primary">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="bg-card border border-border rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-card-foreground">
                {selectedProduct.title}
              </h2>
              <button
                className="text-muted-foreground hover:text-foreground text-2xl font-light transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-center text-5xl text-primary">
                {selectedProduct.icon}
              </div>
              <p className="text-lg font-medium text-foreground text-center">
                {selectedProduct.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
            <div className="p-6 border-t border-border flex justify-end gap-3">
              <button
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                onClick={handleCloseModal}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 lg:px-8 bg-accent/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} BeechTree LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
